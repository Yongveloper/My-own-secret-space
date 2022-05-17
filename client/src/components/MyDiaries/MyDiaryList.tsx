import MyDiaryItem from './MyDiaryItem';

export interface IMyDiaryItemProps {
  id: string;
  title: string;
  text: string;
  mood: string;
  username: string;
  userId: string;
  imageUrl: string;
  createAt: Date;
}

interface IMyDiaryListProps {
  diaries: IMyDiaryItemProps[];
}

function MyDiaryList({ diaries }: IMyDiaryListProps) {
  return (
    <main className="w-full mt-3 mb-3">
      {diaries.map((item) => (
        <MyDiaryItem
          key={item.id}
          id={item.id}
          title={item.title}
          text={item.text}
          mood={item.mood}
          username={item.username}
          userId={item.userId}
          imageUrl={item.imageUrl}
          createAt={item.createAt}
        />
      ))}
    </main>
  );
}

export default MyDiaryList;
