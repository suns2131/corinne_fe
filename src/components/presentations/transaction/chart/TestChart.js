import dynamic from 'next/dynamic';
import React, { useState } from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const ApexCharts = dynamic(() => import('apexcharts'), { ssr: false });

function TestChart({ addBtn, cnt }) {
  const candles = [];
  const lines = [];
  const [test, setTest] = useState({
    series: [
      {
        name: 'line',
        type: 'line',
        data: [],
      },
      {
        name: 'candle',
        type: 'candlestick',
        data: [],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 350,
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left',
      },
      xaxis: {
        type: 'category',

        // categories: [1, 2, 3, 4, 5],
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
      zoom: {
        enabled: false,
      },
    },
  });
  const onlick = () => {
    console.log(cnt);
    setTest((prevState) => ({
      ...prevState,
      series: [
        {
          name: 'line',
          type: 'line',
          data: lines,
        },
        {
          name: 'candle',
          type: 'candlestick',
          data: [...candles, addBtn()],
        },
      ],
    }));
  };

  return (
    <div id="chart">
      <Chart options={test?.options} series={test?.series} type="candlestick" height={350} />
      <button
        type="button"
        onClick={() => {
          onlick();
        }}
      >
        adddata
      </button>
    </div>
  );
}
export default TestChart;
