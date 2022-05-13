import { RiGitRepositoryPrivateFill } from 'react-icons/ri';
import LoginBtn from '../components/common/Buttons/LoginBtn';
import SignupBtn from '../components/common/Buttons/SignupBtn';

function Home() {
  return (
    <main className="content-wrap">
      <div className="text-center">
        <h1 className="flex items-center justify-center text-4xl font-bold mb-3">
          <RiGitRepositoryPrivateFill className="text-amber-500" />
          나만의 비밀 공간
        </h1>
        <h2 className="text-xl">나의 하루를 기억하고 기록 해보세요</h2>
      </div>
      <div className="mt-10">
        <LoginBtn />
        <SignupBtn />
      </div>
    </main>
  );
}

export default Home;
