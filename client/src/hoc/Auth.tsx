import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../atoms';

export default function AuthHOC(SpecialComponent: any, option: boolean) {
  /* 
     예)  option: 
                 true -> 로그인한 유저만 출입이 가능한 페이지
                 false -> 로그인한 유저는 출입이 불가능한 페이지
  */
  function AuthenticateCheck() {
    const navigator = useNavigate();
    const user = useRecoilValue(userState);

    useEffect(() => {
      if (user.email && !option) {
        navigator('/mydiaries');
      }
      if (!user.email && option) {
        navigator('/login');
      }
    }, []);

    return <SpecialComponent />;
  }

  return AuthenticateCheck;
}
