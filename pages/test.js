import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function testPage() {
  const dstate = {
    series: [
      {
        data: [
          {
            x: new Date('2022', '05', '10'),
            y: [1000, 1005, 1000, 1003],
          },
          {
            x: new Date('2022', '05', '11'),
            y: [1000, 1005, 1000, 1003],
          },
          {
            x: new Date('2022', '05', '12'),
            y: [1000, 1005, 990, 1003],
          },
          {
            x: new Date('2022', '05', '13'),
            y: [1000, 1005, 1000, 1003],
          },
          {
            x: new Date('2022', '05', '14'),
            y: [1000, 1005, 1000, 1003],
          },
          {
            x: new Date('2022', '05', '15'),
            y: [1000, 1005, 1000, 1003],
          },
          {
            x: new Date('2022', '05', '16'),
            y: [1000, 1005, 1000, 1003],
          },
          {
            x: new Date('2022', '05', '17'),
            y: [1000, 1005, 1000, 1003],
          },
        ],
      },
    ],
    options: {
      chart: {
        type: 'candlestick',
        height: 290,
        id: 'candles',
        toolbar: {
          autoSelected: 'pan',
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#3C90EB',
            downward: '#DF7D46',
          },
        },
      },
      xaxis: {
        type: 'datetime',
      },
    },

    seriesBar: [
      {
        name: 'volume',
        data: [
          {
            x: new Date('2022', '05'),
            y: 1000,
          },
          {
            x: new Date('2022', '05', '11'),
            y: 5000,
          },
        ],
      },
    ],
    optionsBar: {
      chart: {
        height: 160,
        type: 'bar',
        brush: {
          enabled: true,
          target: 'candles',
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date('20 Jan 2022').getTime(),
            max: new Date('10 Dec 2022').getTime(),
          },
          fill: {
            color: '#ccc',
            opacity: 0.4,
          },
          stroke: {
            color: '#0D47A1',
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: '#F15B46',
              },
              {
                from: 1,
                to: 10000,
                color: '#FEB019',
              },
            ],
          },
        },
      },
      stroke: {
        width: 0,
      },
      xaxis: {
        type: 'datetime',
        axisBorder: {
          offsetX: 13,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
  };
  return (
    <div className="chart-box">
      <div id="chart-candlestick">
        <ApexChart
          options={dstate.options}
          series={dstate.series}
          type="candlestick"
          height={290}
        />
      </div>
    </div>
  );
}
