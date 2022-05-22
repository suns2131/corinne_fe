import { memo } from 'react';

function MyPageHoldingCoins({ userBalance }) {
  if (!userBalance) return null;
  const { coins } = userBalance;
  console.log(coins);
  const upDownCheck = (data) => {
    const exp = /-/;
    if (exp.test(data)) {
      return 'text-Secondary-orange font-bold';
    }
    return 'text-Primary-purple2 font-bold';
  };
  return (
    <div className="shadow-box rounded-lg">
      <section className="shadow-box h-[70px] p-5">
        <h1>보유코인</h1>
      </section>
      <section className="px-5">
        {coins.map(({ coin, fluctuation, amount, buyPrice, importanceRate, leverage }) => (
          <div className="flex justify-between my-5">
            <div className="flex items-center">
              <svg
                className="mr-3"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.73 1.51L13.49 5.03C13.73 5.52 14.37 5.99 14.91 6.08L18.1 6.61C20.14 6.95 20.62 8.43 19.15 9.89L16.67 12.37C16.25 12.79 16.02 13.6 16.15 14.18L16.86 17.25C17.42 19.68 16.13 20.62 13.98 19.35L10.99 17.58C10.45 17.26 9.56003 17.26 9.01003 17.58L6.02003 19.35C3.88003 20.62 2.58003 19.67 3.14003 17.25L3.85003 14.18C3.98003 13.6 3.75003 12.79 3.33003 12.37L0.850031 9.89C-0.609969 8.43 -0.139969 6.95 1.90003 6.61L5.09003 6.08C5.62003 5.99 6.26003 5.52 6.50003 5.03L8.26003 1.51C9.22003 -0.400001 10.78 -0.400001 11.73 1.51Z"
                  fill="#FFCE85"
                />
              </svg>
              <img
                className="mr-2"
                src={`/icons/icon_${coin.split('-')[1].toLowerCase()}.png`}
                alt="아이콘이미지"
              />
              <div className="text-left">
                <p className="font-bold">{coin.split('-')[1]}</p>
                <p className="text-sm">{amount.toLocaleString()}원</p>
              </div>
            </div>
            <div className="text-right">
              <p className={upDownCheck(fluctuation)}>{fluctuation.toLocaleString()}원</p>
              <p className="text-Neutrals-lightGray">{importanceRate}%</p>
              <p className="text-Neutrals-lightGray">{leverage}x</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default memo(MyPageHoldingCoins);
