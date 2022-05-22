import { useRouter } from 'next/router';

import { useCallback, useState } from 'react';
import Wrapper from '../presentations/Wrapper';
import Login from '../presentations/login/Login';
import HomeText from '../presentations/home/HomeText';
import LoginContainer from './LoginContainer';
import { getCookie } from '../../share/cookie';

const usertoken = getCookie({ name: 'corinne' });
const kakaoRedirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

export default function HomeContainer() {
  const router = useRouter();
  const isLogin = usertoken !== undefined;
  const [modal, setModal] = useState(true);

  const goToTransaction = useCallback(() => {
    router.push('/transaction');
  }, [router]);
  return (
    <Wrapper>
      <HomeText />
      <Login
        isLogin={isLogin}
        kakaoRedirectUrl={kakaoRedirectUrl}
        goToTransaction={goToTransaction}
        modal={modal}
        setModal={setModal}
      />
      <LoginContainer />
    </Wrapper>
  );
}
