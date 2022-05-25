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
    <main className="w-full h-5/6 mt-3 mb-3">
      <ul className="w-full h-full overflow-auto px-3" data-testid="DiaryList">
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
      </ul>
    </main>
  );
}

export default MyDiaryList;
