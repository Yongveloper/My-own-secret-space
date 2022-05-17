import { Link, useLocation } from 'react-router-dom';

function LoginSignupText() {
  const { pathname } = useLocation();

  return (
    <div className="flex flex-col justify-center items-center m-3">
      <span className="mb-2 text-gray-600">
        {pathname === '/signup'
          ? '이미 계정이 있으신가요?'
          : '아직 계정이 없으신가요?'}{' '}
        {pathname === '/signup' ? (
          <Link to="/login" className="underline">
            로그인
          </Link>
        ) : (
          <Link to="/signup" className="underline">
            계정 만들기
          </Link>
        )}
      </span>
      <span>또는</span>
    </div>
  );
}

export default LoginSignupText;
