import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="flex items-center justify-center text-3xl font-bold">
        <RiGitRepositoryPrivateFill className="text-amber-500" />
        나만의 비밀 공간
      </h1>
      <h2>나의 하루를 기억하고 기억해보세요</h2>
      <button className="bg-purple-600 hover:bg-purple-800 font-bold py-2 px-12 rounded">
        로그인
      </button>
      <button className="bg-purple-600 hover:bg-purple-800 font-bold py-2 px-12 rounded">
        가입하기
      </button>
    </div>
  );
}

export default Home;
