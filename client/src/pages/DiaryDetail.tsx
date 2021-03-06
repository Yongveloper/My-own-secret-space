import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function DiaryDetail() {
  return (
    <div className="max-w-sm flex flex-col items-center justify-center w-screen h-auto px-8 py-8">
      <span role="img" data-testid="Mood">
        π
      </span>
      <h3 className="text-base text-gray-500" data-testid="Date">
        2022λ 10μ 22μΌ
      </h3>
      <h1 className="text-4xl font-bold text-center">μλ―Έ μλ λ </h1>
      <div className="w-full flex justify-end mt-3 mb-3">
        <Link to={`/mydiaries/updatediary/${1}`}>
          <button className="flex items-center mr-3 text-gray-400">
            <BsFillPencilFill /> μμ 
          </button>
        </Link>
        <button className="flex items-center text-red-400">
          <BsFillTrashFill /> μ­μ 
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1652703747774-558a10faacc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
        alt="thumbnail"
        data-testid="Thumbnail"
      />
      <div className="mt-3" data-testid="Text">
        μ€λμ μλ―Έμλ λ μ΄μλ€ κ·Έλ°λ°μ€λμ μλ―Έμλ λ μ΄μλ€ κ·Έλ°λ°μ€λμ
        μλ―Έμλ λ μ΄μλ€ κ·Έλ°λ°
      </div>
    </div>
  );
}

export default DiaryDetail;
