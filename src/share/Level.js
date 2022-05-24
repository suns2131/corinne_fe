import React from 'react';
import { checkLevelColor } from './exp';

function Level({ Exp }) {
  const jugment = Exp;
  const { colors, colorName } = checkLevelColor(Exp);

  return (
    <div>
      {colorName.length > 2 ? (
        <div className="w-[84px] h-[26px] flex justify-center items-center gap-[4px] p-[6px,10px] rounded-[20px] border border-solid border-[#e4e4e4] bg-Neutrals-white ">
          <div className={`w-[14px] h-[14px] ${colors} rounded-full flex-grow-0`} />
          <span className="w-[56px] h-[20px] flex-grow-0 flex justify-center items-center font-Pretendard text-[12px] text-left text-Neutrals-black">
            Lv.{colorName}
          </span>
        </div>
      ) : (
        <div className="w-[74px] h-[26px] flex justify-center items-center gap-[4px] p-[6px,10px] rounded-[20px] border border-solid border-[#e4e4e4] bg-Neutrals-white ">
          <div className={`w-[14px] h-[14px] ${colors} rounded-full flex-grow-0`} />
          <span className="w-[46px] h-[20px] flex-grow-0 flex justify-center items-center font-Pretendard text-[12px] text-left text-Neutrals-black">
            Lv.{colorName}
          </span>
        </div>
      )}
    </div>
  );
}

export default Level;
