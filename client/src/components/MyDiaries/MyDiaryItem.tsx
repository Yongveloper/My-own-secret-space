import { Link } from 'react-router-dom';
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
    <Link to={`/mydiaries/${id}`}>
      <li className="flex flex-col justify-center bg-white h-2/4 mb-3 p-3 border-2 border-slate-400">
        <h1 className="font-bold text-xl text-gray-900">{title}</h1>
        <span role="img">{mood}</span>
        <div className="text-sm text-gray-500" data-testid="Date">
          {dateString}
        </div>
        <div className="text-gray-700 text-left">{text}</div>
        <img
          className="object-cover h-32 w-full mt-3"
          src={imageUrl}
          alt="thumbnail"
          data-testid="Thumbnail"
        />
      </li>
    </Link>
  );
}

export default MyDiaryItem;
