import React from 'react';
import Modal from '../../../../share/modal/Modal';
import Level from '../../../../share/Level';
import ExpBar from '../userinfo/ExpBar';
import { maxExp } from '../../../../share/exp';
import TradeList from '../../../../share/myalarm/tradelist';

function UserProfile() {
  return (
    <Modal title="프로필 및 거래내역" btnView={false}>
      <div className="w-[710px] h-[447px] flex-grow-0 flex flex-row justify-start items-start p-5 shadow-box ">
        <div className="flex flex-col">
          <div className="w-[347px] h-[166px] flex flex-col justify-start items-center gap-[24px] ">
            <div className="h-[94px] self-stretch flex-grow-0 flex justify-start items-center gap-[20px] ">
              <div className=" z-[2]">
                <img
                  className="w-[87px] h-[87px] rounded-full relative"
                  src="/images/defaultProfile/defalutProfile96.png"
                  alt="defaultProfile"
                />
                <div className=" absolute top-[176px] left-[47px]">
                  <Level Exp={2000} />
                </div>
              </div>
              <div className="h-[69px] flex-grow flex flex-col justify-center items-start gap-[12px]">
                <div className="w-[240px] h-[32px] flex justify-between items-start ">
                  <span className="h-[32px] flex-grow-0 font-Pretendard text-[24px] font-bold text-left text-Neutrals-deepGray">
                    닉네임
                  </span>
                  <button
                    className="w-[60px] h-[32px] flex-grow-0 flex justify-center items-center gap-[2px] p-[5px] rounded-[8px] bg-Primary-purple2 active:bg-Primary-lightPurple"
                    type="button"
                    // onClick={() => {
                    //   setBtns((prev) => !prev);
                    // }}
                  >
                    <span className="flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-white">
                      팔로우
                    </span>
                  </button>
                </div>
                <div className="h-[28px] self-stretch flex-grow-0 flex flex-col justify-start items-start">
                  <ExpBar exp={2000} />
                  <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-right text-Neutrals-gray">
                    <span className="text-Neutrals-black">2000xp</span>/{maxExp(2000)}
                    xp
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[304px] h-[48px] flex-grow-0 flex justify-start items-start gap-[32px]">
              <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple">
                  01위
                </span>
                <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                  현재랭킹
                </span>
              </div>
              <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                  01위
                </span>
                <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                  최고 기록
                </span>
              </div>
              <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                  01
                </span>
                <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                  팔로워
                </span>
              </div>
              <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                  01
                </span>
                <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                  팔로잉
                </span>
              </div>
            </div>
          </div>
          <div className="w-[347px] h-[211px] flex-grow-0 flex justify-start items-start gap-[110px] p-5 rounded-[10px] border border-solid border-Neutrals-lightGray2 mt-[30px]">
            <div className="w-[110px] h-[69px] flex flex-col justify-between items-start gap-[9px] ">
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                수익률
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                총 자산
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                매수한 자산
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                1:1 랜덤배틀
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                주간 랭킹 참여
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                리셋 횟수
              </span>
            </div>
            <div className="w-[110px] h-[69px] flex flex-col justify-between items-end gap-[9px] ">
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] font-bold text-right text-Primary-purple2">
                00.00%
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard font-bold text-[15px] text-right text-Neutrals-black">
                1,000,000원
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                1,000,000원
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                0무 0승 0패
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                0회
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray ">
                100
              </span>
            </div>
          </div>
        </div>
        <div className="w-[303px] h-[407px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10px] p-5 rounded-[10px] bg-Neutrals-whiteGray ml-[20px] overflow-x-hidden overflow-y-auto">
          <TradeList type="buy" />
          <TradeList type="buy" />
          <TradeList type="sell" />
          <TradeList type="buy" />
          <TradeList type="buy" />
        </div>
      </div>
    </Modal>
  );
}

export default UserProfile;
