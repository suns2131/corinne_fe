import React from 'react';
import SearchGlass from '../../../../../public/icons/Search.svg';
import Ranker from './ranker';

function RealRank() {
  return (
    <div>
      <div className="w-[793px] h-[84px] flex justify-start items-start p-5 shadow-box bg-Neutrals-white rounded-t-[10px]">
        <div className="h-[44px] flex-grow flex justify-between items-center">
          <span className="flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            실시간 랭킹
          </span>
          <div className="w-[216px] h-[44px] flex-grow-0 flex justify-between items-center px-[15px] py-[4px] rounded-[10px] bg-Neutrals-whiteGray2">
            <input className="bg-transparent text-[15px]" type="text" placeholder="닉네임 검색" />
            <button type="button">
              <SearchGlass />
            </button>
          </div>
        </div>
      </div>
      <div className="w-[793px] h-[839px] flex flex-col justify-start items-start gap-[10px] px-5 py-[19px] shadow-box bg-Neutrals-white rounded-b-[10px]">
        <Ranker type={1} />
        <Ranker type={2} />
        <Ranker type={3} />
        <Ranker type={4} />
        <div />
      </div>
    </div>
  );
}

export default RealRank;
