import { memo } from 'react';
import PortfolioDonutChart from './PortfolioDonutChart';

const colorArray = ['#e2929b', '#8669d2', '#b18847', 'black'];
function MyPageHoldingPortfolio({ userBalance }) {
  if (!userBalance) return null;
  const { coins } = userBalance;
  return (
    <div className="shadow-box rounded-lg">
      <section className="shadow-box h-[70px] p-5">보유자산 포트폴리오</section>
      <section className="text-center">
        <div className="mx-auto">
          <PortfolioDonutChart userBalance={userBalance} colorArray={colorArray} />
        </div>
        <ul className="grid grid-cols-2 gap-4 w-[222px] mx-auto mt-[80px]">
          {coins.map(({ coin, importanceRate }, index) => (
            <li className="flex items-center w-[111px]">
              <div
                style={{ backgroundColor: colorArray[index] }}
                className="w-[14px] h-[14px] rounded-full"
              />
              <span className="ml-3 text-[13px]">
                {coin.split('-')[1]} ({importanceRate}%)
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(MyPageHoldingPortfolio);
