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
  const { title, text, mood, username, imageUrl } = req.body;
  const newDiary = { title, text, mood, username, imageUrl };
  const diary = await diaryRepository.create(newDiary);
  res.status(201).json(diary);
}

export async function updateDiary(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { title, text, mood, imageUrl } = req.body;
  const newDiary = { id, title, text, mood, imageUrl };

  const diary = await diaryRepository.update(newDiary);
  if (diary) {
    res.status(200).json(diary);
  } else {
    res.status(404).json({ message: `Diary ${id} not found` });
  }
}

export async function deleteDairy(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  await diaryRepository.remove(id);
  res.sendStatus(204);
}
