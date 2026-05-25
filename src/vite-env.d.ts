/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base del API (ej. `http://localhost:4000`). Vacío = misma origen; en `npm run dev` use el proxy de Vite. */
  readonly VITE_API_BASE_URL?: string;
}
