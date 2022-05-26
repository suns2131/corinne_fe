/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketClient from '../../../share/socket';
import CoinChart from '../../presentations/transaction/chart/CoinChart';
import { getLoadChart, addChart, getCurMonut } from '../../../state/reducer/transaction/chart';
import {
  deleteBookmark,
  getbuyCount,
  postBookmark,
} from '../../../state/reducer/transaction/thunk';
import { getTikerList } from '../../../state/reducer/transaction/trans';

function ChartContainer() {
  const dispatch = useDispatch();
  const selectInfo = useSelector((state) => state.trans.tikerinfo);
  const chkConneted = useSelector((state) => state.trans.socketConnected);
  const chartData = useSelector((state) => state.chart.getChart);
  const currentMount = useSelector((state) => state.chart.getCurrentMonut);
  const customer = useSelector((state) => state.chart.customer);
  // const [chartType, setChartType] = useState(false); // false 분봉 / true 일봉
  const connectRef = useRef(null);
  const [btnStat, setBtnStat] = useState({
    stat: false,
    today: 'bg-[#ffffff]',
    minute: 'bg-[#eeeeee]',
  });
  const subNum = useRef(1); // 구독취소할 subscribe id 저장변수

  // 차트 타입 변경될때마다 Chart state초기화
  React.useEffect(() => {
    if (selectInfo?.tiker !== undefined) {
      if (selectInfo.tiker !== '') {
        dispatch(getLoadChart(selectInfo.tiker, btnStat.stat));
      }
    }
  }, [btnStat.stat, dispatch, selectInfo.tiker]);

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
          volume: {
            x: chartData.x,
            y: realData.tradeVolume,
          },
        };
        // dispatch(updateChart(updateData))
      } else {
        const inputData = {
          x: date.trim(),
          y: [realData.tradePrice, realData.tradePrice, realData.tradePrice, realData.tradePrice],
          volume: {
            x: date.trim(),
            y: realData.tradeVolume,
          },
        };
        dispatch(addChart(inputData));
      }
    } else {
      const inputData = {
        x: date.trim(),
        y: [realData.tradePrice, realData.tradePrice, realData.tradePrice, realData.tradePrice],
        volume: {
          x: date.trim(),
          y: realData.tradeVolume,
        },
      };
      dispatch(addChart(inputData));
    }
  };

  const checkConnect = () => {
    connectRef.current = true;
    subNum.current = socketClient.subscribe(`/sub/topic/${selectInfo.tiker}`, (message) => {
      //  = message.headers.subscription;
      const ChartData = JSON.parse(message.body);
      const year = ChartData.tradeDate.toString().substring(0, 4);
      const month = ChartData.tradeDate.toString().substring(4, 6);
      const day = ChartData.tradeDate.toString().substring(6, 8);
      const hh =
        ChartData.tradeTime.toString().length > 5
          ? ChartData.tradeTime.toString().substring(0, 2)
          : ChartData.tradeTime.toString().substring(0, 1);
      const mm =
        ChartData.tradeTime.toString().length > 5
          ? ChartData.tradeTime.toString().substring(2, 4)
          : ChartData.tradeTime.toString().substring(1, 3);
      const ss =
        ChartData.tradeTime.toString().length > 5
          ? ChartData.tradeTime.toString().substring(4, 6)
          : ChartData.tradeTime.toString().substring(3, 5);
      const dateNew = new Date(`${month}/${day}/${year} ${hh}:${mm}:${ss} UTC`);
      const newHour =
        dateNew.getHours().toString().length > 1 ? dateNew.getHours() : `0${dateNew.getHours()}`;
      const newMinute =
        dateNew.getMinutes().toString().length > 1
          ? dateNew.getMinutes()
          : `0${dateNew.getMinutes()}`;
      DataSetting(`${newHour}:${newMinute} `, ChartData);

      const newCurrentData = {
        tradePrice: ChartData.tradePrice,
        highPrice: ChartData.highPrice,
        lowPrice: ChartData.lowPrice,
        prevClosingPrice: ChartData.prevClosingPrice,
        signedChangePrice: ChartData.signedChangePrice,
        signedChangeRate: Math.round((ChartData.signedChangeRate + Number.EPSILON) * 100) / 100,
        tradeVolume: ChartData.tradeVolume,
      };
      dispatch(getCurMonut(newCurrentData));
      dispatch(getTikerList());
      if (selectInfo?.tiker !== undefined) dispatch(getbuyCount(selectInfo.tiker));
    }).id;
  };

  // info 변경될때마다 API 갱신 웹소켓 연결 체크
  React.useEffect(() => {
    dispatch(getLoadChart(selectInfo.tiker, btnStat.stat));
    if (selectInfo?.tiker !== undefined && socketClient.connected) {
      socketClient.unsubscribe(subNum.current);
      checkConnect();
    }
  }, [selectInfo]);

  React.useEffect(() => {
    dispatch(getLoadChart(selectInfo.tiker, btnStat.stat));
    if (selectInfo?.tiker !== undefined && chkConneted) {
      if (connectRef.current === null) {
        checkConnect();
      }
    }
  }, [chkConneted]);

  const bookMarkClick = (tiker, type) => {
    if (type) {
      dispatch(deleteBookmark(tiker));
    } else {
      dispatch(postBookmark(tiker));
    }
  };

  return (
    <div>
      <CoinChart
        selectInfo={selectInfo}
        currentMount={currentMount}
        chartData={chartData}
        VolumeData={chartData.volume}
        bookMarkClick={bookMarkClick}
        customer={customer}
        btnStat={btnStat}
        setBtnStat={setBtnStat}
      />
    </div>
  );
}

export default ChartContainer;
