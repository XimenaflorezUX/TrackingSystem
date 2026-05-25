import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';
import type { Plugin as EsbuildPlugin } from 'esbuild';

const tslibAbs = path.resolve(__dirname, 'node_modules/tslib/tslib.es6.js');

function tslibMatches(spec: string): boolean {
  const n = spec.split(path.sep).join('/');
  return n.includes('node_modules/tslib/tslib.es6.js');
}

/**
 * Rollup (build + dev transform): redirige importaciones rotas de tslib dentro de `magneto365.ui`.
 */
function resolveMagnetoTslibVite(): Plugin {
  return {
    name: 'resolve-magneto-tslib-vite',
    enforce: 'pre',
    resolveId(source) {
      if (tslibMatches(source)) {
        return tslibAbs;
      }
      return null;
    },
  };
}

/**
 * Esbuild (scan / pre-bundle de `optimizeDeps`): a veces no usa el mismo grafo que `resolveId` de Vite.
 */
function resolveMagnetoTslibEsbuild(): EsbuildPlugin {
  return {
    name: 'resolve-magneto-tslib-esbuild',
    setup(build) {
      build.onResolve({ filter: /tslib\.es6\.js$/ }, (args) => {
        if (tslibMatches(args.path) || tslibMatches(args.importer ?? '')) {
          return { path: tslibAbs };
        }
        return null;
      });
    },
  };
}

/** GitHub Pages sirve en /TrackingSystem/; en local y preview se usa raíz. */
const pagesBase = process.env.GITHUB_PAGES === 'true' ? '/TrackingSystem/' : '/';

export default defineConfig({
  base: pagesBase,
  plugins: [react(), resolveMagnetoTslibVite()],
  server: {
    /** `true` = escuchar en 0.0.0.0 (útil si 127.0.0.1 vs localhost falla o accedes desde otro dispositivo en la red). */
    host: true,
    proxy: {
      // Desarrollo: el front llama a `/vacancies` sin CORS; Vite reenvía al API en el puerto 4000.
      '/vacancies': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://localhost:4000',
        changeOrigin: true,
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [resolveMagnetoTslibEsbuild()],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [
          path.resolve(__dirname, 'node_modules'),
          // Los .scss de tokens no están en "exports" del paquete; se resuelven por ruta de carpeta.
          path.resolve(__dirname, 'node_modules/magneto365.ui/dist'),
        ],
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
