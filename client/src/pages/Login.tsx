import LoginBtn from '../components/common/Buttons/LoginBtn';

function Login() {
  return (
    <div className="content-wrap">
      <h1 className="text-4xl font-bold mb-3">로그인</h1>
      <form>
        <input
          type="email"
          placeholder="이메일"
          className="w-full px-2 py-1 border-solid border-2 rounded text-neutral-900 mb-2"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full px-2 py-1 border-solid border-2 rounded text-neutral-900 mb-2"
        />
        <LoginBtn />
      </form>
      <div>
        <span>아직 계정이 없으신가요? 계정 만들기</span>
      </div>
      <div>
        <span>또는</span>
      </div>
      <button className="button bg-amber-500 text-neutral-900">
        Kakao로 계속하기
      </button>
      <button className="button bg-blue-700">Facebook으로 계속하기</button>
    </div>
  );
}

export default Login;
