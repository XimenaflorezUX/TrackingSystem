import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const serverModules = join(root, 'server', 'node_modules');

if (!existsSync(serverModules)) {
  console.error('\n  [!] No se encontró server/node_modules.\n');
  console.error('      Instale dependencias del API con:\n');
  console.error('        npm run setup\n');
  console.error('      o solo el servidor:\n');
  console.error('        npm run server:install\n');
  process.exit(1);
}
