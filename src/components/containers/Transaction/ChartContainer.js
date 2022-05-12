import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import socketClient from '../../../share/socket'
import CoinChart from '../../presentations/transaction/chart/CoinChart'
import { getLoadChart, addChart, getCurMonut } from '../../../state/reducer/transaction/chart';
import { getUserAmount } from '../../../state/reducer/transaction/trans';

function ChartContainer() {
    const dispatch = useDispatch();
    const selectInfo = useSelector((state) => state.trans.tikerinfo);
    const [chartType, setChartType] = useState(true) // false 분봉 / true 일봉
    const chartData = useSelector((state) => state.chart.getChart);
    
    const currentMount = useSelector((state) => state.chart.getCurrentMonut);
    const subNum = useRef(0); // 구독취소할 subscribe id 저장변수

    // 차트 타입 변경될때마다 Chart state초기화
    React.useEffect(() => {
      dispatch(getLoadChart(selectInfo.tiker,chartType))
    },[chartType])

    // 차트 데이터 검사 로직
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
          // dispatch(updateChart(updateData))
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

    // info 변경될때마다 API 갱신 웹소켓 연결 체크
    React.useEffect(() => {
      console.log(socketClient.connected)
      
      if(selectInfo?.tiker !== undefined)
      {
        console.log(subNum.current);
        socketClient.unsubscribe(subNum.current);  
      }
      
      if(selectInfo?.tiker !== undefined && socketClient.connected){
        socketClient.subscribe(`/sub/topic/${selectInfo.tiker}` , (message) => {
          subNum.current = message.headers.subscription;
          const ChartData = JSON.parse(message.body);
          const year = ChartData.tradeDate.toString().substring(0,4);
          const month = ChartData.tradeDate.toString().substring(4,6);
          const day = ChartData.tradeDate.toString().substring(6,8);
          const hh = ChartData.tradeTime.toString().length > 5 ? ChartData.tradeTime.toString().substring(0,2) : ChartData.tradeTime.toString().substring(0,1);
          const mm = ChartData.tradeTime.toString().length > 5 ? ChartData.tradeTime.toString().substring(2,4) : ChartData.tradeTime.toString().substring(1,3);
          const ss = ChartData.tradeTime.toString().length > 5 ? ChartData.tradeTime.toString().substring(4,6) : ChartData.tradeTime.toString().substring(3,5);
          const dateNew = new Date(`${month}/${day}/${year} ${hh}:${mm}:${ss} UTC`)
          DataSetting(`${dateNew.getHours()}:${dateNew.getMinutes()} `, ChartData);
          dispatch(getCurMonut(ChartData.tradePrice));
      })}
      dispatch(getLoadChart(selectInfo.tiker, chartType))

    },[selectInfo])

    return(
       <CoinChart
        setChartType={setChartType}
        selectInfo={selectInfo}
        currentMount={currentMount}
        chartData={chartData}
        />
    );
}

export default ChartContainer;