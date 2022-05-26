import React from 'react';
import SearchGlass from '../../../../../public/icons/search.svg';
import Ranker from './ranker';

function RealRank({
  RealRankData,
  infiniteRef,
  searchNickname,
  followBtn,
  setCallUser,
  userinfos,
}) {
  return (
    <div>
      <div className="w-[793px] h-[84px] flex justify-start items-start p-5 shadow-box bg-Neutrals-white rounded-t-[10px]">
        <div className="h-[44px] flex-grow flex justify-between items-center">
          <span className="flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            실시간 랭킹
          </span>
          <div className="w-[216px] h-[44px] flex-grow-0 flex justify-between items-center px-[15px] py-[4px] rounded-[10px] bg-Neutrals-whiteGray2">
            <input
              className="bg-transparent text-[15px] w-[180px] outline-none"
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
      {RealRankData && (
        <div className="w-[793px] h-[839px] flex flex-col justify-start items-start gap-[10px] px-5 py-[19px] shadow-box bg-Neutrals-white rounded-b-[10px] overflow-x-hidden overflow-y-auto scrollbar-none">
          {RealRankData.map((el, idx) => (
            <div>
              <Ranker
                type={el.rank}
                rankerData={el}
                followBtn={followBtn}
                setCallUser={setCallUser}
                userinfos={userinfos}
              />
            </div>
          ))}
          <div ref={infiniteRef} />
        </div>
      )}
    </div>
  );
}

export default RealRank;
