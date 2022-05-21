import React from 'react';
import { Won } from '../convertWon';

function TradeList({ type, tradeData }) {
  return (
    <div className="w-[263px] h-[131px] flex flex-row justify-between items-start gap-[50px] mb-[24px]">
      <div className="w-[70px] flex flex-col items-start gap-1 font-normal text-[14px] text-[#cecece]">
        {type === 'sell' ? (
          <p className="font-bold text-[15px] text-Secondary-orange ">매도</p>
        ) : (
          <p className="font-bold text-[15px] text-Primary-purple2 ">매수</p>
        )}
        <p>체결가격</p>
        <p>체결금액</p>
        <p>레버리지</p>
      </div>
      <div className="w-[117px] flex flex-col items-end gap-1 font-bold text-[15px] text-[#33323f] text-right  ">
        <p className="w-[117px] font-normal text-[12px] text-[#cecece] text-right flex flex-col justify-start items-end  ">
          {tradeData?.tradeAt !== undefined ? tradeData.tradeAt : ''}
        </p>
        <p>{Won(tradeData?.price !== undefined ? tradeData.price : 0)}원</p>
        <p>{Won(tradeData?.amount !== undefined ? tradeData.amount : 0)}원</p>
        <p>{tradeData.leverage}x</p>
      </div>
    </div>
  );
}
export default TradeList;
