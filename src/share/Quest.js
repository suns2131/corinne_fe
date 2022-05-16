import React from 'react';

function Quest({ type }) {
  if (type === 1) {
    return (
      <div className="flex ">
        <div className="w-[327px] h-[118px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10px] p-5 bg-Neutrals-whiteGray">
          <div className="h-[78px] self-stretch flex-grow-0 flex flex-col justify-start items-start gap-[12px]">
            <span className="w-[291px] h-[18px] flex-grow-0 font-Pretendard text-[15px] font-bold text-left text-Neutrals-black">
              퀘스트명
            </span>
            <span className="w-[291px] flex-grow-0 font-Pretendard text-left text-Neutrals-black">
              퀘스트 설명
            </span>
            <div className="w-[144px] h-[20px] flex-grow-0 flex justify-start items-start gap-[6px]">
              <div className="w-[69px] h-[20px] flex-grow-0 flex justify-center items-center gap-[2px] rounded-[15px] border border-solid border-Primary-purple">
                <span className="flex-grow-0 text-[12px] text-center text-Primary-purple">
                  +10,000
                </span>
              </div>
              <div className="w-[69px] h-[20px] flex-grow-0 flex justify-center items-center gap-[2px] rounded-[15px] border border-solid border-Primary-purple">
                <span className="flex-grow-0 text-[12px] text-center text-Primary-purple">
                  +10,000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[72px] h-[118px] flex-grow-0 flex flex-col justify-center items-start gap-[10px] py-[44px] px-[15px] bg-Neutrals-black rounded-tr-[10px] rounded-br-[10px]">
          <span className="flex-grow font-Pretendard text-[12px] text-center text-Neutrals-white">
            바로가기
          </span>
        </div>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="flex ">
        <div className="w-[327px] h-[118px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10px] p-5 bg-Neutrals-whiteGray">
          <div className="h-[78px] self-stretch flex-grow-0 flex flex-col justify-start items-start gap-[12px]">
            <span className="w-[291px] h-[18px] flex-grow-0 font-Pretendard text-[15px] font-bold text-left text-Neutrals-black">
              퀘스트명
            </span>
            <span className="w-[291px] flex-grow-0 font-Pretendard text-left text-Neutrals-black">
              퀘스트 설명
            </span>
            <div className="w-[144px] h-[20px] flex-grow-0 flex justify-start items-start gap-[6px]">
              <div className="w-[69px] h-[20px] flex-grow-0 flex justify-center items-center gap-[2px] rounded-[15px] bg-Primary-purple">
                <span className="flex-grow-0 text-[12px] text-center text-Neutrals-white">
                  +10,000
                </span>
              </div>
              <div className="w-[69px] h-[20px] flex-grow-0 flex justify-center items-center gap-[2px] rounded-[15px] bg-Primary-purple">
                <span className="flex-grow-0 text-[12px] text-center text-Neutrals-white">
                  +10,000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[72px] h-[118px] flex-grow-0 flex flex-col justify-center items-start gap-[10px] py-[44px] px-[15px] bg-Primary-purple rounded-tr-[10px] rounded-br-[10px]">
          <span className="flex-grow font-Pretendard text-[12px] text-center text-Neutrals-white">
            보상받기 🎉
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="flex ">
      <div className="w-[327px] h-[118px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10px] p-5 bg-Neutrals-whiteGray">
        <div className="h-[78px] self-stretch flex-grow-0 flex flex-col justify-start items-start gap-[12px]">
          <span className="w-[291px] h-[18px] flex-grow-0 font-Pretendard text-[15px] font-bold text-left text-Neutrals-gray">
            퀘스트명
          </span>
          <span className="w-[291px] flex-grow-0 font-Pretendard text-left text-Neutrals-gray">
            퀘스트 설명
          </span>
          <div className="w-[144px] h-[20px] flex-grow-0 flex justify-start items-start gap-[6px]">
            <div className="w-[69px] h-[20px] flex-grow-0 flex justify-center items-center gap-[2px] rounded-[15px] bg-Neutrals-lightGray">
              <span className="flex-grow-0 text-[12px] text-center text-Neutrals-white">
                +10,000
              </span>
            </div>
            <div className="w-[69px] h-[20px] flex-grow-0 flex justify-center items-center gap-[2px] rounded-[15px] bg-Neutrals-lightGray">
              <span className="flex-grow-0 text-[12px] text-center text-Neutrals-white">
                +10,000
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[72px] h-[118px] flex-grow-0 flex flex-col justify-center items-start gap-[10px] py-[44px] px-[15px] bg-Neutrals-lightGray rounded-tr-[10px] rounded-br-[10px]">
        <span className="flex-grow font-Pretendard text-[12px] flex justify-center items-center text-center text-Neutrals-white">
          완료
        </span>
      </div>
    </div>
  );
}

export default Quest;
