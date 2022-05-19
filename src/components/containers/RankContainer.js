import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePrvRank } from '../../data/rank/usePrevRank';
import { getUserInfo } from '../../state/reducer/user/thunk';
import Rank from '../presentations/rank/Rank';
import Wrapper from '../presentations/Wrapper';

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
