import React from 'react';
import FollowRank from '../presentations/rank/followrank/FollowRank';
import MatchOne from '../presentations/rank/match/match';
import Userinfo from '../presentations/rank/userinfo/UserInfo';
import Wrapper from '../presentations/Wrapper';

function RankContainer() {
  return (
    <Wrapper>
      <div className="flex">
        <div className="w-[793px] bg-yellow-200 mr-5" />
        <div className="gap-[20px]">
          <Userinfo />
          <MatchOne />
          <FollowRank />
        </div>
      </div>
    </Wrapper>
  );
}

export default RankContainer;
