import express from 'express';
import cors from 'cors';
import { vacanciesRouter } from './routes/vacancies.routes.js';

const CLIENT_ORIGINS = (process.env.CLIENT_ORIGIN ?? 'http://localhost:5173')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

export function createApp(): express.Application {
  const app = express();
  app.use(
    cors({
      origin: CLIENT_ORIGINS.length > 0 ? CLIENT_ORIGINS : true,
    }),
  );
  app.use(express.json({ limit: '256kb' }));

  app.get('/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.use('/vacancies', vacanciesRouter);

  app.use(
    (err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
      if (err instanceof Error && err.message.startsWith('INVALID_')) {
        res.status(400).json({ error: err.message });
        return;
      }
      if (err instanceof Error && err.message === 'EMAIL_SEND_FAILED') {
        res.status(502).json({ error: err.message, detail: 'No se pudo enviar el correo; el registro no se guardó.' });
        return;
      }
      console.error(err);
      res.status(500).json({ error: 'INTERNAL_ERROR' });
    },
  );

  return app;
}
