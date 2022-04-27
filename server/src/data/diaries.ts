import * as userRepository from '../data/auth';

interface IUpdateDiary {
  id: string;
  title: string;
  text: string;
  mood: string;
  imageUrl: string | null;
}

interface ICreateDiary {
  title: string;
  text: string;
  username: string;
  mood: string;
  imageUrl: string | null;
}

interface IDiary extends IUpdateDiary {
  username: string;
  createdAt: Date;
}

let diaries: IDiary[] = [
  {
    id: '1',
    title: '예제 일기입니다.',
    text: '예제',
    mood: '좋음',
    imageUrl: 'https://awss3.com/',
    username: '용현준',
    createdAt: new Date(),
  },
];

export async function getAll(): Promise<IDiary[]> {
  return diaries;
}

export async function create({
  title,
  text,
  username,
  mood,
  imageUrl,
}: ICreateDiary) {
  const newDiary = {
    id: Date.now().toString(),
    username,
    title,
    text,
    mood,
    imageUrl: imageUrl || '',
    createdAt: new Date(),
  };
  diaries.push(newDiary);

  return newDiary;
}

export async function update({
  id,
  title,
  text,
  mood,
  imageUrl,
}: IUpdateDiary) {
  const diary = diaries.find((diary) => diary.id === id);
  if (diary) {
    diary.title = title;
    diary.text = text;
    diary.mood = mood;
    if (imageUrl) {
      diary.imageUrl = imageUrl;
    }
  }

  return diary;
}

export async function remove(id: string) {
  diaries = diaries.filter((diary) => diary.id !== id);
}
