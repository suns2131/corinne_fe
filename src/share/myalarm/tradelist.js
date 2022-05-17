import React from 'react';

function TradeList({ type }) {
  return (
    <div className="w-[263px] h-[131px] flex flex-row justify-between items-start gap-[50px] mb-[24px]">
      <div className="w-[70px] flex flex-col items-start gap-1 font-normal text-[14px] text-[#cecece]">
        {type === 'sell' ? (
          <p className="font-bold text-[15px] text-[#ff9e0d] ">매도</p>
        ) : (
          <p className="font-bold text-[15px] text-[#A634FF] ">매수</p>
        )}
        <p>체결가격</p>
        <p>체결금액</p>
        <p>레버리지</p>
      </div>
      <div className="w-[117px] flex flex-col items-end gap-1 font-bold text-[15px] text-[#33323f] text-right  ">
        <p className="w-[117px] font-normal text-[12px] text-[#cecece] text-right flex flex-col justify-start items-end  ">
          2022.00.00 00:00:00
        </p>
        <p>10,000,000원</p>
        <p>10,000,000원</p>
        <p>100x</p>
      </div>
    </div>
  );
}
export default TradeList;
