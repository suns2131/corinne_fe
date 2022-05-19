import Image from 'next/image';
import React from 'react';

function Alarms() {
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
          4일
        </span>
      </div>
    </div>
  );
}

export default Alarms;
