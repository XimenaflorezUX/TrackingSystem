import { useState } from 'react';
import { Typography } from 'magneto365.ui';
import type { InternalClientActionItem, InternalClientTraceTag } from './historial-vacante.types';
import {
  canExpandAffectedList,
  expandToggleLabel,
  formatInternalClientActionImpact,
  getAffectedListGroups,
} from './internalClientImpact';

const IconChevronDown = (): JSX.Element => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const IconActionComment = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconActionRating = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconActionDecision = (): JSX.Element => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </svg>
);

function actionIcon(actionType: InternalClientTraceTag): JSX.Element {
  switch (actionType) {
    case 'Comentario':
      return <IconActionComment />;
    case 'Calificación':
      return <IconActionRating />;
    case 'Decisión':
      return <IconActionDecision />;
  }
}

function actionIconModifier(actionType: InternalClientTraceTag): string {
  switch (actionType) {
    case 'Comentario':
      return 'comment';
    case 'Calificación':
      return 'rating';
    case 'Decisión':
      return 'decision';
  }
}

export interface InternalClientActionRowProps {
  action: InternalClientActionItem;
}

export function InternalClientActionRow({ action }: InternalClientActionRowProps): JSX.Element | null {
  const [open, setOpen] = useState(false);
  const impactSummary = formatInternalClientActionImpact(action.actionType, action.impact);
  const expandable = canExpandAffectedList(action);
  const groups = getAffectedListGroups(action);
  const listId = `hvd-action-list-${action.id}`;

  if (impactSummary === null) return null;

  return (
    <div id={`hvd-action-${action.id}`} className="hvd-log__action-item">
      <div className="hvd-log__action-head">
        <span className={`hvd-log__action-icon hvd-log__action-icon--${actionIconModifier(action.actionType)}`} aria-hidden>
          {actionIcon(action.actionType)}
        </span>
        <Typography.Text size="sm" color="grey-800" className="hvd-log__impact-summary">
          {impactSummary}
        </Typography.Text>
      </div>
      {expandable && (
        <>
          <button
            type="button"
            className="hvd-log__action-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={listId}
            id={`hvd-action-trigger-${action.id}`}
          >
            <Typography.Text size="sm" color="grey-600" strong>
              {expandToggleLabel(action)}
            </Typography.Text>
            <span className={`hvd-log__action-chevron${open ? ' hvd-log__action-chevron--open' : ''}`} aria-hidden>
              <IconChevronDown />
            </span>
          </button>
          {open && (
            <div id={listId} className="hvd-log__action-lists" role="region" aria-labelledby={`hvd-action-trigger-${action.id}`}>
              {groups.map((group) => (
                <div key={group.label} className="hvd-log__action-list-group">
                  {groups.length > 1 && (
                    <span className="hvd-log__action-list-heading">{group.label}</span>
                  )}
                  <ul className="hvd-log__action-list">
                    {group.names.map((name) => (
                      <li key={name} className="hvd-log__action-list-item">
                        <Typography.Text size="sm" color="grey-700">
                          {name}
                        </Typography.Text>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
