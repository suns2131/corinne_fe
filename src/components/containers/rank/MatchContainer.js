import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatchOne from '../../presentations/rank/match/match';
import { selectedUserInfo } from '../../../state/reducer/user/selectors';
import { getUserInfo } from '../../../state/reducer/user/thunk';
import { selectMatchState } from '../../../state/reducer/rank/selector';
import { getMatch } from '../../../state/reducer/rank/thunk';

function MatchContainer() {
  const matchs = useSelector(selectMatchState);
  const dispatch = useDispatch();
  const userInfo = useSelector(selectedUserInfo);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
    dispatch(getMatch());
  }, [dispatch]);
  return <MatchOne Info={userInfo} matchs={matchs} />;
}

export default MatchContainer;
