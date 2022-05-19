import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';
import { getUserInfo } from '../../../state/reducer/user/thunk';
import MyRank from '../../presentations/transaction/myrank/MyRank';

function RankContanier() {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectedUserInfo);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return <MyRank userInfo={userInfo} />;
}

export default RankContanier;
