/* eslint-disable no-nested-ternary */
import React from 'react';
import { Won } from '../../../../share/convertWon';
import Level from '../../../../share/Level';

function Follower({ followData, setCallUser }) {
  if (!followData) return null;
  return (
    <div className="w-[347px] h-[74px] self-stretch flex-grow-0 flex justify-between items-center">
      <div className="w-[148px] h-[74px] flex-grow-0 flex justify-start items-center gap-[11px]">
        <button
          type="button"
          onClick={() => {
            setCallUser({ isopen: true, userId: followData.userId });
          }}
        >
          <img
            className="rounded-full w-[60px] h-[60px]"
            src={
              followData?.imageUrl !== undefined
                ? followData.imageUrl !== 'null'
                  ? followData.imageUrl
                  : '/images/defaultProfile/defalutProfile60.png'
                : '/images/defaultProfile/defalutProfile60.png'
            }
            width="60px"
            height="60px"
            objectFit="contain"
            alt="df"
          />
        </button>

        <div className="w-[6rem] h-[74px] flex-grow-0 flex flex-col justify-start items-start gap-[11px]">
          <div>
            <span className="flex-gorw-0 font-Pretendard text-[15px] font-bold text-left text-Primary-purple mr-[5px]">
              {followData.rank}위
            </span>
            <span className="flex-gorw-0 font-Pretendard text-[15px] font-bold text-left text-Neutrals-black">
              {followData.nickname}
            </span>
          </div>
          <div className="h-[45px] flex-grow-0 flex flex-col justify-start items-start gap-[5px]">
            <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray">
              수익률
            </span>
            <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray">
              총 자산
            </span>
          </div>
        </div>
      </div>
      <div className="h-[66px] flex-grow-0 flex-col justify-start items-end gap-[5px]">
        <div className="flex flex-col justify-end items-center">
          <Level Exp={followData.exp} />
        </div>
        <span className="flex-grow-0 font-Pretendard text-[12px] flex justify-end items-center text-right text-Neutrals-lightGray mt-[7px] mb-[4px]">
          {followData.fluctuationRate}%
          <br />
        </span>
        <span className="flex-grow-0 font-Pretendard text-[12px] flex justify-end items-center text-right text-Neutrals-lightGray">
          {Won(followData.totalBalance)}원
        </span>
      </div>
    </div>
  );
}

export default Follower;
