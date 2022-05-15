import { memo } from 'react';

function MyPageHoldings({ userBalance }) {
  if (!userBalance) return null;

  const { accountBalance } = userBalance;
  return (
    <div className="shadow-md rounded-lg p-5">
      <section className="">
        <h1>보유자산</h1>
      </section>
      <section>
        <div className="flex justify-between">
          <p>총자산</p>
          <p>{accountBalance}원</p>
        </div>
        <div className="flex justify-between">
          <p>매수한 자산</p>
          <p>1000000원</p>
        </div>
        <div className="flex justify-between">
          <p>원화 자산</p>
          <p>1000000원</p>
        </div>
      </section>
    </div>
  );
}

export default memo(MyPageHoldings);
