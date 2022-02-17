// 예제
type Diary = {
  id: string;
  text: string;
  name: string;
};

const diaries: Diary[] = [
  {
    id: '1',
    text: '예제',
    name: '용',
  },
];

export async function getAll(): Promise<Diary[]> {
  return diaries;
}
