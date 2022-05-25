/* eslint-disable no-nested-ternary */
import React from 'react';
import Level from '../../../../share/Level';
import Reset from '../../../../../public/icons/reset.svg';
import { Won } from '../../../../share/convertWon';

function Ranker({ type, rankerData, followBtn, setCallUser }) {
  let bgColors = '';
  let textColors = '';
  let rankText = '';

  if (type === 1) {
    bgColors = 'bg-Primary-purple';
    textColors = 'text-Neutrals-white';
    rankText = '🥇1위';
  } else if (type === 2) {
    bgColors = 'bg-Neutrals-deepGray';
    textColors = 'text-Neutrals-white';
    rankText = '🥈2위';
  } else if (type === 3) {
    bgColors = 'bg-Neutrals-deepGray';
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
      className={`w-[47.063em] h-[4em] flex justify-start items-center p-5 rounded-[10px] ${bgColors}`}
    >
      <span
        className={`w-[3.75em] flex-grow-0 font-Pretendard text-[15px] font-bold text-left ${textColors} mr-[1.25em]`}
      >
        {rankText}
      </span>
      <div className="w-[6.625em] h-[24px] flex-grow-0 flex justify-start items-center gap-[0.25em] mr-[1.25em]">
        <button
          type="button"
          onClick={() => {
            setCallUser({
              isopen: true,
              userId: rankerData.userId,
            });
          }}
        >
          <img
            className="rounded-full w-[24px] h-[24px] object-cover"
            src={
              rankerData?.imageUrl !== undefined
                ? rankerData.imageUrl !== 'null'
                  ? rankerData.imageUrl
                  : '/images/defaultProfile/defalutProfile24.png'
                : '/images/defaultProfile/defalutProfile24.png'
            }
            alt="defalutProfile"
            width="24px"
            height="24px"
          />
        </button>
        <span
          className={`flex-grow-0 font-Pretendard text-[15px] font-bold text-left ${textColors}`}
        >
          {rankerData.nickname}
        </span>
      </div>
      <div className="w-[5.25em] flex justify-start items-center mr-[1.563em]">
        <Level Exp={rankerData.exp} />
      </div>
      <span className="w-[8.063em] flex justify-end items-center flex-grow-0 font-Pretendard text-[15px] font-bold text-right text-Primary-lightPurple mr-[1.5em]">
        {rankerData.fluctuationRate >= 0 ? (
          <span className=" text-Primary-purple2">{rankerData.fluctuationRate}%</span>
        ) : (
          <span className=" text-Secondary-orange">{rankerData.fluctuationRate}%</span>
        )}
      </span>
      <span
        className={`w-[8em] flex-grow-0 font-Pretendard text-[15px] text-right ${textColors} mr-[1.5em]`}
      >
        {Won(rankerData?.totalBalance !== undefined ? rankerData.totalBalance : 0)}원
        {/* 99조9999억9999만9999원 */}
        {/* 99,999,999,999,999원 */}
      </span>
      <div className="flex-grow-0 flex justify-end items-center gap-[0.25em]">
        <div className="w-[16px] h-[16px]">
          <Reset />
        </div>
        <span className="w-[1.563em] flex-grow-0 font-Pretendard text-[15px] text-left text-Neutrals-lightGray mr-[1.25em]">
          {rankerData?.resetCount}
        </span>
      </div>
      {rankerData.follow ? (
        <button
          className="w-[3.75em] h-[2em] flex-grow-0 flex justify-center items-center gap-[2px] p-[5px] rounded-[8px] bg-Neutrals-black active:bg-Neutrals-deepGray"
          onClick={() => {
            followBtn(rankerData.userId, rankerData.follow);
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
            followBtn(rankerData.userId, rankerData.follow);
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
