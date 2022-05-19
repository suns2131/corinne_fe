import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { getFollowlist } from '../../../state/reducer/rank/thunk';
import FollowRank from '../../presentations/rank/followrank/FollowRank';

function FollowContainer() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [list, setList] = useState();
  const followRankState = useSelector((state) => state.rank.followRank);
  const [infiniteRef, inView] = useInView();

  useEffect(() => {
    setList(followRankState);
  }, [followRankState]);

  useEffect(() => {
    dispatch(getFollowlist(page));
  }, [page, dispatch]);

  // 사용자가 마지막 요소 조회시 page + 1
  React.useEffect(() => {
    if (inView) {
      console.log(`inView: ${inView}`);
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  const searchNickname = (e) => {
    setList(followRankState.filter((el) => el.nickname.includes(e.target.value)));
  };

  return <FollowRank followlist={list} infiniteRef={infiniteRef} searchNickname={searchNickname} />;
}

export default FollowContainer;
