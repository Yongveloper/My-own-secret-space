import { Request, Response } from 'express';
import * as diariesRepository from '../data/diaries';

export async function getDiaries(req: Request, res: Response): Promise<void> {
  const diaries = await diariesRepository.getAll();
  res.status(200).json(diaries);
}
