/* eslint-disable no-nested-ternary */
import React from 'react';
import Level from '../../../../share/Level';
import Reset from '../../../../../public/icons/reset.svg';
import { convertRate, KoreanWon, Won } from '../../../../share/convertWon';

function Ranker({ type, rankerData, followBtn, setCallUser, userinfos }) {
  let bgColors = '';
  let textColors = '';
  let rankText = '';
  let myborder = '';

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

  if (userinfos.nickname === rankerData.nickname) {
    myborder = 'border-[3px] border-solid border-Primary-purple2';
  }
  return (
    <div
      key={type}
      className={`w-[47.063em] h-[4em] flex justify-start items-center p-5 rounded-[10px] ${bgColors} ${myborder}`}
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
      <span className="w-[7.563em] flex justify-end items-center flex-grow-0 font-Pretendard text-[15px] font-bold text-right text-Primary-lightPurple mr-[1.5em]">
        {rankerData.fluctuationRate >= 0 ? (
          <span className=" text-Primary-purple2">+{convertRate(rankerData.fluctuationRate)}%</span>
        ) : (
          <span className=" text-Secondary-orange">{convertRate(rankerData.fluctuationRate)}%</span>
        )}
      </span>
      <span
        className={`w-[10.438rem] flex-grow-0 font-Pretendard text-[15px] text-right ${textColors} mr-[1.5em]`}
      >
        {KoreanWon(rankerData?.totalBalance !== undefined ? rankerData.totalBalance : 0)}원
      </span>
      <div className="flex-grow-0 flex justify-end items-center gap-[0.25em]">
        <div className="w-[16px] h-[16px]">
          <Reset />
        </div>
        <span className="w-[1.563em] flex-grow-0 font-Pretendard text-[15px] text-left text-Neutrals-lightGray mr-[1.25em]">
          {rankerData?.resetCount}
        </span>
      </div>
      {userinfos.nickname !== rankerData.nickname ? (
        <div>
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
      ) : (
        <div>
          <div className="w-[60px] h-[32px] flex-grow-0 flex justify-center items-center gap-[2px] p-[5px] rounded-[8px] bg-transparent" />
        </div>
      )}
    </div>
  );
}

export default Ranker;
