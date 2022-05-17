import GoogleBtn from '../components/common/Buttons/GoogleBtn';
import KakaoBtn from '../components/common/Buttons/KakaoBtn';
import LoginForm from '../components/Login/LoginForm';

function Login() {
  return (
    <div className="content-wrap">
      <h1 className="text-4xl font-bold mb-8">로그인</h1>
      <LoginForm />
      <div className="flex flex-col justify-center items-center m-3">
        <span className="mb-2 text-gray-600">
          아직 계정이 없으신가요? <span className="underline">계정 만들기</span>
        </span>
        <span>또는</span>
      </div>
      <KakaoBtn />
      <GoogleBtn />
    </div>
  );
}

export default Login;
