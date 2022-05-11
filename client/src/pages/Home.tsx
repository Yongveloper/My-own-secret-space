import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-fll h-screen ">
      <h1 className="flex items-center justify-center text-3xl font-bold">
        <RiGitRepositoryPrivateFill className="text-amber-500" />
        나만의 비밀 공간
      </h1>
      <h2>나의 하루를 기억하고 기록 해보세요</h2>
      <button className="bg-violet-700 hover:bg-violet-800 w-full py-2 px-12 rounded">
        로그인
      </button>
      <button className="bg-fuchsia-600 hover:bg-fuchsia-800 w-full py-2 px-12 rounded">
        가입하기
      </button>
    </div>
  );
}

export default Home;
