import { IMyDiaryItemProps } from './MyDiaryList';

function MyDiaryItem({
  id,
  title,
  text,
  mood,
  username,
  imageUrl,
  createAt,
}: IMyDiaryItemProps) {
  const dateString = createAt.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className=" bg-white h-2/4 mb-3 p-3">
      <div className="text-lg text-gray-900">{title}</div>
      <span role="img">{mood}</span>
      <div className="text-sm text-gray-500">{dateString}</div>
      <div className="text-gray-700 text-left">{text}</div>
      <img
        className="object-cover h-28 w-full mt-3"
        src={imageUrl}
        alt="thumbnail"
      ></img>
    </div>
  );
}

export default MyDiaryItem;
