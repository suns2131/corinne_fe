import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useDispatch, useSelector } from 'react-redux';
import { useSelect } from '@mui/base';
import stpClient2 from './TransSocket';
import { addChart, updateChart, getCurMonut } from '../../../state/reducer/transaction/chart';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function TransChart() {
  const dispatch = useDispatch();
  const chartData = useSelector((state) => state.chart.getChart);
  const defaultState = {
    time: '',
    start: 0,
    high: 0,
    low: 0,
    close: 0,
  };
  const [currentState, setCureentState] = useState(defaultState);
  const coinType = 'KRW-BTC';
  const dState = {
    options: {
      chart: {
        id: 'basic-bar',
      },
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#00B746',
          downward: '#EF403C',
        },
        wick: {
          useFillColor: true,
        },
      },
    },
    series: [
      {
        data: chartData,
      },
    ],
  };
  const DataSetting = (date, realData) => {
    if (chartData.x !== undefined) {
      if (chartData.x === date) {
        const updateData = {
          x: chartData.x,
          y: [
            chartData.y[0],
            realData.tradePrice > chartData.y[1] ? realData.tradePrice : chartData.y[1],
            realData.tradePrice < chartData.y[2] ? realData.tradePrice : chartData.y[2],
            realData.tradePrice,
          ],
        };
        dispatch(updateChart(updateData));
      } else {
        const inputData = {
          x: date.trim(),
          y: [realData.tradePrice, realData.tradePrice, realData.tradePrice, realData.tradePrice],
        };
        dispatch(addChart(inputData));
      }
    } else {
      const inputData = {
        x: date.trim(),
        y: [realData.tradePrice, realData.tradePrice, realData.tradePrice, realData.tradePrice],
      };
      dispatch(addChart(inputData));
    }
  };

  return (
    <ApexChart
      options={dState.options}
      series={dState.series}
      plotoptions={dState.plotOptions}
      type="candlestick"
      width="760"
      height="500"
    />
  );
}

export default TransChart;
