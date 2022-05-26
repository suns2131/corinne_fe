/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Won } from '../../../../share/convertWon';
import styles from './TradeDetail.module.css';
// eslint-disable-next-line import/no-named-as-default
import TransProgressbar from './TransProgressbar';

function TradeDetail({
  infinitiRef,
  items,
  buysellState,
  buyRequest,
  setBuyRequest,
  sellRequest,
  setSellRequest,
  setBuysellState,
  changebuysell,
  buySellClick,
  buyRef,
  sellRef,
  btnSet,
  userAmount,
  handleChange,
  currentMount,
  setSellPrice,
  buyPoint,
  sellPoint,
  SelectCoin,
}) {
  return (
    <div className=" font-Pretendard flex justify-center items-center">
      {buysellState ? (
        <div className="w-[386px] h-[464px] flex flex-col mr-5">
          <div className="flex">
            <button
              className="w-[193px] h-[69px] bg-[#FFFFFF] shadow-box rounded-t-[10px] flex flex-row justify-center items-center p-5 font-bold text-[16px] text-[#33323F]"
              onClick={() => changebuysell('buy')}
              type="button"
            >
              매수
            </button>
            <button
              className="w-[193px] h-[69px] bg-[#EEEEEE] shadow-box rounded-t-[10px] flex flex-row justify-center items-center p-5 font-bold text-[16px] text-[#CECECE]"
              onClick={() => changebuysell('sell')}
              type="button"
            >
              매도
            </button>
          </div>
          <div className="w-[386px] h-[395px] flex flex-col justify-center items-center p-5 shadow-box rounded-b-[10px] bg-Neutrals-white">
            <div className="w-[339px] h-[188px] flex flex-col items-start mb-[77px]">
              <div className="w-full flex justify-between items-center mb-[33px]">
                <p className="font-normal text-[14px] flex items-center text-[#33323f]">
                  매수 가능 금액
                </p>
                <p className="font-bold text-[14px flex items-center]">{Won(buyPoint)}원</p>
              </div>
              <TransProgressbar
                type="buy"
                handleChange={handleChange}
                buyRequest={buyRequest}
                setBuyRequest={setBuyRequest}
                currentMount={currentMount}
                SelectCoin={SelectCoin}
                buysellState={buysellState}
              />
              <div className="w-full h-[88px] flex justify-between items-center ">
                <div className="h-[88px] text-[14px] mt-[15px]">매수 금액</div>
                <div className="w-[252px] h-[80px] flex flex-col items-start ">
                  <div className="w-[252px] h-[44px] rounded-[5px] flex justify-center items-center bg-[#fbfbfb] px-[9px] py-[6px] mb-[12px]">
                    <button
                      className="w-[32px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee]"
                      onClick={() => {
                        btnSet('buy', '-');
                      }}
                      type="button"
                    >
                      -
                    </button>
                    <input
                      className="w-[150px] h-[32px] text-[14px] font-normal mx-[10px] bg-transparent outline-none"
                      ref={buyRef}
                      type="text"
                      placeholder="금액입력하기"
                    />
                    <button
                      className="w-[32px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee]"
                      onClick={() => {
                        btnSet('buy', '+');
                      }}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-[252px] h-[32px] flex justify-start gap-[10.5px] items-center ">
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('buy', '0%');
                      }}
                      type="button"
                    >
                      0%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('buy', '25%');
                      }}
                      type="button"
                    >
                      25%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('buy', '50%');
                      }}
                      type="button"
                    >
                      50%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('buy', '75%');
                      }}
                      type="button"
                    >
                      75%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('buy', '100%');
                      }}
                      type="button"
                    >
                      100%
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[346px] h-[80px] flex flex-col justify-end items-center gap-[15px] ">
              <p className="font-normal text-[12px] flex items-center text-center text-[#cecece]">
                최소 주문금액 50,000원 (수수료 0%)
              </p>
              <button
                className="w-[346px] h-[45px] flex justify-center items-center rounded-[6px] bg-[#6800BA] text-[14px] font-normal text-[#ffffff] "
                onClick={() => {
                  buySellClick('buy');
                }}
                type="button"
              >
                매수하기
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[386px] h-[464px] flex flex-col mr-5">
          <div className="flex">
            <button
              className="w-[193px] h-[69px] bg-[#EEEEEE] shadow-box rounded-t-[10px] flex flex-row justify-center items-center p-5 font-bold text-[16px] text-[#CECECE]"
              onClick={() => setBuysellState(true)}
              type="button"
            >
              매수
            </button>
            <button
              className="w-[193px] h-[69px] bg-[#FFFFFF] shadow-box rounded-t-[10px] flex flex-row justify-center items-center p-5 font-bold text-[16px] text-[#33323F]"
              onClick={() => setBuysellState(false)}
              type="button"
            >
              매도
            </button>
          </div>
          <div className="w-[386px] h-[395px] flex flex-col justify-center items-center p-5 shadow-box rounded-b-[10px] bg-Neutrals-white">
            <div className="w-[339px] h-[188px] flex flex-col items-start mb-[77px]">
              <div className="w-full flex justify-between items-center mb-[33px]">
                <p className="font-normal text-[14px] flex items-center text-[#33323f]">
                  매도 가능 금액
                </p>
                <p className="font-bold text-[14px flex items-center]">{Won(sellPoint)}원</p>
              </div>
              <TransProgressbar
                type="sell"
                handleChange={handleChange}
                sellRequest={sellRequest}
                setSellRequest={setSellRequest}
                currentMount={currentMount}
                userAmount={userAmount}
                setSellPrice={setSellPrice}
                SelectCoin={SelectCoin}
                buysellState={buysellState}
              />
              <div className="w-full h-[88px] flex justify-between items-center ">
                <div className="h-[88px] text-[14px] mt-[15px]">매도 금액</div>
                <div className="w-[252px] h-[80px] flex flex-col items-start ">
                  <div className="w-[252px] h-[44px] rounded-[5px] flex justify-center items-center bg-[#fbfbfb] px-[9px] py-[6px] mb-[12px]">
                    <button
                      className="w-[32px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee]"
                      onClick={() => {
                        btnSet('sell', '-');
                      }}
                      type="button"
                    >
                      -
                    </button>
                    <input
                      className="w-[150px] h-[32px] text-[14px] font-normal mx-[10px] bg-transparent outline-none"
                      type="text"
                      ref={sellRef}
                      placeholder="금액입력하기"
                    />
                    <button
                      className="w-[32px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee]"
                      onClick={() => {
                        btnSet('sell', '+');
                      }}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <div className="w-[252px] h-[32px] flex justify-start gap-[10.5px] items-center ">
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('sell', '0%');
                      }}
                      type="button"
                    >
                      0%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('sell', '25%');
                      }}
                      type="button"
                    >
                      25%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('sell', '50%');
                      }}
                      type="button"
                    >
                      50%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('sell', '75%');
                      }}
                      type="button"
                    >
                      75%
                    </button>
                    <button
                      className="w-[50px] h-[32px] flex justify-center items-center rounded-[6px] border border-solid border-[#eeeeee] bg-[#ffffff] text-[12px] text-[#777777]"
                      onClick={() => {
                        btnSet('sell', '100%');
                      }}
                      type="button"
                    >
                      100%
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[346px] h-[80px] flex flex-col justify-end items-center gap-[15px] ">
              <p className="font-normal text-[12px] flex items-center text-center text-[#cecece]">
                최소 주문금액 50,000원 (수수료 0%)
              </p>
              <button
                className="w-[346px] h-[45px] flex justify-center items-center rounded-[6px] bg-[#FF9E0D] text-[14px] font-normal text-[#ffffff] "
                onClick={() => {
                  buySellClick('sell');
                }}
                type="button"
              >
                매도하기
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-[386px] h-[464px]">
        <div className="w-[386px] h-[69px] bg-[#ffffff] shadow-box rounded-t-[10px] p-5 font-bold text-[16px] text-[#33323f]">
          거래내역
        </div>
        <div className={styles.contestDiv}>
          {items.length > 0 ? (
            items.map((el, idx) => (
              <div
                key={idx}
                className="w-[347px] h-[96px] flex flex-row justify-between items-start mb-[24px]"
              >
                <div className="flex flex-col items-start gap-1 font-normal text-[14px] text-[#cecece]">
                  {el.type === 'sell' ? (
                    <p className="font-bold text-[15px] text-[#ff9e0d] ">매도</p>
                  ) : (
                    <p className="font-bold text-[15px] text-[#A634FF] ">매수</p>
                  )}
                  <p>체결가격</p>
                  <p>체결금액</p>
                  <p>레버리지</p>
                </div>
                <div className=" flex flex-col items-end gap-1 font-bold text-[15px] text-[#33323f] text-right ">
                  <p className="font-normal text-[12px] text-[#cecece] flex items-end ">
                    {el.tradeAt}
                  </p>
                  <p>{el.price}원</p>
                  <p>{el.amount}원</p>
                  <p>{el.leverage}x</p>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center">
              <span className=" font-Pretendard fnot-bold text-Neutrals-gray">
                내역이 존재하지 않습니다
              </span>
            </div>
          )}
          <div ref={infinitiRef} />
        </div>
      </div>
    </div>
  );
}

export default TradeDetail;
