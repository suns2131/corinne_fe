import Image from 'next/image';
import React, { useState } from 'react';
import Hoveroff from '../../../../../public/icons/help/helpnone.svg';
import Help from '../help/Help';

function PrevRank({ setModal }) {
  const [help, sethelp] = useState(false);
  return (
    <div className="w-[793px] h-[372px] flex-grow-0 pl-5 pt-5 rounded-[10px] bg-[url('/images/corinne_back.png')] bg-cover bg-center mb-5">
      <div className="w-[291px] h-[53px] flex justify-start items-center gap-[4px]">
        <Image src="/icons/Trophy.png" alt="trophy" width="41px" height="51px" />
        <div className="w-[245px] h-[53px] flex-grow-0 flex flex-col justify-start items-start gap-[4px]">
          <span className="flex-grow-0 font-Pretendard text-[24px] font-bold text-left text-Neutrals-white">
            지난주 모의투자 랭킹 결과
          </span>
          <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray">
            2022.00.00 ~ 2022.00.00
          </span>
        </div>
      </div>
      <div className="flex justify-start items-start">
        <div className="w-[105px] h-[32px] flex justify-center items-center mt-[248px] mr-[71px]">
          <button
            className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-white"
            type="button"
            onClick={() => {
              setModal((prev) => !prev);
            }}
          >
            전체 랭킹 보기 &gt;
          </button>
        </div>
        <div className="h-[298px] flex justify-start items-end">
          <div className="flex flex-col justify-end items-center mr-[13px]">
            <span className="flex-grow-0 font-Pretendard text-[16px] font-bold text-center text-Neutrals-white mb-[8px]">
              🥈쏘냐도르
            </span>
            <div className="mb-[18px]">
              <Image
                src="/images/defaultProfile/defalutProfile96.png"
                alt="defalutProfile"
                width="84px"
                height="84px"
              />
            </div>
            <div className="w-[118px] h-[78px] flex-grow-0 px-[26px] pt-[14px]  bg-Neutrals-black rounded-t-[10px] ">
              <div className="flex flex-col justify-center items-center font-Pretendard text-[12px] font-bold text-center text-Primary-lightPurple">
                00.00%
                <span className="font-normal text-Neutrals-white">0,000,000원</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center mr-[13px]">
            <span className="flex-grow-0 font-Pretendard text-[18px] font-bold text-center text-Neutrals-white mb-[8px]">
              🥇채채
            </span>
            <div className="mb-[18px]">
              <Image
                className=" border border-solid border-Neutrals-lightGray"
                src="/images/defaultProfile/defalutProfile120.png"
                alt="defalutProfile"
                width="110px"
                height="110px"
              />
            </div>
            <div className="w-[140px] h-[108px] flex-grow-0 px-[26px] pt-[14px] bg-Neutrals-deepGray rounded-t-[10px] ">
              <div className="flex flex-col justify-center items-center font-Pretendard text-[12px] font-bold text-center text-Primary-lightPurple">
                00.00%
                <span className="font-normal text-Neutrals-white">0,000,000원</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-center mr-[13px]">
            <span className="flex-grow-0 font-Pretendard text-[16px] font-bold text-center text-Neutrals-white mb-[8px]">
              🥉골목대장백종원
            </span>
            <div className="mb-[18px]">
              <Image
                src="/images/defaultProfile/defalutProfile96.png"
                alt="defalutProfile"
                width="84px"
                height="84px"
              />
            </div>
            <div className="w-[118px] h-[78px] flex-grow-0 px-[26px] pt-[14px]  bg-Neutrals-black rounded-t-[10px] ">
              <div className="flex flex-col justify-center items-center font-Pretendard text-[12px] font-bold text-center text-Primary-lightPurple">
                00.00%
                <span className="font-normal text-Neutrals-white">0,000,000원</span>
              </div>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div
            className=" absolute left-[150px] bottom-[38px]"
            onMouseEnter={() => sethelp((prev) => !prev)}
            onMouseLeave={() => sethelp((prev) => !prev)}
          >
            <Hoveroff />
          </div>
        </div>
        {help && (
          <div className=" relative">
            <div className=" absolute left-[170px] top-[-100px] z-10 ">
              <Help type="prevRank" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrevRank;
