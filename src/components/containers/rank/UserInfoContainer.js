import React from 'react';
import { useSelector } from 'react-redux';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';
import Userinfo from '../../presentations/rank/userinfo/UserInfo';

function UserInfnoContainer({ setCallUser }) {
  const userInfo = useSelector(selectedUserInfo);

  return <Userinfo Info={userInfo} setCallUser={setCallUser} />;
}

export default UserInfnoContainer;
