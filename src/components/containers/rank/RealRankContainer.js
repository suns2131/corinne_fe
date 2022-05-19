import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { getRealRank } from '../../../state/reducer/rank/thunk';
import RealRank from '../../presentations/rank/realrank/RealRank';
import { postFollow } from '../../../state/reducer/rank/rank';

function RealRankContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [list, setList] = useState();
  const realRankState = useSelector((state) => state.rank.realRank);
  const totalPage = useSelector((state) => state.rank.totalPage);
  const [infiniteRef, inView] = useInView();

  useEffect(() => {
    dispatch(getRealRank(page));
  }, [page, dispatch]);

  useEffect(() => {
    setList(realRankState);
  }, [realRankState]);

  React.useEffect(() => {
    if (inView) {
      console.log(`inView: ${inView}`);
      if (page < totalPage) setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  const searchNickname = (e) => {
    setList(realRankState.filter((el) => el.nickname.includes(e.target.value)));
  };

  const followBtn = useCallback((userId, followStat) => {
    console.log(userId);
    dispatch(postFollow(userId, followStat));
  }, []);

  return (
    <RealRank
      RealRankData={list}
      infiniteRef={infiniteRef}
      searchNickname={searchNickname}
      followBtn={followBtn}
    />
  );
}

export default RealRankContainer;
