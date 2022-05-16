import React from 'react';
import Closeicon from '../../../../../public/icons/close.svg';
import Ranker from '../realrank/ranker';

function PrevModal({ setModal }) {
  return (
    <div>
      <div className=" h-[69px] self-stretch flex-grow-0 flex justify-start items-start p-5 sahdow-box bg-Neutrals-white rounded-t-[10px] z-50">
        <div className="w-full h-[29px] flex-gorw flex justify-between items-center">
          <span className="h-[29px] flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            지난주 전체 랭킹
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setModal(false);
          }}
        >
          <Closeicon />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-start items-stretch p-5 shadow-box bg-Neutrals-white rounded-b-[10px]">
        <div className="w-[781px] h-[742px] flex flex-col justify-start items-end overscroll-none gap-[15px] ">
          <Ranker />
          <div />
        </div>
        <button
          className="w-full h-[48px] self-stretch flex-grow-0 flex justify-center items-center gap-[10px] rounded-[10px] bg-Primary-purple"
          type="button"
          onClick={() => {
            setModal(false);
          }}
        >
          <div className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-center text-Neutrals-white ">
            닫기
          </div>
        </button>
      </div>
    </div>
  );
}

export default PrevModal;
