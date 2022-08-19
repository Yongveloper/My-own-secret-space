import { useEffect } from 'react';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom';
import { getDiaryDetail } from '../api/diaries';

function DiaryDetail() {
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const diary = await getDiaryDetail(id as string);
      console.log(diary);
    })();
  }, [id]);

  return (
    <div className="max-w-sm flex flex-col items-center justify-center w-screen h-auto px-8 py-8">
      <span role="img" data-testid="Mood">
        😀
      </span>
      <h3 className="text-base text-gray-500" data-testid="Date">
        2022년 10월 22일
      </h3>
      <h1 className="text-4xl font-bold text-center">의미 있는 날</h1>
      <div className="w-full flex justify-end mt-3 mb-3">
        <Link to={`/mydiaries/updatediary/${1}`}>
          <button className="flex items-center mr-3 text-gray-400">
            <BsFillPencilFill /> 수정
          </button>
        </Link>
        <button className="flex items-center text-red-400">
          <BsFillTrashFill /> 삭제
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        alt="thumbnail"
        data-testid="Thumbnail"
      />
      <div className="mt-3" data-testid="Text">
        오늘은 의미있는 날이었다 그런데오늘은 의미있는 날이었다 그런데오늘은
        의미있는 날이었다 그런데
      </div>
    </div>
  );
}

export default DiaryDetail;
