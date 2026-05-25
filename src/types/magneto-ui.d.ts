/**
 * Shim mínimo: los .d.ts de `magneto365.ui` referencian el paquete de tipos `magneto-ui`.
 * Evita errores de TS en el consumidor sin instalar ese paquete.
 */
declare module 'magneto-ui' {
  export type MagnetoUIColor = string;
  export type MagnetoUIText = string | number;
}
