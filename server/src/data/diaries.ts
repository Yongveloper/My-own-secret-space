import { model, Schema } from 'mongoose';
import { useVirtualId } from '../database/database';
import * as userRepository from './auth';

interface IDiary {
  userId?: string;
  title: string;
  text: string;
  mood: string;
  imageUrl: string | null;
}

const diarySchema = new Schema(
  {
    title: { type: String, required: true },
    text: { type: String, required: true },
    mood: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: String, required: true },
    imageUrl: { type: String, required: false },
  },
  { timestamps: true }
);

useVirtualId(diarySchema);
const Diary = model<IDiary>('Diary', diarySchema);

export async function getAll() {
  return Diary.find().sort({ createdAt: -1 });
}

export async function getAllByUsername(username: string) {
  return Diary.find({ username }).sort({ createdAt: -1 });
}

export async function getById(id: string) {
  return Diary.findById(id);
}

export async function create(
  userId: string,
  { title, text, mood, imageUrl }: IDiary
) {
  const newDiary = {
    title,
    text,
    mood,
    imageUrl: imageUrl || '',
  };
  return userRepository
    .findById(userId)
    .then((user) =>
      new Diary({ ...newDiary, username: user?.username, userId }).save()
    );
}

export async function update(
  id: string,
  { title, text, mood, imageUrl }: IDiary
) {
  return Diary.findByIdAndUpdate(
    id,
    { title, text, mood, imageUrl },
    { returnOriginal: false }
  );
}

export async function remove(id: string) {
  return Diary.findByIdAndDelete(id);
}
