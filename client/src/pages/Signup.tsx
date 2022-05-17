import { Link } from 'react-router-dom';
import GoogleBtn from '../components/common/Buttons/GoogleBtn';
import KakaoBtn from '../components/common/Buttons/KakaoBtn';
import SignupForm from '../components/Signup/SignupForm';

function Signup() {
  return (
    <div className="content-wrap">
      <h1 className="text-4xl font-bold mb-8">가입하기</h1>
      <SignupForm />
      <div className="flex flex-col justify-center items-center m-3">
        <span className="mb-2 text-gray-600">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="underline">
            로그인
          </Link>
        </span>
        <span>또는</span>
      </div>
      <KakaoBtn />
      <GoogleBtn />
    </div>
  );
}

export default Signup;
