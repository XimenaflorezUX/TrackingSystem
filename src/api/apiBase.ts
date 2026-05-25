/** Base del API. Vacío = misma origen; en dev Vite hace proxy a localhost:4000. */
export function apiBase(): string {
  const raw = import.meta.env.VITE_API_BASE_URL;
  if (typeof raw === 'string' && raw.trim().length > 0) {
    return raw.replace(/\/$/, '');
  }
  return '';
}
