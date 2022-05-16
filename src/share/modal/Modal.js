import React from 'react';
import Closeicon from '../../../public/icons/close.svg';

function Modal({ title, setClose, Children, btnView }) {
  return (
    <div>
      <div className="h-[69px] self-stretch flex-grow-0 flex justify-start items-start p-5 sahdow-box bg-Neutrals-white rounded-t-[10px]">
        <div className="h-[29px] flex-gorw flex justify-between items-center">
          <span className="h-[29px] flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setClose(false);
          }}
        >
          <Closeicon />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-start items-stretch p-5 shadow-box bg-Neutrals-white">
        {Children}
        {btnView && (
          <button
            className="w-full h-[48px] self-stretch flex-grow-0 flex justify-center items-center gap-[10px] rounded-[10px] bg-Primary-purple"
            type="button"
            onClick={() => {
              setClose(false);
            }}
          >
            <div className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-center text-Neutrals-white ">
              확인
            </div>
          </button>
        )}
      </div>
    </div>
  );
}

export default Modal;
