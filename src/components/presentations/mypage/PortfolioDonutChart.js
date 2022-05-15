import { memo } from 'react';
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function PortFolioDonutChart() {
  const state = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '50%',
            labels: {
              show: false,
            },
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  };
  return (
    <div id="chart">
      <ApexChart options={state.options} series={state.series} type="donut" />
    </div>
  );
}

export default PortFolioDonutChart;
