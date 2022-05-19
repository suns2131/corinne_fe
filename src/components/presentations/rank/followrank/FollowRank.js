import React from 'react';
import SearchGlass from '../../../../../public/icons/search.svg';
import Follower from './Follower';

function FollowRank({ followlist, searchNickname }) {
  return (
    <div className=" mt-[20px]">
      <div className="w-[387px] h-[84px] flex-grow-0 justify-start items-start p-5 shadow-box bg-Neutrals-white rounded-t-[10px]">
        <div className="h-[44px] flex-grow flex justify-between items-center">
          <span className="w-[73px] h-[29px] flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            팔로잉 랭킹
          </span>
          <div className="w-[216px] h-[44px] flex-grow-0 flex justify-between items-center py-[4px] px-[15px] rounded-[10px] bg-Neutrals-whiteGray ">
            <input
              className=" outline-none bg-transparent"
              type="text"
              placeholder="닉네임 검색"
              onChange={searchNickname}
            />
            <button type="button">
              <SearchGlass />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[387px] h-[746px] flex-grow-0 flex flex-col justify-start items-stretch gap-[30px] p-5 shadow-box bg-Neutrals-white rounded-b-[10px]">
        {followlist && followlist.map((el) => <Follower followData={el} />)}

        <div />
      </div>
    </div>
  );
}

export default FollowRank;
