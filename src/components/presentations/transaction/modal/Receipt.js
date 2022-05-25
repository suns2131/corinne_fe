import React from 'react';
import Closeicon from '../../../../../public/icons/close.svg';
import { Won } from '../../../../share/convertWon';

function Receipt({ dispatch, Modals, type, desc }) {
  return (
    <div>
      <div className=" h-[69px] self-stretch flex-grow-0 flex justify-start items-start p-5 sahdow-box bg-Neutrals-white rounded-t-[10px]">
        <div className="w-full h-[29px] flex-gorw flex justify-between items-center">
          <span className="h-[29px] flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            {type === 'buy' ? '매수' : '매도'} 주문 내역
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            dispatch(
              Modals({
                isopen: false,
                type: '',
                desc: '',
              }),
            );
          }}
        >
          <Closeicon />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-start items-stretch p-5 shadow-box bg-Neutrals-white rounded-b-[10px]">
        <div>
          <span className="h-[24px] flex-grow-0 font-Pretendard text-[16px] font-normal text-left text-Neutrals-black flex justify-start items-center mb-5">
            정상적으로 {type === 'buy' ? '매수' : '매도'}가 체결되었습니다 🎉
          </span>
          <div className="w-[392px] h-[139px] flex justify-between items-center p-5 rounded-[10px] border border-solid border-Neutrals-lightGray2">
            <div className="flex flex-col justify-start items-start gap-[4px]">
              {type === 'buy' ? (
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] font-bold text-left text-Primary-purple">
                  매수
                </span>
              ) : (
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] font-bold text-left text-Secondary-orange">
                  매도
                </span>
              )}
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] font-normal text-left text-Neutrals-lightGray">
                체결가격
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] font-normal text-left text-Neutrals-lightGray">
                체결금액
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] font-normal text-left text-Neutrals-lightGray">
                레버리지
              </span>
            </div>
            <div className="h-[99px] flex-grow-0 flex flex-col justify-center items-end gap-[5px]">
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] font-normal text-Neutrals-lightGray">
                {desc.tradeAt}
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[15px] font-bold text-Neutrals-black">
                {Won(desc?.price !== undefined ? desc.price : 0)}
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[15px] font-bold text-Neutrals-black">
                {Won(desc?.amount !== undefined ? desc.amount : 0)}
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[15px] font-bold text-Neutrals-black">
                {desc.leverage}X
              </span>
            </div>
          </div>
          <button
            className="w-full h-[48px] self-stretch flex-grow-0 flex justify-center items-center gap-[10px] rounded-[10px] bg-Primary-purple mt-[20px]"
            type="button"
            onClick={() => {
              dispatch(
                Modals({
                  isopen: false,
                  type: '',
                  desc: '',
                }),
              );
            }}
          >
            <div className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-center text-Neutrals-white ">
              확인
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
