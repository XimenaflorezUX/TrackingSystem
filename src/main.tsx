import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MagnetoUIProvider } from 'magneto365.ui';
import 'magneto365.ui/dist/esm/css/magneto.ui.lib.min.css';
import './styles/global.scss';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento #root en el DOM.');
}

createRoot(rootElement).render(
  <StrictMode>
    <MagnetoUIProvider device="desktop">
      <App />
    </MagnetoUIProvider>
  </StrictMode>,
);
