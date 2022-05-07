import React from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import stpClient2 from "./TransSocket";
import { addChart, getCurMonut } from "../../../state/reducer/transaction/chart";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function TransChart() {
    const dispatch = useDispatch();
    const chartData = useSelector((state) => state.chart.getChart);
    const coinType = 'KRW-BTC';
    const dState = {
        options: {
            chart: {
              id: "basic-bar"
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
            data:chartData 
          }]
        };
    const DataSetting = (realData) => {
      const inputData = {
        x: realData.tradeTime,
        y: [realData.tradePrice,realData.tradePrice,realData.tradePrice,realData.tradePrice]
      }
    }

    React.useEffect(()=> {
      stpClient2.connect({}, ()=> {
        stpClient2.subscribe(`/sub/topic/${coinType}`, (message) =>{
          const returnData = JSON.parse(message.body);
          DataSetting(returnData);
          console.log(returnData);
          dispatch(getCurMonut(returnData.tradePrice));
        })
      })
    },[])

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