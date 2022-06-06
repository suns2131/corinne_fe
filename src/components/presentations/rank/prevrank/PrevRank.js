/* eslint-disable no-nested-ternary */
import Image from 'next/image';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import Hoveroff from '../../../../../public/icons/help/helpnone.svg';
import { convertRate, KoreanWon, Won } from '../../../../share/convertWon';
import Help from '../help/Help';

function PrevRank({ setModal, prevRankTop3, setCallUser, type, goSurvey }) {
  const [help, sethelp] = useState(false);
  const now = dayjs();
  const mon = now.set('d', 1);
  const prevMon = mon.add(-7, 'd').format('YYYY.MM.DD');
  const prevSun = mon.add(-1, 'd').format('YYYY.MM.DD');

  if (type) {
    return (
      <div className="w-[793px] h-[372px] flex-grow-0 pl-5 pt-5 rounded-[10px] bg-[url('/images/corinne_back.webp')] bg-cover bg-center mb-5">
        <div className="w-[291px] h-[53px] flex justify-start items-center gap-[4px]">
          <img src="/icons/Trophy.png" alt="trophy" width="41px" height="51px" />
          <div className="w-[245px] h-[53px] flex-grow-0 flex flex-col justify-start items-start gap-[4px]">
            <span className="flex-grow-0 font-Pretendard text-[24px] font-bold text-left text-Neutrals-white">
              지난주 모의투자 랭킹 결과
            </span>
            <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray">
              {prevMon} ~ {prevSun}
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
              {prevRankTop3 && (
                <span className="flex-grow-0 font-Pretendard text-[16px] font-bold text-center text-Neutrals-white mb-[8px]">
                  🥈
                  {prevRankTop3.states[1]?.nickname !== undefined
                    ? prevRankTop3.states[1].nickname
                    : ''}
                </span>
              )}

              <div className="mb-[18px]">
                <button
                  type="button"
                  onClick={() => {
                    setCallUser({ isopen: true, userId: prevRankTop3.states[1].userId });
                  }}
                >
                  <img
                    className=" border border-solid border-Neutrals-lightGray rounded-full w-[84px] h-[84px] object-cover"
                    src={
                      prevRankTop3.states[1]?.imageUrl !== undefined
                        ? prevRankTop3.states[1].imageUrl !== 'null'
                          ? prevRankTop3.states[1].imageUrl
                          : '/images/defaultProfile/defalutProfile96.webp'
                        : '/images/defaultProfile/defalutProfile96.webp'
                    }
                    alt="defalutProfile"
                    width="84px"
                    height="84px"
                  />
                </button>
              </div>
              <div className="w-[118px] h-[78px] flex-grow-0 px-[26px] pt-[14px]  bg-Neutrals-black rounded-t-[10px] ">
                <div className="flex flex-col justify-center items-center font-Pretendard text-[12px] font-bold text-center text-Primary-lightPurple">
                  {prevRankTop3.states[1]?.fluctuationRate !== undefined
                    ? convertRate(prevRankTop3.states[1].fluctuationRate)
                    : 0}
                  %
                  <span className="font-normal text-Neutrals-white">
                    {prevRankTop3.states[1]?.totalBalance !== undefined
                      ? KoreanWon(prevRankTop3.states[1].totalBalance)
                      : 0}
                    원
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center mr-[13px]">
              <span className="flex-grow-0 font-Pretendard text-[18px] font-bold text-center text-Neutrals-white mb-[8px]">
                🥇
                {prevRankTop3.states[0]?.nickname !== undefined
                  ? prevRankTop3.states[0].nickname
                  : ''}
              </span>
              <div className="mb-[18px]">
                <button
                  type="button"
                  onClick={() => {
                    setCallUser({ isopen: true, userId: prevRankTop3.states[0].userId });
                  }}
                >
                  <img
                    className=" border border-solid border-Neutrals-lightGray rounded-full w-[110px] h-[110px] object-cover"
                    src={
                      prevRankTop3.states[0]?.imageUrl !== undefined
                        ? prevRankTop3.states[0].imageUrl !== 'null'
                          ? prevRankTop3.states[0].imageUrl
                          : '/images/defaultProfile/defalutProfile96.webp'
                        : '/images/defaultProfile/defalutProfile96.webp'
                    }
                    alt="defalutProfile"
                    width="110px"
                    height="110px"
                  />
                </button>
              </div>
              <div className="w-[140px] h-[108px] flex-grow-0 px-[26px] pt-[14px] bg-Neutrals-deepGray rounded-t-[10px] ">
                <div className="flex flex-col justify-center items-center font-Pretendard text-[12px] font-bold text-center text-Primary-lightPurple">
                  {prevRankTop3.states[0]?.fluctuationRate !== undefined
                    ? convertRate(prevRankTop3.states[0].fluctuationRate)
                    : 0}
                  %
                  <span className="font-normal text-Neutrals-white">
                    {prevRankTop3.states[0]?.totalBalance !== undefined
                      ? KoreanWon(prevRankTop3.states[0].totalBalance)
                      : 0}
                    원
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center mr-[13px]">
              <span className="flex-grow-0 font-Pretendard text-[16px] font-bold text-center text-Neutrals-white mb-[8px]">
                🥉
                {prevRankTop3.states[2]?.nickname !== undefined
                  ? prevRankTop3.states[2].nickname
                  : ''}
              </span>
              <div className="mb-[18px]">
                <button
                  type="button"
                  onClick={() => {
                    setCallUser({ isopen: true, userId: prevRankTop3.states[2].userId });
                  }}
                >
                  <img
                    className=" border border-solid border-Neutrals-lightGray rounded-full w-[84px] h-[84px] object-cover"
                    src={
                      prevRankTop3.states[2]?.imageUrl !== undefined
                        ? prevRankTop3.states[2].imageUrl !== 'null'
                          ? prevRankTop3.states[2].imageUrl
                          : '/images/defaultProfile/defalutProfile96.webp'
                        : '/images/defaultProfile/defalutProfile96.webp'
                    }
                    alt="defalutProfile"
                    width="84px"
                    height="84px"
                  />
                </button>
              </div>
              <div className="w-[118px] h-[78px] flex-grow-0 px-[26px] pt-[14px]  bg-Neutrals-black rounded-t-[10px] ">
                <div className="flex flex-col justify-center items-center font-Pretendard text-[12px] font-bold text-center text-Primary-lightPurple">
                  {prevRankTop3.states[2]?.fluctuationRate !== undefined
                    ? convertRate(prevRankTop3.states[2].fluctuationRate)
                    : 0}
                  %
                  <span className="font-normal text-Neutrals-white">
                    {prevRankTop3.states[2]?.totalBalance !== undefined
                      ? KoreanWon(prevRankTop3.states[2].totalBalance)
                      : 0}
                    원
                  </span>
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

  return (
    <div className="w-[793px] h-[372px] flex-grow-0 p-5 rounded-[10px] bg-[url('/images/openevent.png')] bg-cover bg-center mb-5">
      <div className="w-full h-full flex justify-end items-end">
        <button
          className="w-[248px] h-[48px] flex justify-end items-center bg-Primary-purple mb-[12px] mr-[12px] rounded-[10px] active:bg-Primary-purple2"
          type="button"
          onClick={goSurvey}
        >
          <span className="w-[248px] h-[21px] font-Pretendard text-[14px] text-Neutrals-white flex flex-col justify-center items-center">
            설문조사 바로가기
          </span>
        </button>
        <div className=" relative">
          <div
            className=" absolute left-[-11px] bottom-[315px]"
            onMouseEnter={() => sethelp((prev) => !prev)}
            onMouseLeave={() => sethelp((prev) => !prev)}
          >
            <Hoveroff />
          </div>
        </div>
        {help && (
          <div className=" relative">
            <div className=" absolute left-[15px] bottom-[80px] z-10 ">
              <Help type="prevRank" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PrevRank;
