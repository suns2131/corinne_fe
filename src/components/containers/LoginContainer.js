import React, { useCallback, useState, useEffect, useMemo, useRef } from 'react';

import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import { initializeLoginStatus, login } from '../../state/reducer/user';
import { selectedUserName, selectLoginStatus } from '../../state/reducer/user/selectors';
import { changeImage, signUp } from '../../state/reducer/user/thunk';

import FirstLoginForm from '../presentations/login/FirstLoginForm';
import ChangeNickname from '../presentations/login/ChangeNickname';

function LoginContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const profileImgRef = useRef();

  const { progress } = router.query;

  const status = useSelector(selectLoginStatus);
  const selectUserName = useSelector(selectedUserName);

  const [loginStatusText, setLoginStatusText] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  const [profileImgPreview, setProfileImgPreview] = useState();

  const goNextProgress = useCallback(() => {
    router.push({
      pathname: router.pathname,
      query: { progress: 'nickname' },
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
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setProfileImgPreview(fileReader.result);
      imgFormData.append('file', file);
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
      dispatch(initializeLoginStatus('fail'));
      router.push({
        pathname: router.pathname,
      });
    }
  }, [dispatch, loginStatus, router, status]);

  const loginModalContainers = useMemo(
    () => ({
      image: (
        <FirstLoginForm
          profileImgRef={profileImgRef}
          profileImgPreview={profileImgPreview}
          handleProfileImgUpload={handleProfileImgUpload}
          handleClickProfileImg={handleClickProfileImg}
          goNextProgress={goNextProgress}
        />
      ),
      nickname: (
        <ChangeNickname
          handeChangeUserName={handeChangeUserName}
          handleClickLoginSuccess={handleClickLoginSuccess}
          loginStatus={loginStatus}
          loginStatusText={loginStatusText}
        />
      ),
    }),
    [
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
