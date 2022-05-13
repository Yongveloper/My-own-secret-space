import LoginBtn from '../components/common/Buttons/LoginBtn';

function Login() {
  return (
    <div className="content-wrap">
      <h1>로그인</h1>
      <form>
        <input type="email" placeholder="이메일" />
        <input type="password" placeholder="비밀번호" />
        <LoginBtn />
      </form>
      <div>
        <span>아직 계정이 없으신가요? 계정 만들기</span>
      </div>
      <div>
        <span>또는</span>
      </div>
      <button className="button">Kakao로 계속하기</button>
      <button className="button">Facebook으로 계속하기</button>
    </div>
  );
}

export default Login;
