/* eslint-disable no-nested-ternary */
import React from 'react';
import dynamic from 'next/dynamic';
import { Won } from '../../../../share/convertWon';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function CoinChart({
  selectInfo,
  currentMount,
  chartData,
  bookMarkClick,
  customer,
  btnStat,
  setBtnStat,
}) {
  const dState = {
    options: {
      chart: {},
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#A634FF',
            downward: '#FF9E0D',
          },
        },
      },
      yaxis: {
        opposite: true,
      },
      toolbar: {
        tools: {
          reset: false,
        },
      },
      export: {
        autoSeleted: 'selection',
      },
    },
    series: [
      {
        data: chartData,
      },
    ],
  };

  return (
    <div className=" font-Pretendard bg-Neutrals-white">
      <div className="w-[793px] h-[90px] flex flex-col items-start p-5 shadow-box rounded-[10px] mb-5">
        <div className="w-[753px] h-[50px] flex justify-between items-center ">
          {selectInfo && (
            <div className="w-[130px] h-[50px] flex flex-row justify-center items-center gap-[11px] ">
              <img src={selectInfo.imageUrl} alt={selectInfo.unit} />
              <div className="w-[77px] h-[50px] flex flex-col items-start ">
                <div className="w-[77px] h-[29px] gap-[5px] flex flex-row justify-start items-center ">
                  <p className="text-[24px] text-[#333234f] font-bold ">{selectInfo.unit}</p>
                  {selectInfo.favorite ? (
                    <button
                      type="button"
                      onClick={() => {
                        bookMarkClick(selectInfo.tiker, selectInfo.favorite);
                      }}
                    >
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
                    <button
                      type="button"
                      onClick={() => {
                        bookMarkClick(selectInfo.tiker, selectInfo.favorite);
                      }}
                    >
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
                </div>
                <p className="text-[14px] text-[#cecece] font-normal">{selectInfo.tikername}</p>
              </div>
            </div>
          )}
          <div className="w-[270px] h-[50px] flex flex-col items-end ">
            <div className="w-[270px] h-[29px] flex flex-row justify-end items-center gap-[3px] text-[12px] font-normal">
              {currentMount && (
                <div>
                  <span>
                    {currentMount?.signedChangeRate !== undefined ? (
                      currentMount.signedChangeRate > 0 ? (
                        <span className="text-Primary-purple2">
                          {currentMount.signedChangeRate}%
                        </span>
                      ) : (
                        <span className=" text-Secondary-orange">
                          {currentMount.signedChangeRate}%
                        </span>
                      )
                    ) : (
                      0
                    )}
                  </span>
                  {currentMount?.signedChangePrice !== undefined ? (
                    currentMount.signedChangePrice > 0 ? (
                      <span className=" text-Primary-purple2">
                        ▲ {currentMount.signedChangePrice}
                      </span>
                    ) : (
                      <span className=" text-Secondary-orange">
                        ▼ {currentMount.signedChangePrice}
                      </span>
                    )
                  ) : (
                    0
                  )}
                </div>
              )}

              <div className={`font-bold text-[24px] `}>
                {currentMount?.tradePrice !== undefined ? (
                  currentMount.signedChangePrice > 0 ? (
                    <span className=" text-Primary-purple2">{Won(currentMount.tradePrice)}원</span>
                  ) : (
                    <span className=" text-Secondary-orange">{Won(currentMount.tradePrice)}원</span>
                  )
                ) : (
                  0
                )}
              </div>
            </div>
            <p className="font-normal text-[14px] text-[#cecece]">1.00 {selectInfo.unit}</p>
          </div>
        </div>
      </div>
      <div className="w-[793px] h-[558px] shadow-box rounded-[10px] p-5 mb-[24px]">
        <div className="w-[710px] h-[32px] flex justify-center items-center mb-[10px]">
          <div className="w-[70px] h-[32px] gap-[7px] flex justify-start items-center mr-[15px]">
            <button
              className={`w-[32px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] ${btnStat.today} text-[12px] font-normal text-[#777777]`}
              onClick={() => {
                setBtnStat({
                  stat: true,
                  today: 'bg-[#eeeeee]',
                  minute: 'bg-[#ffffff]',
                });
              }}
              type="button"
            >
              일
            </button>
            <button
              className={`w-[32px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] ${btnStat.minute} text-[12px] font-normal text-[#777777]`}
              onClick={() => {
                setBtnStat({
                  stat: false,
                  today: 'bg-[#ffffff]',
                  minute: 'bg-[#eeeeee]',
                });
              }}
              type="button"
            >
              분
            </button>
          </div>
          <div className="w-[587px] h-[26px] flex justify-between items-center">
            <div className="h-[20px] font-normal text-[12px] text-Neutrals-gray">
              고가
              <span className=" text-Primary-purple2">
                {Won(currentMount?.highPrice !== undefined ? currentMount.highPrice : 0)}
              </span>
              원
            </div>
            <div className="h-[20px] font-normal text-[12px] text-Neutrals-gray">
              저가
              <span className=" text-Secondary-orange">
                {Won(currentMount?.lowPrice !== undefined ? currentMount.lowPrice : 0)}
              </span>
              원
            </div>
            <div className="h-[20px] font-normal text-[12px] text-Neutrals-gray">
              전일가
              <span className=" text-Neutrals-black">
                {Won(
                  currentMount?.prevClosingPrice !== undefined ? currentMount.prevClosingPrice : 0,
                )}
              </span>
              원
            </div>
            <div className="h-[20px] font-normal text-[12px] text-Neutrals-gray">
              거래대금
              <span className=" text-Neutrals-black">
                {Won(currentMount?.tradeVolume !== undefined ? currentMount.tradeVolume : 0)}
              </span>
            </div>
            <div className="w-[125px] h-[26px] bg-[#ffffff] border border-solid border-[#eeeeee] rounded-[6px] px-[6px] py-[3px] ">
              <p className="font-normal text-[12px] text-[#777777]">
                금주 매수회원<span className=" text-Primary-purple2">{customer}</span>명
              </p>
            </div>
          </div>
        </div>
        <ApexChart
          options={dState.options}
          series={dState.series}
          plotoptions={dState.plotOptions}
          yaxis={dState.yaxis}
          type="candlestick"
          width="753px"
          height="472px"
        />
      </div>
    </div>
  );
}

export default CoinChart;
