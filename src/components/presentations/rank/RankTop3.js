import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTop3Rank } from '../../../state/reducer/rank/rank';
import { Won } from '../../../share/convertWon';

function RankTop3() {
  const top3Data = useSelector((state) => state.rank.top3Rank);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getTop3Rank());
  }, []);

  return (
    <div>
      {top3Data && (
        <div className="w-[99%] h-[267px] flex justify-start items-end mt-[20px] ">
          <div>
            <p className=" text-left font-normal text-[12px] text-[#ffffff] mr-[96px]  mb-5">
              전체 랭킹 보기 &gt;
            </p>
          </div>
          <div className="w-[84px] flex flex-col justify-start items-center mr-[56px]">
            <p className="font-bold text-[16px] text-[#ffffff] mb-[9px]">
              🥈{top3Data[0]?.nickname}
            </p>
            <div className="w-[84px] h-[84px] rounded-full bg-slate-500 mb-[4px]" />
            <div className="bg-[#33323F] w-[118px] h-[78px] rounded-t-md  pt-[16px] flex flex-col justify-start items-center  ">
              <p className="font-bold text-[12px] text-[#A634FF] ">
                {top3Data[0]?.fluctuationRate}%
              </p>
              <p className="font-normal text-[12px] text-[#ffffff]">
                {top3Data[0]?.totalBalance}원
              </p>
            </div>
          </div>
          <div className="w-[110px] flex flex-col justify-start items-center mr-[56px] ">
            <p className="font-bold text-[16px] text-[#ffffff] mb-[9px]">
              🥇{top3Data[1]?.nickname}
            </p>
            <div className="w-[110px] h-[110px] rounded-full bg-slate-500 mb-[4px] " />
            <div className="bg-[#33323F] w-[140px] h-[108px] rounded-t-md  pt-[16px] flex flex-col justify-start items-center">
              <p className="font-bold text-[12px] text-[#A634FF] ">
                {top3Data[1]?.fluctuationRate}%
              </p>
              <p className="font-normal text-[12px] text-[#ffffff]">
                {top3Data[1]?.totalBalance}원
              </p>
            </div>
          </div>
          <div className="w-[120px] flex flex-col justify-start items-center ">
            <p className="font-bold text-[16px] text-[#ffffff] mb-[9px]">
              🥉{top3Data[2]?.nickname}
            </p>
            <div className="w-[84px] h-[84px] rounded-full bg-slate-500 mb-[4px]" />
            <div className="bg-[#33323F] w-[118px] h-[78px] rounded-t-md pt-[16px] flex flex-col justify-start items-center ">
              <p className="font-bold text-[12px] text-[#A634FF] ">
                {top3Data[2]?.fluctuationRate}%
              </p>
              <p className="font-normal text-[12px] text-[#ffffff]">
                {top3Data[2]?.totalBalance}원
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RankTop3;
