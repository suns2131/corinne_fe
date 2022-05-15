import { memo } from 'react';
import { InView } from 'react-intersection-observer';

function MyPageTransactionHistory({ data, userTransaction, lastScrollRef }) {
  if (!userTransaction) return null;
  return (
    <div className="text-center shadow-md rounded-lg p-5">
      <section>
        <h1>거래내역</h1>
      </section>
      <section className="h-[458px] overflow-auto">
        {data.map((item) => (
          <div className="pt-5">
            <div className="flex justify-between">
              <p>매도</p>
              <p>1000000원</p>
            </div>
            <div className="flex justify-between">
              <p>종목명</p>
              <p>비트코인</p>
            </div>
            <div className="flex justify-between">
              <p>체결가격</p>
              <p>1000000원</p>
            </div>
            <div className="flex justify-between">
              <p>체결금액</p>
              <p>1000000원</p>
            </div>
            <div className="flex justify-between">
              <p>레버리지</p>
              <p>1x</p>
            </div>
            <div className="flex justify-between">
              <p>레버리지</p>
              <p>1x</p>
            </div>
            <div className="flex justify-between">
              <p>레버리지</p>
              <p>1x</p>
            </div>
            <div className="flex justify-between">
              <p>레버리지</p>
              <p>1x</p>
            </div>
          </div>
        ))}
        <div ref={lastScrollRef} />
      </section>
    </div>
  );
}

export default memo(MyPageTransactionHistory);
