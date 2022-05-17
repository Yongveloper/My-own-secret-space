import SignupBtn from '../common/Buttons/SignupBtn';

function SignupForm() {
  return (
    <form>
      <input type="text" placeholder="이름" className="login-input" />
      <input type="email" placeholder="이메일" className="login-input" />
      <input type="password" placeholder="비밀번호" className="login-input" />
      <input
        type="password"
        placeholder="비밀번호 확인"
        className="login-input"
      />
      <SignupBtn />
    </form>
  );
}

export default SignupForm;
