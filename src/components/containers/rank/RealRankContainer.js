import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { getRealRank } from '../../../state/reducer/rank/thunk';
import RealRank from '../../presentations/rank/realrank/RealRank';
import { postFollow } from '../../../state/reducer/rank/rank';
import { selectRankState } from '../../../state/reducer/rank/selector';

function RealRankContainer({ setCallUser, userinfos }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [list, setList] = useState();
  const realRankState = useSelector(selectRankState);
  const totalPage = useSelector((state) => state.rank.realRankTotalPage);
  const [infiniteRef, inView] = useInView();

  useEffect(() => {
    dispatch(getRealRank());
  }, [page, dispatch]);

  useEffect(() => {
    setList(realRankState);
  }, [realRankState]);

  React.useEffect(() => {
    if (inView) {
      if (page < totalPage) setPage(page + 1);
    }
  }, [inView]);

  const searchNickname = (e) => {
    setList(
      realRankState.filter((el) => {
        if (el.nickname) {
          return el.nickname.includes(e.target.value);
        }
        return '';
      }),
    );
  };

  const followBtn = useCallback(
    (userId, followStat) => {
      dispatch(postFollow(userId, followStat));
    },
    [userinfos, dispatch],
  );

  return (
    <RealRank
      RealRankData={list}
      infiniteRef={infiniteRef}
      searchNickname={searchNickname}
      followBtn={followBtn}
      setCallUser={setCallUser}
      userinfos={userinfos}
    />
  );
}

export default RealRankContainer;
