import { memo } from 'react';

function MyPageTransactionHistory({ userTransaction, lastScrollRef }) {
  if (!userTransaction) return null;
  const { content } = userTransaction;
  return (
    <div className="shadow-box rounded-lg bg-Neutrals-white">
      <section className="shadow-box h-[70px] p-5 flex flex-col justify-center items-start font-bold rounded-[10px]">
        <h1>전체 거래내역</h1>
      </section>
      <section className="h-[458px] px-5 overflow-auto scrollbar-none">
        {content.map(({ amount, leverage, price, tiker, tradeAt, type }) => (
          <div className="pt-5">
            <div className="flex justify-between">
              {type === 'sell' ? (
                <p className="text-Secondary-orange font-bold">매도</p>
              ) : (
                <p className="text-Primary-purple2 font-bold">매수</p>
              )}
              <p className="text-Neutrals-lightGray text-sm">{tradeAt.split(',')}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-Neutrals-lightGray">종목명</p>
              <p>{tiker.split('-')[1]}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-Neutrals-lightGray">체결가격</p>
              <p>{price.toLocaleString()}원</p>
            </div>
            <div className="flex justify-between">
              <p className="text-Neutrals-lightGray">체결금액</p>
              <p>{amount.toLocaleString()}원</p>
            </div>
            <div className="flex justify-between">
              <p className="text-Neutrals-lightGray">레버리지</p>
              <p>{leverage}x</p>
            </div>
          </div>
        ))}
        <div ref={lastScrollRef} />
      </section>
    </div>
  );
}

export default memo(MyPageTransactionHistory);
