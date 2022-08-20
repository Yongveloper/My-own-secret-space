import { IMyDiaryItem } from '../../pages/MyDiaries';
import MyDiaryItem from './MyDiaryItem';

export interface IMyDiaryList {
  diaries: IMyDiaryItem[] | undefined;
}

function MyDiaryList({ diaries }: IMyDiaryList) {
  return (
    <main className="w-full h-5/6 mt-3 mb-3">
      {diaries === undefined || diaries.length === 0 ? (
        <div>작성된 일기가 없습니다.</div>
      ) : (
        <ul
          className="w-full h-full overflow-auto px-3"
          data-testid="DiaryList"
        >
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
              createdAt={item.createdAt}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default MyDiaryList;
