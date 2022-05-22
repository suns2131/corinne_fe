import { useRouter } from 'next/router';

import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../presentations/Wrapper';
import Login from '../presentations/login/Login';
import HomeText from '../presentations/home/HomeText';
import LoginContainer from './LoginContainer';
import { getCookie } from '../../share/cookie';
import { setEventModal } from '../../state/reducer/user';

const usertoken = getCookie({ name: 'corinne' });
const kakaoRedirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

export default function HomeContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isLogin = usertoken !== undefined;
  const isModal = useSelector((state) => state.user.eventModal);
  const [modal, setModal] = useState(true);

  const goToTransaction = useCallback(() => {
    router.push('/transaction');
  }, [router]);

  const openEvent = () => {
    dispatch(setEventModal(false));
  };

  const goSurvey = () => {
    window.location.href = 'https://forms.gle/f7hsZ7iQrJfZnFND9';
  };

  return (
    <Wrapper>
      <HomeText />
      <Login
        isLogin={isLogin}
        kakaoRedirectUrl={kakaoRedirectUrl}
        goToTransaction={goToTransaction}
        modal={modal}
        setModal={setModal}
        isModal={isModal}
        openEvent={openEvent}
        goSurvey={goSurvey}
      />
      <LoginContainer />
    </Wrapper>
  );
}
