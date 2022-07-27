import { RiKakaoTalkFill } from 'react-icons/ri';

function KakaoBtn() {
  const REST_API_KEY = 'd92a7636ac468757d479f3116edf38aa';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <a
      href={`${KAKAO_AUTH_URL}`}
      className="button bg-yellow-400 text-neutral-900"
    >
      <RiKakaoTalkFill className="mr-1 text-lg" />
      Kakao로 계속하기
    </a>
  );
}

export default KakaoBtn;
