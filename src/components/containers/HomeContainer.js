import { useEffect, useCallback, useMemo, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { login } from '../../state/reducer/user';
import { selectedUserName, selectLoginStatus } from '../../state/reducer/user/selectors';
import { signUp } from '../../state/reducer/user/thunk';

import Wrapper from '../presentations/Wrapper';
import Login from '../presentations/login/Login';
import HomeText from '../presentations/home/homeText';
import FirstLoginForm from '../presentations/login/FirstLoginForm';

export default function HomeContainer() {
  const router = useRouter();

  const [loginStatusText, setLoginStatusText] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);

  const { progress } = router.query;

  const status = useSelector(selectLoginStatus);
  const selectUserName = useSelector(selectedUserName);

  const kakaoRedirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;

  const dispatch = useDispatch();

  const handleClickLoginSuccess = useCallback(() => {
    if (selectUserName.length < 2 || selectUserName.length > 8) {
      setLoginStatusText('글자수를 확인해주세요');
    } else {
      dispatch(signUp(selectUserName));
    }
  }, [dispatch, selectUserName]);

  const handeChangeUserName = useCallback(
    (e) => {
      dispatch(login(e.target.value));
    },
    [dispatch],
  );

  useEffect(() => {
    if (selectUserName.length > 2 && selectUserName.length < 8) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, [selectUserName]);

  useEffect(() => {
    if (status === 'error') {
      setLoginStatusText('닉네임이 중복입니다.');
    }
    if (status === 'success') {
      setLoginStatusText('');
    }
  }, [loginStatus, status]);

  const loginModalContainers = useMemo(
    () => ({
      image: (
        <FirstLoginForm
          handeChangeUserName={handeChangeUserName}
          handleClickLoginSuccess={handleClickLoginSuccess}
          loginStatus={loginStatus}
          loginStatusText={loginStatusText}
        />
      ),
    }),
    [],
  );

  return (
    <Wrapper>
      <HomeText />
      <Login kakaoRedirectUrl={kakaoRedirectUrl} />
      {progress !== undefined ? loginModalContainers[progress] : null}
    </Wrapper>
  );
}
