import React, { useState, useLayoutEffect, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import useTop3 from '../../data/rank/useTop3';
import FollowRank from '../presentations/rank/followrank/FollowRank';
import MatchOne from '../presentations/rank/match/match';
import PrevRank from '../presentations/rank/prevrank/PrevRank';
import PrevModal from '../presentations/rank/rankmodal/PrevModal';
import RealRank from '../presentations/rank/realrank/RealRank';
import Userinfo from '../presentations/rank/userinfo/UserInfo';
import Wrapper from '../presentations/Wrapper';
import { selectedUserInfo } from '../../state/reducer/user/selectors';
import { getUserInfo } from '../../state/reducer/user/thunk';
import { getRealRank } from '../../state/reducer/rank/rank';

function RankContainer() {
  const dispatch = useDispatch();
  const RealRankData = useSelector((state) => state.rank.realRank);
  const [item, setItem] = useState(RealRankData);
  const [page, setPage] = useState(1);
  const prevRankTop3Data = useTop3();
  const [modal, setModal] = useState(false);
  const userInfo = useSelector(selectedUserInfo);
  const [infiniteRef, inView] = useInView();

  const getitem = useCallback(() => {
    dispatch(getRealRank(page));
  }, [page]);

  React.useEffect(() => {
    getitem();
  }, [getitem]);

  // 사용자가 마지막 요소 조회시 page + 1
  React.useEffect(() => {
    if (inView) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  useLayoutEffect(() => {
    dispatch(getRealRank(page));
    dispatch(getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    setItem(RealRankData);
  }, [RealRankData]);

  const clickFollow = () => {};

  const Searchnick = (e) => {
    setItem(RealRankData.filter((el) => el.nickname.includes(e.target.value.toUpperCase())));
  };

  return (
    <div>
      <Wrapper>
        <div className="flex">
          <div className="mr-5">
            <PrevRank setModal={setModal} prevRankTop3={prevRankTop3Data} />
            <RealRank
              RealRankData={item}
              clickFollow={clickFollow}
              infiniteRef={infiniteRef}
              Searchnick={Searchnick}
            />
          </div>
          <div>
            <Userinfo />
            <MatchOne />
            <FollowRank />
          </div>
        </div>
      </Wrapper>
      {modal && (
        <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-40 text-center z-40">
          <PrevModal setModal={setModal} />
        </div>
      )}
    </div>
  );
}

export default RankContainer;
