import { useQuery } from 'react-query';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deleteDiary, getDiaryDetail } from '../api/diaries';

export interface IDiaryData {
  createdAt: string;
  id: string;
  imageUrl: string;
  mood: string;
  text: string;
  title: string;
  updatedAt: string;
  userId: string;
  username: string;
  _id: string;
}

function DiaryDetail() {
  const { id } = useParams();
  const navigator = useNavigate();
  const {
    isLoading,
    error,
    data: diary,
  } = useQuery<IDiaryData>(['diary', id], () => getDiaryDetail(id as string));
  let dateString = '';

  if (diary) {
    dateString = new Date(diary.createdAt).toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  const handleDelete = async () => {
    const ok = window.confirm('일기를 삭제 하시겠습니까?');
    if (ok) {
      await deleteDiary(id as string);
      navigator('/mydiaries');
    }
  };

  return (
    <div className="max-w-sm flex flex-col items-center justify-center w-screen h-auto px-8 py-8">
      {isLoading || error ? (
        <div>일기를 불러오는 중입니다...</div>
      ) : (
        <>
          <span role="img" data-testid="Mood">
            {diary?.mood}
          </span>
          <h3 className="text-base text-gray-500" data-testid="Date">
            {dateString}
          </h3>
          <h1 className="text-4xl font-bold text-center">{diary?.title}</h1>
          <div className="w-full flex justify-end mt-3 mb-3">
            <Link to={`/mydiaries/updatediary/${id}`}>
              <button className="flex items-center mr-3 text-gray-400">
                <BsFillPencilFill /> 수정
              </button>
            </Link>
            <button
              className="flex items-center text-red-400"
              onClick={handleDelete}
            >
              <BsFillTrashFill /> 삭제
            </button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="thumbnail"
            data-testid="Thumbnail"
          />
          <div className="pt-3 pb-3 break-all" data-testid="Text">
            {diary?.text}
          </div>
        </>
      )}
    </div>
  );
}

export default DiaryDetail;
