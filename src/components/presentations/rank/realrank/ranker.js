import Image from 'next/image';
import React, { useState } from 'react';
import Level from '../../../../share/Level';
import Reset from '../../../../../public/icons/reset.svg';
import { Won } from '../../../../share/convertWon';

function Ranker({ type, rankerData }) {
  const [btns, setBtns] = useState(false);
  let bgColors = '';
  let textColors = '';
  let rankText = '';

  if (type === 1) {
    bgColors = 'bg-Primary-purple';
    textColors = 'text-Neutrals-white';
    rankText = '🥇1위';
  } else if (type === 2) {
    bgColors = 'bg-Neutrals-black';
    textColors = 'text-Neutrals-white';
    rankText = '🥈2위';
  } else if (type === 3) {
    bgColors = 'bg-Neutrals-black';
    textColors = 'text-Neutrals-white';
    rankText = '🥉3위';
  } else {
    bgColors = 'bg-Neutrals-whiteGray';
    textColors = 'text-Neutrals-black';
    rankText = `${type}위`;
  }
  return (
    <div
      key={type}
      className={`w-[753px] h-[64px] flex justify-between items-center p-5 rounded-[10px] ${bgColors}`}
    >
      <span
        className={`w-[50px] flex-grow-0 font-Pretendard text-[15px] font-bold text-left ${textColors}`}
      >
        {rankText}
      </span>
      <div className="w-[68px] h-[24px] flex-grow-0 flex justify-end items-center gap-[5px]">
        <Image
          src="/images/defaultProfile/defalutProfile24.png"
          alt="defalutProfile"
          width="24px"
          height="24px"
        />
        <span
          className={`flex-grow-0 font-Pretendard text-[15px] font-bold text-left ${textColors}`}
        >
          {rankerData.nickname}
        </span>
      </div>
      <Level Exp={20000} />
      <span className="flex-grow-0 font-Pretendard text-[15px] font-bold text-right text-Primary-lightPurple">
        {rankerData.fluctuationRate}%
      </span>
      <span className={`flex-grow-0 font-Pretendard text-[15px] text-right ${textColors}`}>
        {Won(rankerData?.totalBalance !== undefined ? rankerData.totalBalance : 0)}원
      </span>
      <div className="flex-grow-0 flex justify-end items-center gap-[4px]">
        <div className="w-[16px] h-[16px]">
          <Reset />
        </div>
        <span className="flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray">
          100
        </span>
      </div>
      {btns ? (
        <button
          className="w-[60px] h-[32px] flex-grow-0 flex justify-center items-center gap-[2px] p-[5px] rounded-[8px] bg-Neutrals-black active:bg-Neutrals-deepGray"
          onClick={() => {
            setBtns((prev) => !prev);
          }}
          type="button"
        >
          <span className="flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-white">
            팔로잉
          </span>
        </button>
      ) : (
        <button
          className="w-[60px] h-[32px] flex-grow-0 flex justify-center items-center gap-[2px] p-[5px] rounded-[8px] bg-Primary-purple2 active:bg-Primary-lightPurple"
          type="button"
          onClick={() => {
            setBtns((prev) => !prev);
          }}
        >
          <span className="flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-white">
            팔로우
          </span>
        </button>
      )}
    </div>
  );
}

export default Ranker;
