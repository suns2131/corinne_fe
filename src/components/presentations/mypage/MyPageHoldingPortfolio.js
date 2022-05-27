import { memo } from 'react';
import PortfolioDonutChart from './PortfolioDonutChart';

const colorArray = ['#8669d2', '#e2923b', '#b19947'];
function MyPageHoldingPortfolio({ userBalance }) {
  if (!userBalance) return null;
  const { coins } = userBalance;
  return (
    <div className="shadow-box rounded-lg bg-Neutrals-white">
      <section className="shadow-box h-[70px] p-5 flex flex-col justify-center font-bold rounded-[10px]">
        보유자산 포트폴리오
      </section>
      <section className="text-center">
        <div className="mx-auto">
          <PortfolioDonutChart userBalance={userBalance} colorArray={colorArray} />
        </div>
        <ul className="grid grid-cols-2 w-[280px] place-items-center mx-auto mt-[80px]">
          {coins.map(({ coin, importanceRate }, index) => (
            <li className="flex items-center w-[120px]">
              <div
                style={{ backgroundColor: colorArray[index] }}
                className="w-[14px] h-[14px] rounded-full"
              />
              <pre className="ml-3 text-[13px]">
                {coin.split('-')[1]} ({importanceRate}%)
              </pre>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(MyPageHoldingPortfolio);
