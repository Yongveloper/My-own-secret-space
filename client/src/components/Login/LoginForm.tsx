import LoginBtn from '../common/Buttons/LoginBtn';

function LoginForm() {
  return (
    <form>
      <input type="email" placeholder="이메일" className="login-input" />
      <input type="password" placeholder="비밀번호" className="login-input" />
      <LoginBtn />
    </form>
  );
}

export default LoginForm;
