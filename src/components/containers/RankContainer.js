import React, { useState } from 'react';
import FollowRank from '../presentations/rank/followrank/FollowRank';
import MatchOne from '../presentations/rank/match/match';
import PrevRank from '../presentations/rank/prevrank/PrevRank';
import PrevModal from '../presentations/rank/rankmodal/PrevModal';
import RealRank from '../presentations/rank/realrank/RealRank';
import Userinfo from '../presentations/rank/userinfo/UserInfo';
import Wrapper from '../presentations/Wrapper';

function RankContainer() {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <Wrapper>
        <div className="flex">
          <div className="mr-5">
            <PrevRank setModal={setModal} />
            <RealRank />
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
