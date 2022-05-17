import { RiKakaoTalkFill } from 'react-icons/ri';

function KakaoBtn() {
  return (
    <button className="button bg-yellow-400 text-neutral-900">
      <RiKakaoTalkFill className="mr-1 text-lg" />
      Kakao로 계속하기
    </button>
  );
}

export default KakaoBtn;
