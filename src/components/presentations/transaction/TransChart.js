import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import stpClient2 from "./TransSocket";
import { addChart, getCurMonut } from "../../../state/reducer/transaction/chart";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function TransChart() {
    const dispatch = useDispatch();
    const chartData = useSelector((state) => state.chart.getChart);
    const [currentState,setCureentState] = useState({
      time: '',
      start : 0,
      high: 0,
      low: 0,
      close: 0
    });
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
      
      // 현재 state의 시간과 realData의 시간이 일치할 경우 
      if(realData.tradeTime === currentState.time)
      {
        const newState = {
          ...currentState,
          high: realData.tradePrice > currentState.high ? realData.tradePrice : currentState.high,
          low: realData.tradePrice < currentState.low ? realData.tradePrice : currentState.low,
          close: realData.tradePrice
        }
        setCureentState(newState);
      }
      // 일치하지 않을 경우 
      else 
      if(currentState.time !== 0)
        {
          const inputData = {
            x: currentState.time,
            y: [currentState.start,currentState.high,currentState.low,currentState.close]
          }
          dispatch(addChart(inputData))
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