import React from 'react';

function MyRank({ userInfo }) {
  if (!userInfo) return null;
  return (
    <div className="w-[387px] h-61px p-5 gap-[10px] bg-[#6800BA] shadow-008 rounded-[10px] font-Pretendard mb-5">
      <p className="font-bold text-[18px] text-[#ffffff]">
        {userInfo.nickname}님의 현재 랭킹은 <span>{userInfo.myRank}</span>위 입니다 🎉
      </p>
    </div>
  );
}

export default MyRank;
