import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useSelect } from "@mui/base";
import stpClient2 from "./TransSocket";
import { addChart, updateChart, getCurMonut } from "../../../state/reducer/transaction/chart";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function TransChart() {
    const dispatch = useDispatch();
    const chartData = useSelector((state) => state.chart.getChart);
    const defaultState = {
      time: '',
      start : 0,
      high: 0,
      low: 0,
      close: 0
    }
    const [currentState,setCureentState] = useState(defaultState);
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
    const DataSetting = (date,realData) => {
      console.log(chartData)
      if(chartData.x !== undefined)
      {
        console.log(chartData.x)
        if(chartData.x === date)
        {
          console.log('update')
          const updateData = {
            x:chartData.x,
            y:[
              chartData.y[0],
              realData.tradePrice > chartData.y[1] ? realData.tradePrice : chartData.y[1],
              realData.tradePrice < chartData.y[2] ? realData.tradePrice : chartData.y[2],
              realData.tradePrice,
            ]
          }
          dispatch(updateChart(updateData))
        }
        else
        {
          console.log('input')
          const inputData = {
            x: date.trim(),
            y: [realData.tradePrice,realData.tradePrice,realData.tradePrice,realData.tradePrice]
          }
          dispatch(addChart(inputData))
        }
      }
      else
      {
        console.log('frist')
        const inputData = {
          x: date.trim(),
          y: [realData.tradePrice,realData.tradePrice,realData.tradePrice,realData.tradePrice]
        }
        dispatch(addChart(inputData))
      }
    }

    React.useEffect(()=> {
      console.log('렌더링 다시')
      // stpClient2.connect({token : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTIyNjkzMjcsIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.5MVuc5ERTcK-keMryiH-JxUvZgODITR89BS-ddkZpHM"}, ()=> {
      //   stpClient2.subscribe(`/sub/topic/${coinType}`, (message) =>{
      //     const returnData = JSON.parse(message.body);
      //     const year = returnData.tradeDate.toString().substring(0,4);
      //     const month = returnData.tradeDate.toString().substring(4,6);
      //     const day = returnData.tradeDate.toString().substring(6,8);
      //     console.log(returnData.tradeTime.toString().length)
      //     const hh = returnData.tradeTime.toString().length > 5 ? returnData.tradeTime.toString().substring(0,2) : returnData.tradeTime.toString().substring(0,1);
      //     const mm = returnData.tradeTime.toString().length > 5 ? returnData.tradeTime.toString().substring(2,4) : returnData.tradeTime.toString().substring(1,3);
      //     const ss = returnData.tradeTime.toString().length > 5 ? returnData.tradeTime.toString().substring(4,6) : returnData.tradeTime.toString().substring(3,5);
      //     const dateNew = new Date(`${month}/${day}/${year} ${hh}:${mm}:${ss} UTC`)
      //     console.log(dateNew)
      //     console.log(`${dateNew.getHours()}:${dateNew.getMinutes()} `)
      //     console.log(returnData.tradePrice.toString())
      //     DataSetting(`${dateNew.getHours()}:${dateNew.getMinutes()} `, returnData);
      //     console.log(currentState)
      //     // // console.log(returnData);
      //     dispatch(getCurMonut(returnData.tradePrice));
      //   })
      //  return(
      //    stpClient2.disconnect();
      //  )
      // })
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