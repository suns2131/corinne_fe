import { memo } from 'react';

function MyPageHoldingCoins({ data, userBalance }) {
  if (!userBalance) return null;
  return (
    <div className="text-center shadow-md rounded-lg p-5">
      <section>
        <h1>보유코인</h1>
      </section>
      <section>
        {data.map(({ coin, balance }) => (
          <div className="flex justify-between">
            <div>
              <svg
                className="inline-block"
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
              <span>{coin}</span>
            </div>
            <div>{balance}</div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default memo(MyPageHoldingCoins);
