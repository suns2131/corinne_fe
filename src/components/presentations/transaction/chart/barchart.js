import React from 'react';
import dynamic from 'next/dynamic';
import { Won } from '../../../../share/convertWon';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function Barchart({ setChartType, selectInfo, currentMount, chartData }) {
  const dState = {
    options: {
      chart: {},
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#A634FF',
            downward: '#FF9E0D',
          },
        },
      },
      yaxis: {
        opposite: true,
      },
      toolbar: {
        tools: {
          reset: false,
        },
      },
      export: {
        autoSeleted: 'selection',
      },
    },
    series: [
      {
        data: chartData,
      },
    ],
  };
  return (
    <ApexChart
      options={dState.options}
      series={dState.series}
      plotoptions={dState.plotOptions}
      yaxis={dState.yaxis}
      type="candlestick"
      width="753px"
      height="200px"
    />
  );
}

export default Barchart;
