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
      
      // 1. currentstate 검사 
      if(currentState.time !== '')
      {
        // 3. 있으면 받아온 시간과 state의 시간값 비교
        if(date === currentState.time)
        {
          const updateState={
            ...currentState,
            high: realData.tradePrice > currentState.high ? realData.tradePrice : currentState.high,
            low: realData.tradePrice < currentState.low ? realData.tradePrice : currentState.low,
            close: realData.tradePrice,
          }
          setCureentState(updateState);
        }
        // 4. 받아온 시간과 state의 시간값이 다른 경우 dispatch 
        else 
        {
          const inputData = {
            x: currentState.time,
            y: [currentState.start,currentState.high,currentState.low,currentState.close]
          }
          dispatch(addChart(inputData))

        }
      }
      // 2. 없으면 tradePrice로 초기값 세팅
      else
      {
        const newState = {
          time: date,
          start: realData.tradePrice,
          high: realData.tradePrice,
          low: realData.tradePrice,
          close: realData.tradePrice,
        }
        setCureentState(newState);
      }

      // 현재 state의 시간과 realData의 시간이 일치할 경우 
      if(date === currentState.x)
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
      else if(currentState.time !== 0)
      {
        const inputData = {
          x: date,
          y: [realData.tradePrice,realData.tradePrice,realData.tradePrice,realData.tradePrice]
        }
        dispatch(addChart(inputData))
        setCureentState(defaultState);
      }
    }

    React.useEffect(()=> {
      stpClient2.connect({}, ()=> {
        stpClient2.subscribe(`/sub/topic/${coinType}`, (message) =>{
          const returnData = JSON.parse(message.body);
          const year = returnData.tradeDate.toString().substring(0,4);
          const month = returnData.tradeDate.toString().substring(4,6);
          const day = returnData.tradeDate.toString().substring(6,8);
          const hh = returnData.tradeTime.toString().substring(0,2);
          const mm = returnData.tradeTime.toString().substring(2,4);
          const ss = returnData.tradeTime.toString().substring(4,6);
          const dateNew = new Date(`${month}/${day}/${year} ${hh}:${mm}:${ss} UTC`)
          console.log(dateNew)
          console.log(`${dateNew.getHours()}:${dateNew.getMinutes()} `)
          console.log(returnData.tradePrice.toString())
          DataSetting(`${dateNew.getHours()}:${dateNew.getMinutes()} `, returnData);
          // // console.log(returnData);
          // dispatch(getCurMonut(returnData.tradePrice));
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