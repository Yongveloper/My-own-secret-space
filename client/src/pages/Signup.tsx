import { Link } from 'react-router-dom';
import GoogleBtn from '../components/common/Buttons/GoogleBtn';
import KakaoBtn from '../components/common/Buttons/KakaoBtn';
import SignupForm from '../components/Signup/SignupForm';
import LoginSignupText from '../components/common/LoginSignupText';

function Signup() {
  return (
    <div className="content-wrap">
      <h1 className="text-4xl font-bold mb-8">가입하기</h1>
      <SignupForm />
      <LoginSignupText />
      <KakaoBtn />
      <GoogleBtn />
    </div>
  );
}

export default Signup;
