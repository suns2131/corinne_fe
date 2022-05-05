import React from "react";
import dynamic from "next/dynamic";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function TransChart() {
    const dState = {
        options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            },
          },
        plotOptions: {
            candlestick: {
                colors: {
                  upward: '#00B746',
                  downward: '#EF403C'
                },
                wick: {
                  useFillColor: true
                }
              }
          },
          series: [{
            data: [
              { x :'00:00', y: [899,899,896,896]},
              { x :'01:00', y: [897,899,895,897]},
              { x :'02:00', y: [895,899,896,899]},
              { x :'03:00', y: [896,897,897,898]},
              { x :'04:00', y: [895,897,897,897]},
              { x :'05:00', y: [896,898,897,899]},
              { x :'06:00', y: [896,898,899,900]},
              { x :'07:00', y: [898,899,898,901]},
              { x :'08:00', y: [891,899,892,899]},
              { x :'09:00', y: [891,891,893,896]},
              { x :'10:00', y: [891,894,892,895]},
              { x :'11:00', y: [890,892,890,892]},
              { x :'12:00', y: [890,891,892,894]},
              { x :'13:00', y: [892,893,895,896]},
              { x :'14:00', y: [892,895,895,895]},
              { x :'15:00', y: [893,895,894,895]},
              { x :'16:00', y: [893,895,894,895]},
              { x :'17:00', y: [893,894,894,895]},
              { x :'18:00', y: [893,894,894,895]},
              { x :'19:00', y: [888,894,891,894]},
              { x :'20:00', y: [896,899,896,899]},
              { x :'21:00', y: [896,899,896,899]},
              { x :'22:00', y: [896,899,896,899]},
              { x :'23:00', y: [896,899,896,899]},
            ]
          }]
        };

    return (
        <ApexChart
        options={dState.options}
        series={dState.series}
        plotoptions ={dState.plotOptions}
        type="candlestick"
        width="760"
        height="500"
      />
    );
}

export default TransChart