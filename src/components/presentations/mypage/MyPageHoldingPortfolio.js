import { memo } from 'react';
import PortfolioDonutChart from './PortfolioDonutChart';

function MyPageHoldingPortfolio({ userBalance }) {
  if (!userBalance) return null;
  const { coins } = userBalance;
  return (
    <div className="shadow-box rounded-lg">
      <section className="shadow-box h-[70px] p-5">보유자산 포트폴리오</section>
      <section className="text-center">
        <div className="mx-auto">
          <PortfolioDonutChart userBalance={userBalance} />
        </div>
        <ul className="grid grid-cols-2 w-48 mx-auto">
          {coins.map(({ coin }) => (
            <li>{coin}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default memo(MyPageHoldingPortfolio);
