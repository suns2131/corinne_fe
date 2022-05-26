import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePrvRank } from '../../data/rank/usePrevRank';
import { selectedUserInfo } from '../../state/reducer/user/selectors';
import { getUserInfo } from '../../state/reducer/user/thunk';
import Rank from '../presentations/rank/Rank';

function RankContainer() {
  const dispatch = useDispatch();
  const userinfos = useSelector(selectedUserInfo);
  const PrevRanks = usePrvRank();
  const [modal, setModal] = useState(false);
  const [callUser, setCallUser] = useState({
    isopen: false,
    userid: '',
  });

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <Rank
      modal={modal}
      setModal={setModal}
      PrevRanks={PrevRanks}
      callUser={callUser}
      setCallUser={setCallUser}
      userinfos={userinfos}
    />
  );
}

export default RankContainer;
