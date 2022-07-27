import axios from 'axios';
import { useEffect } from 'react';

function KakaoRedirect() {
  const { href } = window.location;
  const params = new URL(href).searchParams;
  const code = params.get('code');

  const REST_API_KEY = 'd92a7636ac468757d479f3116edf38aa';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

  const getToken = async () => {
    try {
      const {
        data: { access_token },
      } = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );
      console.log(access_token);
      const info = await axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: { Authorization: ` Bearer ${access_token}` },
      });
      console.log(info);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return <div>KakaoRedirect</div>;
}

export default KakaoRedirect;
