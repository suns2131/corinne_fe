import React from 'react';
import Closeicon from '../../../../../public/icons/close.svg';
import Searchicon from '../../../../../public/icons/search.svg';
import Ranker from '../realrank/ranker';

function PrevModal({ setModal, PrevRanks, followClick }) {
  return (
    <div>
      <div className=" h-[69px] self-stretch flex-grow-0 flex justify-start items-start p-5 sahdow-box bg-Neutrals-white rounded-t-[10px] z-50">
        <div className="w-full h-[29px] flex-gorw flex justify-between items-center">
          <span className="h-[29px] flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            지난주 전체 랭킹
          </span>
        </div>
        <div className="flex">
          {/* <div className="w-[216px] h-[44px] px-[4px] py-[15px] bg-Neutrals-lightGray rounded-[10px] flex justify-center items-center"> */}
          {/* <input className=" outline-none" type="text" placeholder="닉네임 검색" /> */}
          <button type="button">{/* <Searchicon /> */}</button>
          {/* </div> */}
          <button
            type="button"
            onClick={() => {
              setModal(false);
            }}
          >
            <Closeicon />
          </button>
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-start items-stretch p-5 shadow-box bg-Neutrals-white rounded-b-[10px]">
        <div className="w-[781px] h-[742px] flex flex-col justify-start items-end overflow-y-auto gap-[15px] ">
          {PrevRanks &&
            PrevRanks.rank.map((el, idx) => (
              <Ranker type={idx + 1} rankerData={el} followClick={followClick} />
            ))}

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
