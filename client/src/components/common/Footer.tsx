import { Outlet, Link, useNavigate } from 'react-router-dom';
import { GiNotebook } from 'react-icons/gi';
import { BsPencilSquare, BsFilePerson } from 'react-icons/bs';
import { userState } from '../../atoms';
import { useSetRecoilState } from 'recoil';

function NavBar() {
  const navigator = useNavigate();
  const setUser = useSetRecoilState(userState);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser({ username: '', email: '' });
    navigator('/');
  };

  return (
    <>
      <Outlet />
      <div className="w-full max-w-sm flex fixed bottom-0 border-solid border-t-2 border-x-2 border-slate-400">
        <Link
          to="/mydiaries"
          className="flex flex-col items-center justify-center grow"
        >
          <GiNotebook />
          <span>나의 일기</span>
        </Link>
        <Link
          to="/mydiaries/writediary"
          className="flex flex-col items-center justify-center grow border-solid border-x-2 border-slate-400"
        >
          <BsPencilSquare />
          <span>일기 쓰기</span>
        </Link>
        <div
          className="flex flex-col items-center justify-center grow cursor-pointer"
          onClick={handleLogout}
        >
          <BsFilePerson />
          <span>로그아웃</span>
        </div>
      </div>
    </>
  );
}

export default NavBar;
