import { Outlet, Link } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi';
import { BsPencilSquare, BsFilePerson } from 'react-icons/bs';

function NavBar() {
  return (
    <>
      <Outlet />
      <div className="w-full flex fixed bottom-0 border-solid border-t-2 border-slate-400">
        <Link
          to="/mydiaries"
          className="flex flex-col items-center justify-center grow"
        >
          <GiNotebook />
          <span>나의 일기</span>
        </Link>
        <Link
          to="/mydiaries"
          className="flex flex-col items-center justify-center grow"
        >
          <BsPencilSquare />
          <span>일기 쓰기</span>
        </Link>
        <Link
          to="/mydiaries"
          className="flex flex-col items-center justify-center grow"
        >
          <BsFilePerson />
          <span>내 정보</span>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
