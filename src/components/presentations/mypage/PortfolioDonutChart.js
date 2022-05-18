import React from 'react';
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);
function PortFolioDonutChart({ userBalance, colorArray }) {
  const { coins } = userBalance;
  const setCoinChartData = () => {
    const rateData = [];
    coins.forEach(({ importanceRate }) => rateData.push(importanceRate));
    return rateData;
  };

  const data = {
    labels: ['Red', 'Green', 'Yellow', 'black'],
    datasets: [
      {
        data: setCoinChartData(),
        backgroundColor: colorArray,
        hoverBackgroundColor: colorArray,
      },
    ],
  };
  return (
    <div className="w-[200px] h-[200px] mx-auto mt-[63px]">
      <Doughnut data={data} width={450} height={450} />
    </div>
  );
}

export default PortFolioDonutChart;
