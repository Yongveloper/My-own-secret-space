import { Request, Response } from 'express';
import * as diaryRepository from '../data/diaries';

export async function getDiaries(req: Request, res: Response): Promise<void> {
  const username = req.query.username as string | undefined;
  const data = username
    ? await diaryRepository.getAllByUsername(username)
    : await diaryRepository.getAll();
  res.status(200).json(data);
}

export async function createDiary(req: Request, res: Response): Promise<void> {
  const { userId } = req;
  const { title, text, mood, username, imageUrl } = req.body;
  const newDiary = { userId, title, text, mood, username, imageUrl };
  const diary = await diaryRepository.create(newDiary);
  res.status(201).json(diary);
}

export async function updateDiary(req: Request, res: Response) {
  const { id } = req.params;
  const diary = await diaryRepository.getById(id);
  if (!diary) {
    return res.sendStatus(404);
  }
  if (diary.userId !== req.userId) {
    return res.sendStatus(403);
  }

  const { title, text, mood, imageUrl } = req.body;
  const newDiary = { title, text, mood, imageUrl };
  const updated = await diaryRepository.update(id, newDiary);
  res.status(200).json(updated);
}

export async function deleteDairy(req: Request, res: Response) {
  const { id } = req.params;
  const diary = await diaryRepository.getById(id);
  if (!diary) {
    return res.sendStatus(404);
  }
  if (diary.userId !== req.userId) {
    return res.sendStatus(403);
  }
  await diaryRepository.remove(id);
  res.sendStatus(204);
}
