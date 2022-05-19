import React from 'react';
import MessageBox from './MessageBox';

function Rooms({ sendMessage, setInputMessage }) {
  return (
    <div className=" font-Pretendard">
      <div className=" w-[387px] h-[69px] bg-[#FFFFFF] rounded-t-[10px] shadow-008 p-5">
        <p className="font-bold text-[16px] text-[#33323F]">채팅</p>
      </div>
      <div className="bg-[#FFFFFF] w-[387px] h-[396px] rounded-b-[10px] shadow-008 px-5 pb-5">
        <MessageBox />
        <div className="w-[347px] h-[32px] px-[15px] py-[8px] bg-[#f9f9f9] rounded-[22px] mt-[20px] flex ">
          <input
            type="text"
            className="w-[300px] h-[18px] text-[15px] outline-none bg-transparent"
            placeholder="채팅을 입력해주세요"
            onChange={(e) => {
              setInputMessage(e.target.value);
            }}
            onKeyUp={(e) => {
              sendMessage(e);
            }}
          />
          <button
            className="w-[47px] h-[18px] bg-transparent flex justify-center items-center "
            type="button"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.93313 3.21344L9.59313 1.32677C12.1331 0.480103 13.5131 1.86677 12.6731 4.40677L10.7865 10.0668C9.51979 13.8734 7.43979 13.8734 6.17313 10.0668L5.61312 8.38677L3.93313 7.82677C0.126458 6.5601 0.126458 4.48677 3.93313 3.21344Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
