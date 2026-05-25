import { useState, useMemo } from 'react';
import type { TrackingAccess, StatusFilter } from './interfaces/tracking-access.interface';
import { mockTrackingAccesses } from './mocks/mockTrackingData';
import './TrackingAdminDashboard.scss';

// ─── Constants ────────────────────────────────────────────────────────────────

const PAGE_SIZE = 10;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

interface StatusBadgeProps {
  isActive: boolean;
}

const StatusBadge = ({ isActive }: StatusBadgeProps) => (
  <span
    className={`tracking-table__badge tracking-table__badge--${isActive ? 'active' : 'inactive'}`}
    aria-label={isActive ? 'Estado: Activo' : 'Estado: Inactivo'}
  >
    {isActive ? 'Activo' : 'Inactivo'}
  </span>
);

interface RowActionsProps {
  access: TrackingAccess;
  onCopyLink: (id: string) => void;
  onView: (id: string) => void;
  onSettings: (id: string) => void;
}

const RowActions = ({ access, onCopyLink, onView, onSettings }: RowActionsProps) => (
  <div className="tracking-table__actions" role="group" aria-label={`Acciones para ${access.vacancyName}`}>
    <button
      className="tracking-table__action-btn"
      onClick={() => onCopyLink(access.id)}
      aria-label="Copiar enlace de acceso"
      type="button"
    >
      {/* Link icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </button>
    <button
      className="tracking-table__action-btn"
      onClick={() => onView(access.id)}
      aria-label="Visualizar tracking"
      type="button"
    >
      {/* Eye icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    </button>
    <button
      className="tracking-table__action-btn"
      onClick={() => onSettings(access.id)}
      aria-label="Configurar acceso"
      type="button"
    >
      {/* More options icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" />
      </svg>
    </button>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const TrackingAdminDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Filtering
  const filtered = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return mockTrackingAccesses.filter((item) => {
      const matchesSearch =
        !query ||
        item.vacancyName.toLowerCase().includes(query) ||
        item.internalClientEmail.toLowerCase().includes(query);

      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'active' && item.isActive) ||
        (statusFilter === 'inactive' && !item.isActive);

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * PAGE_SIZE;
  const pageItems = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleStatusFilter = (value: StatusFilter) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleCopyLink = (id: string) => {
    void navigator.clipboard.writeText(`${window.location.origin}/tracking/${id}`);
  };

  const handleView = (id: string) => {
    console.info('Ver tracking:', id);
  };

  const handleSettings = (id: string) => {
    console.info('Configurar acceso:', id);
  };

  const rangeEnd = Math.min(pageStart + PAGE_SIZE, filtered.length);

  return (
    <div className="tracking-admin">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <header className="tracking-admin__header">
        <div className="tracking-admin__heading">
          <h1 className="tracking-admin__title">Tracking de procesos</h1>
          <p className="tracking-admin__subtitle">
            Crea accesos rápidos para que tus clientes internos puedan hacer seguimiento
            en tiempo real al estado de sus vacantes.
          </p>
        </div>
        <button className="tracking-admin__create-btn" type="button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Crear acceso rápido
        </button>
      </header>

      {/* ── Main card ──────────────────────────────────────────────────── */}
      <div className="tracking-admin__card">

        {/* Filter bar */}
        <div className="tracking-filters">
          <label className="tracking-filters__search-wrapper" htmlFor="search-input">
            <svg className="tracking-filters__search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="search-input"
              className="tracking-filters__search-input"
              type="search"
              placeholder="Buscar por vacante o cliente..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              aria-label="Buscar accesos de tracking"
            />
          </label>

          <div className="tracking-filters__select-wrapper">
            <select
              className="tracking-filters__select"
              value={statusFilter}
              onChange={(e) => handleStatusFilter(e.target.value as StatusFilter)}
              aria-label="Filtrar por estado"
            >
              <option value="all">Todos los estados</option>
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
            <svg className="tracking-filters__chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Table */}
        <div className="tracking-table__wrapper" role="region" aria-label="Tabla de accesos de tracking" tabIndex={0}>
          <table className="tracking-table" aria-live="polite">
            <thead className="tracking-table__head">
              <tr>
                <th className="tracking-table__th tracking-table__th--vacancy" scope="col">Vacante</th>
                <th className="tracking-table__th" scope="col">Fecha de creación</th>
                <th className="tracking-table__th" scope="col">Cliente interno</th>
                <th className="tracking-table__th tracking-table__th--center" scope="col">Candidatos</th>
                <th className="tracking-table__th" scope="col">Estado</th>
                <th className="tracking-table__th tracking-table__th--right" scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody className="tracking-table__body">
              {pageItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="tracking-table__empty">
                    No se encontraron accesos con los filtros aplicados.
                  </td>
                </tr>
              ) : (
                pageItems.map((access) => (
                  <tr key={access.id} className="tracking-table__row">
                    {/* Vacante */}
                    <td className="tracking-table__td tracking-table__td--vacancy">
                      <span className="tracking-table__vacancy-name">{access.vacancyName}</span>
                      <span className="tracking-table__vacancy-meta">
                        {access.recruiterName}&nbsp;·&nbsp;{access.location}
                      </span>
                    </td>
                    {/* Fecha */}
                    <td className="tracking-table__td">
                      <span className="tracking-table__date">{formatDate(access.createdAt)}</span>
                    </td>
                    {/* Cliente */}
                    <td className="tracking-table__td">
                      <span className="tracking-table__email">{access.internalClientEmail}</span>
                    </td>
                    {/* Candidatos */}
                    <td className="tracking-table__td tracking-table__td--center">
                      <span className="tracking-table__candidates-count">
                        {access.candidatesCount}
                      </span>
                    </td>
                    {/* Estado */}
                    <td className="tracking-table__td">
                      <StatusBadge isActive={access.isActive} />
                    </td>
                    {/* Acciones */}
                    <td className="tracking-table__td tracking-table__td--right">
                      <RowActions
                        access={access}
                        onCopyLink={handleCopyLink}
                        onView={handleView}
                        onSettings={handleSettings}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <footer className="tracking-pagination" aria-label="Paginación">
          <p className="tracking-pagination__info">
            {filtered.length === 0
              ? 'Sin resultados'
              : `Mostrando ${pageStart + 1}–${rangeEnd} de ${filtered.length} accesos`}
          </p>
          <div className="tracking-pagination__controls">
            <button
              className="tracking-pagination__btn"
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={safePage <= 1}
              aria-label="Página anterior"
              type="button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Anterior
            </button>
            <span className="tracking-pagination__current" aria-current="page">
              {safePage} / {totalPages}
            </span>
            <button
              className="tracking-pagination__btn"
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={safePage >= totalPages}
              aria-label="Página siguiente"
              type="button"
            >
              Siguiente
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default TrackingAdminDashboard;
