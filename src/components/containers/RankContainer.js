import React, { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import useTop3 from '../../data/rank/useTop3';
import { selectedUserInfo } from '../../state/reducer/user/selectors';
import { getUserInfo } from '../../state/reducer/user/thunk';
import { useMatch } from '../../data/rank/useMatch';
import { usePrvRank } from '../../data/rank/usePrevRank';
import { useFollow } from '../../data/rank/useFollow';
import Rank from '../presentations/rank/Rank';

function RankContainer() {
  const dispatch = useDispatch();
  const PrevRanks = usePrvRank();
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [callUser, setCallUser] = useState(false);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return <Rank modal={modal} setModal={setModal} PrevRanks={PrevRanks} />;
}

export default RankContainer;
