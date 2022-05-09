interface IUpdateDiary {
  title: string;
  text: string;
  mood: string;
  imageUrl: string | null;
}

interface ICreateDiary {
  userId: string;
  title: string;
  text: string;
  username: string;
  mood: string;
  imageUrl: string | null;
}

interface IDiary extends IUpdateDiary {
  id: string;
  userId: string;
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
    userId: '123123',
    createdAt: new Date(),
  },
  {
    id: '2',
    title: '2예제 일기입니다.',
    text: '예제2222',
    mood: '좋음',
    imageUrl: 'https://awss3.com/',
    username: '몽실이',
    userId: '123123',
    createdAt: new Date(),
  },
];

export async function getAll(): Promise<IDiary[]> {
  return diaries;
}

export async function getAllByUsername(username: string) {
  return diaries.filter((diary) => diary.username === username);
}

export async function getById(id: string) {
  return diaries.find((diary) => diary.id === id);
}

export async function create({
  userId,
  title,
  text,
  username,
  mood,
  imageUrl,
}: ICreateDiary) {
  const newDiary = {
    userId,
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

export async function update(
  id: string,
  { title, text, mood, imageUrl }: IUpdateDiary
) {
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
