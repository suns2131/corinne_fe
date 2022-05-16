import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TikerList.module.css';
import { Won } from '../../../../share/convertWon';

function TikerList({ defaultList, coinList, setCoinList, itemClick, changeCoinList }) {
  return (
    <div className=" font-Pretendard mb-5">
      {/* 헤더 */}
      <div className=" w-[387px] h-[114px] flex flex-col items-start p-5 gap-[10px]  shadow-008 rounded-t-[10px]">
        <div className="w-[347px] h-[74px] mb-[10px]">
          <div className="flex mb-[10px]">
            <button
              className="w-[65px] h-[32px] mr-[10px] bg-[#ffffff] border border-solid border-[#eeeeee] rounded-[6px] text-[12px] font-normal hover:bg-[#eeeeee]"
              onClick={() => {
                setCoinList(defaultList);
              }}
              type="button"
            >
              전체 종목
            </button>
            <button
              className="w-[65px] h-[32px] mr-[10px] bg-[#ffffff] border border-solid border-[#eeeeee] rounded-[6px] text-[12px] font-normal hover:bg-[#eeeeee]"
              onClick={() => {
                setCoinList(defaultList.filter((el) => el.favorite));
              }}
              type="button"
            >
              관심 종목
            </button>
          </div>
          <div className="w-[347px] h-[32px] bg-[#f9f9f9] rounded-[22px] px-[15px] py-[4px] flex ">
            <input
              className="w-[300px] text-[15px] font-normal outline-none bg-transparent"
              placeholder="코인 검색"
              onKeyUp={changeCoinList}
              type="text"
            />
            <button
              className="w-[22px] h-[25px] bg-transparent flex justify-center items-center"
              type="button"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z"
                  fill="#434051"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* 리스트 */}
      <div className={styles.TikerDiv}>
        {coinList &&
          coinList.map((el, idx) => (
            <button
              id={idx}
              type="button"
              className={styles.Tikeritem}
              onClick={() => {
                itemClick(el);
              }}
            >
              <div className={styles.TikeritemDiv}>
                <div className={styles.TikeritemDiv1}>
                  {el.favorite ? (
                    <button type="button">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7299 1.50989L13.4899 5.02989C13.7299 5.51989 14.3699 5.98989 14.9099 6.07989L18.0999 6.60989C20.1399 6.94989 20.6199 8.42989 19.1499 9.88989L16.6699 12.3699C16.2499 12.7899 16.0199 13.5999 16.1499 14.1799L16.8599 17.2499C17.4199 19.6799 16.1299 20.6199 13.9799 19.3499L10.9899 17.5799C10.4499 17.2599 9.55991 17.2599 9.00991 17.5799L6.01991 19.3499C3.87991 20.6199 2.57991 19.6699 3.13991 17.2499L3.84991 14.1799C3.97991 13.5999 3.74991 12.7899 3.32991 12.3699L0.849909 9.88989C-0.610091 8.42989 -0.140091 6.94989 1.89991 6.60989L5.08991 6.07989C5.61991 5.98989 6.25991 5.51989 6.49991 5.02989L8.25991 1.50989C9.21991 -0.400107 10.7799 -0.400107 11.7299 1.50989Z"
                          fill="#FFCE85"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button type="button">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7299 2.51014L14.4899 6.03014C14.7299 6.52014 15.3699 6.99014 15.9099 7.08014L19.0999 7.61014C21.1399 7.95014 21.6199 9.43014 20.1499 10.8901L17.6699 13.3701C17.2499 13.7901 17.0199 14.6001 17.1499 15.1801L17.8599 18.2501C18.4199 20.6801 17.1299 21.6201 14.9799 20.3501L11.9899 18.5801C11.4499 18.2601 10.5599 18.2601 10.0099 18.5801L7.01991 20.3501C4.87991 21.6201 3.57991 20.6701 4.13991 18.2501L4.84991 15.1801C4.97991 14.6001 4.74991 13.7901 4.32991 13.3701L1.84991 10.8901C0.389909 9.43014 0.859909 7.95014 2.89991 7.61014L6.08991 7.08014C6.61991 6.99014 7.25991 6.52014 7.49991 6.03014L9.25991 2.51014C10.2199 0.600137 11.7799 0.600137 12.7299 2.51014Z"
                          stroke="#CECECE"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.7299 2.51014L14.4899 6.03014C14.7299 6.52014 15.3699 6.99014 15.9099 7.08014L19.0999 7.61014C21.1399 7.95014 21.6199 9.43014 20.1499 10.8901L17.6699 13.3701C17.2499 13.7901 17.0199 14.6001 17.1499 15.1801L17.8599 18.2501C18.4199 20.6801 17.1299 21.6201 14.9799 20.3501L11.9899 18.5801C11.4499 18.2601 10.5599 18.2601 10.0099 18.5801L7.01991 20.3501C4.87991 21.6201 3.57991 20.6701 4.13991 18.2501L4.84991 15.1801C4.97991 14.6001 4.74991 13.7901 4.32991 13.3701L1.84991 10.8901C0.389909 9.43014 0.859909 7.95014 2.89991 7.61014L6.08991 7.08014C6.61991 6.99014 7.25991 6.52014 7.49991 6.03014L9.25991 2.51014C10.2199 0.600137 11.7799 0.600137 12.7299 2.51014Z"
                          stroke="black"
                          strokeOpacity="0.2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  <div className={styles.TikeritemDiv2}>
                    <Image src={el.src} width="42" height="42" alt="btc" />
                    <div className={styles.TikeritemTitle}>
                      <p className=" text-base font-bold">{el.name}</p>
                      <p className=" text-sm font-normal text-[#CECECE]">{el.upRate.toFixed(2)}%</p>
                    </div>
                  </div>
                </div>
                <div className={styles.TikeritemPrice}>
                  <p className="font-bold text-[15px] text-[#A634ff]">{Won(el.price)}원</p>
                  <p className="font-normal text-[14px] text-[#cecece]">1.00 {el.unitPrice}</p>
                </div>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
}

export default TikerList;
