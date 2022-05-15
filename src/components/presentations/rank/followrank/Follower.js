import Image from 'next/image';
import React from 'react';
import defalutProfile from '../../../../../public/images/defaultProfile/defalutProfile60.png';
import Level from '../../../../share/Level';

function Follower() {
  return (
    <div className="w-[347px] h-[74px] self-stretch flex-grow-0 flex justify-between items-center">
      <div className="w-[148px] h-[74px] flex-grow-0 flex justify-start items-center gap-[11px]">
        <Image src={defalutProfile} width="60px" height="60px" objectFit="contain" />
        <div className="w-[77px] h-[74px] flex-grow-0 flex flex-col justify-start items-start gap-[11px]">
          <div>
            <span className="flex-gorw-0 font-Pretendard text-[15px] font-bold text-left text-Primary-purple mr-[5px]">
              00위
            </span>
            <span className="flex-gorw-0 font-Pretendard text-[15px] font-bold text-left text-Neutrals-black">
              닉네임
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
        <Level level={2000} />
        <span className="flex-grow-0 font-Pretendard text-[12px] flex justify-end items-center text-right text-Neutrals-lightGray mt-[7px] mb-[4px]">
          +0.00%
          <br />
        </span>
        <span className="flex-grow-0 font-Pretendard text-[12px] flex justify-end items-center text-right text-Neutrals-lightGray">
          0,000,000원
        </span>
      </div>
    </div>
  );
}

export default Follower;
