import React from 'react';

function Level({ Exp }) {
  const jugment = Exp;
  let colors = '';
  let colorName = '';
  if (jugment >= 350000) {
    colors = 'bg-Primary-purple';
    colorName = '퍼플';
  } else if (jugment >= 200000) {
    colors = 'bg-Level-navy';
    colorName = '네이비';
  } else if (jugment >= 100000) {
    colors = 'bg-Level-sky';
    colorName = '스카이';
  } else if (jugment >= 60000) {
    colors = 'bg-Level-green';
    colorName = '그린';
  } else if (jugment >= 30000) {
    colors = 'bg-Level-yellow';
    colorName = '옐로우';
  } else if (jugment >= 5000) {
    colors = 'bg-Level-orange';
    colorName = '오렌지';
  } else {
    colors = 'bg-Level-red';
    colorName = '레드';
  }

  return (
    <div>
      {colorName.length > 2 ? (
        <div className="w-[84px] h-[26px] flex justify-center items-center gap-[4px] p-[6px,10px] rounded-[20px] border border-solid border-[#e4e4e4] bg-Neutrals-white ">
          <div className={`w-[14px] h-[14px] ${colors} rounded-full flex-grow-0`} />
          <span className="w-[46px] h-[20px] flex-grow-0 flex justify-center items-center font-Pretendard text-[12px] text-left text-Neutrals-black">
            Lv.{colorName}
          </span>
        </div>
      ) : (
        <div className="w-[74px] h-[26px] flex justify-center items-center gap-[4px] p-[6px,10px] rounded-[20px] border border-solid border-[#e4e4e4] bg-Neutrals-white ">
          <div className={`w-[14px] h-[14px] ${colors} rounded-full flex-grow-0`} />
          <span className="w-[36px] h-[20px] flex-grow-0 flex justify-center items-center font-Pretendard text-[12px] text-left text-Neutrals-black">
            Lv.{colorName}
          </span>
        </div>
      )}
    </div>
  );
}

export default Level;
