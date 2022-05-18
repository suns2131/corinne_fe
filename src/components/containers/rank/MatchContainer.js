import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch } from '../../../data/rank/useMatch';
import MatchOne from '../../presentations/rank/match/match';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';
import { getUserInfo } from '../../../state/reducer/user/thunk';

function MatchContainer() {
  const matchs = useMatch();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectedUserInfo);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  return <MatchOne Info={userInfo} matchs={matchs} />;
}

export default MatchContainer;
