import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { initializeLoginStatus, login, setEventModal } from '../../state/reducer/user';
import {
  selectedUserInfo,
  selectedUserName,
  selectLoginStatus,
} from '../../state/reducer/user/selectors';
import { changeImage, signUp } from '../../state/reducer/user/thunk';

import FirstLoginForm from '../presentations/login/FirstLoginForm';
import ChangeNickname from '../presentations/login/ChangeNickname';
import LoginSuccess from '../presentations/login/LoginSuccess';

function LoginContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileImgRef = useRef();

  const { progress } = router.query;

  const status = useSelector(selectLoginStatus);
  const selectUserName = useSelector(selectedUserName);
  const userInfo = useSelector(selectedUserInfo);

  const [loginStatusText, setLoginStatusText] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [profileImgPreview, setProfileImgPreview] = useState(
    userInfo ? userInfo.imageUrl : '/images/defaultProfile/defalutProfile180.png',
  );

  const goNextProgress = useCallback(
    (query) => () => {
      router.push({
        pathname: router.pathname,
        query,
      });
    },
    [router],
  );

  const goBackPage = useCallback(() => {
    if (router.pathname === '/') {
      dispatch(setEventModal(true));
    }
    router.push({
      pathname: router.pathname,
    });
  }, [router]);

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

  const handleProfileImgUpload = useCallback(() => {
    const fileReader = new FileReader();
    const file = profileImgRef.current.files[0];

    const imgFormData = new FormData();
    imgFormData.append('image', file);

    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setProfileImgPreview(fileReader.result);
      dispatch(changeImage(imgFormData));
    };
  }, [dispatch]);

  const handleClickProfileImg = useCallback(() => {
    profileImgRef.current.click();
  }, [profileImgRef]);

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
      goNextProgress({ progress: 'success' })();
      dispatch(initializeLoginStatus('fail'));
    }
  }, [dispatch, goNextProgress, loginStatus, router, status]);

  const loginModalContainers = useMemo(
    () => ({
      image: (
        <FirstLoginForm
          profileImgRef={profileImgRef}
          profileImgPreview={profileImgPreview}
          handleProfileImgUpload={handleProfileImgUpload}
          handleClickProfileImg={handleClickProfileImg}
          goBackPage={goBackPage}
          goNextProgress={goNextProgress({ progress: 'nickname' })}
        />
      ),
      nickname: (
        <ChangeNickname
          handeChangeUserName={handeChangeUserName}
          handleClickLoginSuccess={handleClickLoginSuccess}
          goBackPage={goBackPage}
          loginStatus={loginStatus}
          loginStatusText={loginStatusText}
        />
      ),
      success: <LoginSuccess goBackPage={goBackPage} />,
    }),
    [
      goBackPage,
      goNextProgress,
      handeChangeUserName,
      handleClickLoginSuccess,
      handleClickProfileImg,
      handleProfileImgUpload,
      loginStatus,
      loginStatusText,
      profileImgPreview,
    ],
  );

  return progress !== undefined ? loginModalContainers[progress] : null;
}

export default LoginContainer;
