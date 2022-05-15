import { memo } from 'react';

function MyPageHoldings({ userBalance }) {
  if (!userBalance) return null;

  const { accountBalance, totalBalance } = userBalance;
  return (
    <div className="shadow-box rounded-lg">
      <section className="shadow-box h-[70px] p-5">
        <h1>보유자산</h1>
      </section>
      <section className="p-5">
        <div className="flex justify-between">
          <p className="flex items-center">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.92664 3.88667C9.34664 3.71333 8.70664 3.6 7.99997 3.6C4.80664 3.6 2.21997 6.18667 2.21997 9.38C2.21997 12.58 4.80664 15.1667 7.99997 15.1667C11.1933 15.1667 13.78 12.58 13.78 9.38667C13.78 8.2 13.42 7.09333 12.8066 6.17333"
                stroke="#CECECE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.92664 3.88667C9.34664 3.71333 8.70664 3.6 7.99997 3.6C4.80664 3.6 2.21997 6.18667 2.21997 9.38C2.21997 12.58 4.80664 15.1667 7.99997 15.1667C11.1933 15.1667 13.78 12.58 13.78 9.38667C13.78 8.2 13.42 7.09333 12.8066 6.17333"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7533 4.04667L8.82666 1.83333"
                stroke="#CECECE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7533 4.04667L8.82666 1.83333"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7533 4.04667L8.50659 5.68667"
                stroke="#CECECE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.7533 4.04667L8.50659 5.68667"
                stroke="black"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-1 text-[14px] text-Neutrals-black">총자산</span>
          </p>
          <div className="text-right">
            <p className="text-[24px] font-bold">{totalBalance.toLocaleString()}원</p>
            <p className="text-Primary-purple2 font-bold">+100000원</p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <p className="text-[14px] text-Neutrals-black">매수한 자산</p>
          <p className="font-bold text-[15px]">{accountBalance.toLocaleString()}원</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[14px] text-Neutrals-black">원화 자산</p>
          <p className="font-bold text-[15px]">{accountBalance.toLocaleString()}원</p>
        </div>
      </section>
    </div>
  );
}

export default memo(MyPageHoldings);
