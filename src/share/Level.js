import React from 'react'

function Level({level}) {
    const jugment = level;
    let colors = '';
    if(jugment >= 320000)
      colors = 'purple';
    else if(jugment >= 160000)
      colors = 'navy';
    else if(jugment >= 80000)
      colors = 'sky';
    else if(jugment >= 50000)
      colors = 'green';
    else if(jugment >= 30000)
      colors = 'yellow';
    else if(jugment >= 5000)
      colors = 'orange';
    else
      colors = 'red';
   
    return (
      <div>
        {colors === "purple" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-[#6800BA] rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.퍼플</p>
          </div>
        }
        {colors === "navy" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-[#5760B1] rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.네이비</p>
          </div>
        }
        {colors === "sky" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-sky-300 rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.스카이</p>
          </div>
        }
        {colors === "green" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-[#c1dc95] rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.그린</p>
          </div>
        }
        {colors === "yellow" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-[#efd886] rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.옐로우</p>
          </div>
        }
        {colors === "orange" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-[#ff9e0d] rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.오렌지</p>
          </div>
        }
        {colors === "red" &&
          <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center mr-[8px]">
          <div className="w-[14px] h-[14px] bg-[#e05656] rounded-full mr-[4px]" />
          <p className=" font-normal text-[12px]">Lv.레드</p>
          </div>
        }
      </div>
    );  
}

export default Level;