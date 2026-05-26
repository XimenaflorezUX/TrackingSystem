/** Base pública de `public/branding/` respetando `vite` `base` (p. ej. `/TrackingSystem/` en Pages). */
const BRANDING_BASE = `${import.meta.env.BASE_URL}branding/`;

export function brandingAssetUrl(fileName: string): string {
  return `${BRANDING_BASE}${fileName}`;
}
