import { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { createVacancyShare, listVacancyShares, revokeVacancyShare } from '../services/vacancy.service.js';

export const vacanciesRouter = Router();

vacanciesRouter.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await listVacancyShares();
    res.json(items);
  } catch (e) {
    next(e);
  }
});

vacanciesRouter.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const created = await createVacancyShare(req.body);
    res.status(201).json(created);
  } catch (e) {
    next(e);
  }
});

/** HU 13 — PATCH /vacancies/:id/revoke  — revoca un acceso compartido. */
vacanciesRouter.patch('/:id/revoke', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const revokedBy =
      typeof req.body?.revokedBy === 'string' ? (req.body as { revokedBy: string }).revokedBy : 'Analista';
    const updated = await revokeVacancyShare(id, revokedBy);
    res.json(updated);
  } catch (e) {
    const err = e as Error;
    if (err.message === 'ACCESS_NOT_FOUND') {
      res.status(404).json({ error: 'ACCESS_NOT_FOUND', detail: 'El acceso no existe.' });
      return;
    }
    if (err.message === 'ACCESS_ALREADY_REVOKED') {
      res.status(409).json({ error: 'ACCESS_ALREADY_REVOKED', detail: 'El acceso ya fue revocado.' });
      return;
    }
    next(e);
  }
});
