import GoogleBtn from '../components/common/Buttons/GoogleBtn';
import KakaoBtn from '../components/common/Buttons/KakaoBtn';
import LoginSignupText from '../components/common/LoginSignupText';
import LoginForm from '../components/Login/LoginForm';

function Login() {
  return (
    <div className="content-wrap">
      <h1 className="text-4xl font-bold mb-8">로그인</h1>
      <LoginForm />
      <LoginSignupText />
      <KakaoBtn />
      <GoogleBtn />
    </div>
  );
}

export default Login;
