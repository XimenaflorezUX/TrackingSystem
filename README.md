# Tracking System

Interfaz de seguimiento de procesos de selección (React + Vite + TypeScript + SASS) con API Express opcional en `server/`. Incluye un **menú de navegación** para recorrer todas las pantallas de la demo sin modificar código.

> **Repositorio privado:** solo quienes tengan acceso en GitHub podrán clonar e instalar. La dueña del repo debe invitar colaboradores en *Settings → Collaborators* (o acceso vía organización/equipo).

## Demo en vivo (cliente / stakeholders)

Tras el primer push a `main`, GitHub Actions publica el front en **GitHub Pages**.

| Enlace | Uso |
|--------|-----|
| [Demo — menú principal](https://ximenaflorezux.github.io/TrackingSystem/?view=hub) | Punto de entrada para recorrer flujos |
| [Vista analista — vacantes](https://ximenaflorezux.github.io/TrackingSystem/?view=analista-vacantes) | Dashboard analista |
| [Vista cliente — vacantes](https://ximenaflorezux.github.io/TrackingSystem/?view=vacantes) | Dashboard cliente interno |

**Activar Pages (una vez):** en el repo → *Settings → Pages → Build and deployment* → origen **GitHub Actions**.

La UI en Pages usa datos mock; no requiere el API. Si el sitio no carga a la primera, espera 2–5 minutos al terminar el workflow *Deploy to GitHub Pages* en la pestaña *Actions*.

Dependencia UI: **`vendor/magneto365.ui`** (build incluida en el repo para deploy y clones sin yalc). Ver `vendor/magneto365.ui/README.md`.

---

## Requisitos

| Herramienta | Versión |
|-------------|---------|
| Node.js | 18 o superior |
| npm | Incluido con Node |
| Git | Para clonar el repo privado |

### Dependencia `magneto365.ui`

El front usa **magneto365.ui** empaquetado en el repositorio:

```json
"magneto365.ui": "file:vendor/magneto365.ui"
```

No hace falta yalc ni clonar [`magneto-ui`](https://github.com/XimenaflorezUX/magneto-ui) para instalar. El archivo `.npmrc` usa `legacy-peer-deps` e `ignore-scripts` por compatibilidad con React 18 y el script `prepare` del paquete original.

---

## Acceso al repositorio privado

1. Acepta la invitación de GitHub al correo asociado a tu cuenta.
2. Clona con HTTPS (te pedirá usuario + **Personal Access Token**) o con SSH:

```bash
# HTTPS
git clone https://github.com/XimenaflorezUX/TrackingSystem.git
cd TrackingSystem

# SSH (si tienes llave configurada en GitHub)
git clone git@github.com:XimenaflorezUX/TrackingSystem.git
cd TrackingSystem
```

Para instalar dependencias desde otro repo privado vía `package.json`, puede hacer falta un token con permiso `repo` o usar SSH en la URL del paquete.

---

## Instalación

### 1. Dependencias (front + API)

```bash
npm run setup
```

Equivale a `npm install` en la raíz y `npm install` en `server/`.

### 2. Variables de entorno (opcional)

| Archivo | Acción |
|---------|--------|
| `server/.env.example` | Copiar a `server/.env` si vas a usar correo/SMTP o cambiar puerto |
| `.env.example` | Copiar a `.env.local` solo si despliegas el front contra un API remoto |

**Desarrollo local:** deja `VITE_API_BASE_URL` vacío. Vite reenvía `/vacancies` y `/health` al API en el puerto 4000.

---

## Ejecutar el proyecto

### Opción recomendada — web + API

```bash
npm start
```

- **Front:** [http://localhost:5173](http://localhost:5173)
- **API:** [http://localhost:4000](http://localhost:4000)
- **Health check:** [http://localhost:4000/health](http://localhost:4000/health) → debe responder `{"ok":true}`

El front espera a que el API responda antes de abrir Vite.

### Solo front (UI con datos mock)

```bash
npm run dev
```

La mayoría de pantallas (listados, candidatos, historial, drawers) usan **datos de ejemplo** en el código. El API es necesario sobre todo para **compartir vacante** y persistencia en `POST /vacancies`.

### Solo API

```bash
npm run server:dev
```

### Build y vista previa de producción

```bash
npm run build
npm run preview
```

---

## Navegar por las pantallas

Al abrir la app sin parámetros, o con `?view=hub`, verás el **Menú principal** (*Navigation Hub*). Desde ahí puedes entrar a cada flujo. En cualquier pantalla usa el botón flotante **Menú principal** para volver al hub.

También puedes abrir directamente una vista con el parámetro `view` en la URL:

| URL (local) | Pantalla |
|-------------|----------|
| `http://localhost:5173/` | Menú principal (hub) |
| `http://localhost:5173/?view=hub` | Menú principal |
| `http://localhost:5173/?view=vacantes` | Dashboard — cliente interno |
| `http://localhost:5173/?view=analista-vacantes` | Dashboard — vista analista |
| `http://localhost:5173/?view=candidates` | Candidatos (cliente), vacante de ejemplo |
| `http://localhost:5173/?view=candidates-analista` | Candidatos (analista) |
| `http://localhost:5173/?view=candidates-analista&share=1` | Candidatos analista + modal **Compartir** abierto |
| `http://localhost:5173/?view=email-preview` | Vista previa del correo de invitación |
| `http://localhost:5173/?view=otp-landing` | Pantalla OTP (código de acceso) |

### Parámetros adicionales (cliente / candidatos)

| Parámetro | Ejemplo | Efecto |
|-----------|---------|--------|
| `candidate` | `?view=candidates&candidate=c-01` | Abre el perfil del candidato indicado |
| `tab` | `&tab=comentarios` | Pestaña del perfil: `valoraciones` o `comentarios` |
| `historial` | `&historial=1` | Abre el drawer de historial al entrar |
| `code` | `?view=otp-landing&code=123456` | Prellena OTP (6 dígitos en URL) |

**Ejemplo — perfil con comentarios e historial:**

```
http://localhost:5173/?view=candidates&candidate=c-01&tab=comentarios&historial=1
```

### Demo OTP (desarrollo)

En la pantalla OTP, para pruebas sin backend:

| Código | Comportamiento |
|--------|----------------|
| `111111` | Verificación correcta → dashboard cliente |
| `222222` | Simula código incorrecto (mensaje de error) |

### Flujo sugerido para revisar el producto

1. `?view=hub` — explorar enlaces del menú.
2. **Vista analista:** dashboard → candidatos → compartir vacante → simulación de correo.
3. **Vista cliente:** correo → OTP → dashboard → candidatos → perfil / comentarios / historial.

---

## Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm run setup` | Instala dependencias (raíz + `server/`) |
| `npm start` | Web + API en paralelo |
| `npm run dev` | Solo front (Vite, puerto 5173) |
| `npm run server:dev` | Solo API (puerto 4000) |
| `npm run build` | Compila el front (`tsc` + `vite build`) |
| `npm run preview` | Sirve el build localmente |

---

## Variables de entorno

| Archivo | Uso |
|---------|-----|
| `.env.example` | `VITE_API_BASE_URL` — URL del API en producción |
| `server/.env.example` | Puerto, SMTP, CORS, ruta de datos |

Sin SMTP configurado, el API puede usar **Ethereal.email** (correo de prueba; enlace de vista previa en la consola del servidor).

---

## Estructura del proyecto

```
src/
  features/
    navigation-hub/     → Menú principal de la demo
    vista-analista/     → Dashboard, candidatos, compartir, historial
    cliente-interno/    → Dashboard, candidatos, email, OTP
  navigation/           → Lectura/escritura de ?view= en la URL
  api/                  → Cliente HTTP hacia /vacancies
server/                 → API Express (vacantes, correo)
scripts/                → Utilidades de desarrollo
```

---

## Producción (referencia)

1. Desplegar `server/` (Render, Railway, etc.).
2. Build del front: `VITE_API_BASE_URL=https://tu-api.ejemplo.com npm run build`
3. En el API, configurar `CLIENT_ORIGIN` con la URL del front (CORS).

---

## Problemas frecuentes

| Problema | Qué revisar |
|----------|-------------|
| Error al instalar `magneto365.ui` | Configurar yalc o dependencia GitHub; no existe `.yalc/` en el clone |
| `npm start` no abre Vite | API no responde en `:4000` — revisar `server/` y `/health` |
| Pantalla en blanco tras build | Revisar consola del navegador; dependencia UI sin `dist/` |
| No puedo clonar | Repo privado: pedir acceso a la mantenedora del repo |

---

## Contacto / mantenimiento

Repositorio mantenido por **[XimenaflorezUX](https://github.com/XimenaflorezUX)**. Para acceso al repo privado o a `magneto-ui`, contactar a la dueña del proyecto en GitHub.
