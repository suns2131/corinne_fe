import React from "react";

function RankView() {
    const rankData = Array.from({ length : 12 }, (v,i)=> i);
    return (
      <div className=" font-Pretendard ">
        <div className="w-full mb-5 flex justify-between items-center" >
          <div>
              <div className=" font-bold text-4xl">
              🎉 랭킹
              </div>
              <p className=" text-sm font-normal">
                  페이지설명,페이지설명,페이지설명,페이지설명,
              </p>
          </div>
          <div className=" w-btnw h-btnh rounded-full flex justify-center items-center text-base font-bold bg-[#C4C4C4]">
              모의투자 참여시 보상 
          </div>
        </div>
        <div className=" w-full h-prevrank mb-5 flex justify-start  bg-[#C4C4C4] pt-5 pl-7" >
          <div>
              <p className=" font-bold text-base mb-9">지난주 랭킹 결과</p>
              <p className=" font-semibold text-sm mb-4"> 나의 랭킹 : 00위</p>
              <div className=" p-10s w-w130 h-h39 font-bold flex justify-center items-center mb-32 bg-[#848484]">보상받기</div>
              <div className=" p-10s w-w99 h-h34 font-light text-xs flex justify-center items-center bg-[#AAAAAA]">전체 랭킹 보기</div>
          </div>
          <div className=" w-full flex justify-center items-end ">
              <div className="flex flex-col justify-center items-center">
                <p className=" font-bold text-white">2위</p>
                <div className=" w-w141 h-h185 rounded-t-3xl p-4 bg-[#555] flex flex-col justify-start items-center">
                  <div className=" w-full flex justify-center items-center  mb-5">
                    <div className=" w-6 h-6 rounded-full bg-[#C9C9C9]" />
                    <p className=" font-semibold font text-xs text-white ml-2">닉네임</p>
                  </div>
                  <div className=" w-full flex justify-between items-center text-xxs mb-1">
                    <p>수익률</p>
                    <p>100%</p>
                  </div>
                  <div className=" w-full flex justify-between items-center text-xxs mb-6">
                    <p>총 자산</p>
                    <p>0,000,000,000</p>
                  </div>
                  <div className=" w-w99 h-h29 flex justify-center items-center text-xs bg-[#C4C4C4]">
                    <p>00,000,000원</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
              <p className=" font-bold text-white">1위</p>
                <div className=" w-w141 h-h217 rounded-t-3xl p-4 bg-[#3e3e3e] flex flex-col justify-start items-center">
                <div className=" w-full flex justify-center items-center  mb-5">
                    <div className=" w-6 h-6 rounded-full bg-[#C9C9C9]" />
                    <p className=" font-semibold font text-xs text-white ml-2">닉네임</p>
                  </div>
                  <div className=" w-full flex justify-between items-center text-xxs mb-1">
                    <p>수익률</p>
                    <p>100%</p>
                  </div>
                  <div className=" w-full flex justify-between items-center text-xxs mb-6">
                    <p>총 자산</p>
                    <p>0,000,000,000</p>
                  </div>
                  <div className=" w-w99 h-h29 flex justify-center items-center text-xs bg-[#C4C4C4]">
                    <p>00,000,000원</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
              <p className=" font-bold text-white">3위</p>
                <div className=" w-w141 h-h170 rounded-t-3xl p-4 bg-[#919191] flex flex-col justify-start items-center">
                <div className=" w-full flex justify-center items-center  mb-5">
                    <div className=" w-6 h-6 rounded-full bg-[#C9C9C9]" />
                    <p className=" font-semibold font text-xs text-white ml-2">닉네임</p>
                  </div>
                  <div className=" w-full flex justify-between items-center text-xxs mb-1">
                    <p>수익률</p>
                    <p>100%</p>
                  </div>
                  <div className=" w-full flex justify-between items-center text-xxs mb-6">
                    <p>총 자산</p>
                    <p>0,000,000,000</p>
                  </div>
                  <div className=" w-w99 h-h29 flex justify-center items-center text-xs bg-[#C4C4C4]">
                    <p>00,000,000원</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="w-full h-matchs mb-5 bg-[#C4C4C4] flex justify-center items-center">
            <p className=" text-base font-bold">1:1 대결</p>
        </div>
        <div className="w-full h-realrank mb-5 p-4 bg-[#C4C4C4]">
          <div className=" flex justify-between ">
            <p className=" font-bold text-base">이번주 실시간 랭킹</p>
            <div className=" w-w299 h-h34 flex justify-end items-center p-1 bg-[#EAEAEA] mb-5 ">
              <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 13.4167H14.71L14.43 13.1579C15.41 12.0654 16 10.6471 16 9.10417C16 5.66375 13.09 2.875 9.5 2.875C5.91 2.875 3 5.66375 3 9.10417C3 12.5446 5.91 15.3333 9.5 15.3333C11.11 15.3333 12.59 14.7679 13.73 13.8287L14 14.0971V14.8542L19 19.6362L20.49 18.2083L15.5 13.4167ZM9.5 13.4167C7.01 13.4167 5 11.4904 5 9.10417C5 6.71792 7.01 4.79167 9.5 4.79167C11.99 4.79167 14 6.71792 14 9.10417C14 11.4904 11.99 13.4167 9.5 13.4167Z" fill="#323232"/>
              </svg>
            </div>
          </div>
          <div className=" w-full h-h46 bg-[#D8D8D8] flex items-center">
            <div className=" w-1/5 text-center">순위</div>
            <div className=" w-1/5 text-center">닉네임</div>
            <div className=" w-1/5 text-center">수익률</div>
            <div className=" w-1/5 text-center">총 자산</div>
            <div className=" w-1/5 text-center">팔로우</div>
          </div> 

          {/* 반복문 들어갈곳 */}
          {rankData && rankData.map((el) => (
            <div key={el} className=" w-full h-h46 bg-[#EAEAEA] flex items-center my-2">
              <div className=" w-1/5 text-center">00위</div>
              <div className=" w-1/5 flex justify-center items-center">
                <div className=" w-6 h-6 rounded-full bg-[#C9C9C9] mr-2" />
                <p>닉네임</p>
              </div>
              <div className=" w-1/5 text-center">100%</div>
              <div className=" w-1/5 text-center">10,000,000원</div>
              <div className=" w-1/5 text-center">팔로우하기</div>
            </div>
            ))}
          
        </div>
      </div>
    );
}

export default RankView;