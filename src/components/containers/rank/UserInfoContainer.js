import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';
import { getUserInfo } from '../../../state/reducer/user/thunk';
import Userinfo from '../../presentations/rank/userinfo/UserInfo';

function UserInfnoContainer() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectedUserInfo);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return <Userinfo Info={userInfo} />;
}

export default UserInfnoContainer;
