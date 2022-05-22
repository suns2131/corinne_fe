import Image from 'next/image';
import React from 'react';

function Alarms({ alData }) {
  if (!alData) return null;
  if (alData.alarmNo === 'RESULT') {
    return (
      <div className="w-[440px] h-[108px] flex-grow-0 flex flex-col justify-center items-stretch gap-[10px] px-5 bg-Neutrals-white">
        <div className="h-[32px] self-stretch flex-grow-0 flex justify-end items-center gap-[4px]">
          <Image
            src="/images/defaultProfile/defalutProfile32.png"
            alt="deflutProfile"
            width={32}
            height={32}
          />
          <div className="flex flex-col justify-start items-center">
            <span className="ml-[16px] w-[291px] flex-grow-0 font-Pretendard text-[15px] text-Neutrals-black ">
              <span className="font-bold">모의투자 랭킹 결과 </span>회원님이
              <span> {alData.content}</span> 입니다.
            </span>
            <span>경험치 5,000xp(참여자 전원 지급)</span>
          </div>
          <span className="w-[44px] h-[23px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray">
            {alData.createAT}
          </span>
        </div>
      </div>
    );
  }
  if (alData.alarmNo === 'RIVAL') {
    return (
      <div className="w-[440px] h-[108px] flex-grow-0 flex flex-col justify-center items-stretch gap-[10px] px-5 bg-Neutrals-white">
        <div className="h-[32px] self-stretch flex-grow-0 flex justify-end items-center gap-[4px]">
          <Image
            src="/images/defaultProfile/defalutProfile32.png"
            alt="deflutProfile"
            width={32}
            height={32}
          />
          <div className="flex flex-col justify-start items-center">
            <span className="ml-[16px] w-[291px] flex-grow-0 font-Pretendard text-[15px] text-Neutrals-black ">
              <span className="font-bold">1:1랜덤 배틀 결과 </span>회원님이
              <span> {alData.content}</span> 했습니다.
            </span>
            <span>경험치 10,000xp / 원화 500,000원</span>
          </div>
          <span className="w-[44px] h-[23px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray">
            {alData.createAT}
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="w-[440px] h-[108px] flex-grow-0 flex flex-col justify-center items-stretch gap-[10px] px-5 bg-Neutrals-white">
      <div className="h-[32px] self-stretch flex-grow-0 flex justify-end items-center gap-[4px]">
        <Image
          src="/images/defaultProfile/defalutProfile32.png"
          alt="deflutProfile"
          width={32}
          height={32}
        />
        <span className="ml-[16px] w-[291px] flex-grow-0 font-Pretendard text-[15px] text-Neutrals-black ">
          <span className="font-bold">닉네임</span>님이 회원님을 팔로우했습니다.
        </span>
        <span className="w-[44px] h-[23px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray">
          {alData.createAT}
        </span>
      </div>
    </div>
  );
}

export default Alarms;