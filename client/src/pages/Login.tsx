import { BsFacebook } from 'react-icons/bs';
import { RiKakaoTalkFill } from 'react-icons/ri';
import LoginBtn from '../components/common/Buttons/LoginBtn';

function Login() {
  return (
    <div className="content-wrap">
      <h1 className="text-4xl font-bold mb-8">로그인</h1>
      <form>
        <input type="email" placeholder="이메일" className="login-input" />
        <input type="password" placeholder="비밀번호" className="login-input" />
        <LoginBtn />
      </form>
      <div className="flex flex-col justify-center items-center m-3">
        <span className="mb-2 text-gray-600">
          아직 계정이 없으신가요? <span className="underline">계정 만들기</span>
        </span>
        <span>또는</span>
      </div>
      <button className="button bg-amber-500 text-neutral-900">
        <RiKakaoTalkFill className="mr-1 text-lg" />
        Kakao로 계속하기
      </button>
      <button className="button bg-blue-700">
        <BsFacebook className="mr-1" />
        Facebook으로 계속하기
      </button>
    </div>
  );
}

export default Login;
