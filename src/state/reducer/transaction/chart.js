/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';
import intercept from '../../../data/axios';
import { getbuyCount } from './thunk';

// 초기 state값
const initialState = {
  getCurrentMonut: {}, // 현재가
  selectChartInfo: {}, // 선택한 코인 정보
  getChart: [], // 선택한 코인 차트 정보(시가, 고가, 저가 , 종가)
  prevHighPrice: 0, // 전일 고가
  prevLowPrice: 0, // 전일 저가
  volume: 0, // 거래대금
  customer: 0, // 매수 회원 카운트
};

const { actions, reducer } = createSlice({
  name: 'chatting',
  initialState,
  reducers: {
    addChart: (state, { payload }) => {
      const prevArray = current(state.getChart);
      if (prevArray.length > 0) {
        if (payload.x !== prevArray[prevArray.length - 1].x) {
          const array = [...state.getChart];
          array.shift();
          const array1 = [...array, payload];
          // eslint-disable-next-line no-param-reassign
          state.getChart = array1;
        } else {
          const array = [...state.getChart];
          const lastdata = prevArray[prevArray.length - 1];
          const newPayload = {
            x: lastdata.x,
            y: [
              lastdata.y[0],
              payload.y[1] > lastdata.y[1] ? payload.y[1] : lastdata.y[1],
              payload.y[2] < lastdata.y[2] ? payload.y[2] : lastdata.y[2],
              payload.y[3],
            ],
            volume: {
              x: lastdata.x,
              y: payload.volume.y,
            },
          };
          const index = array.findIndex((el) => el.x === payload.x);
          array.splice(index, 1, newPayload);
          // eslint-disable-next-line no-param-reassign
          state.getChart = array;
        }
      } else {
        const array = [...state.getChart];
        array.shift();
        const array1 = [...array, payload];
        // eslint-disable-next-line no-param-reassign
        state.getChart = array1;
      }
    },
    getChart: (state, { payload }) => {
      state.getChart = payload;
    },
    getCurMonut: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.getCurrentMonut = payload;
    },
    selectChart: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.selectChartInfo = payload;
    },
  },
  extraReducers: (bulider) => {
    bulider.addCase(getbuyCount.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.customer = payload.buyCount;
    });

    // bulider.addCase(getTradePrice.fulfilled, (state, { payload }) => {
    //   // eslint-disable-next-line no-param-reassign
    //   state.getCurrentMonut = payload.buyCount;
    // });
  },
});

export const { addChart, updateChart, getCurMonut, getChart } = actions;

export const getTradePrice = (tiker) =>
  function (dispatch) {
    intercept.get(`/api/price/tradeprice/${tiker}`).then((res) => {
      const TradeData = res.data;
      const newCurrentData = {
        tradePrice: TradeData.tradePrice,
        highPrice: TradeData.highPrice,
        lowPrice: TradeData.lowPrice,
        prevClosingPrice: TradeData.prevClosingPrice,
        signedChangePrice: TradeData.signedChangePrice,
        signedChangeRate: Math.round((TradeData.signedChangeRate + Number.EPSILON) * 100) / 100,
        tradeVolume: TradeData.tradeVolume,
      };
      dispatch(getCurMonut(newCurrentData));
    });
  };

// 차트 정보 조회
export const getLoadChart = (tiker, chartType) =>
  function (dispatch) {
    if (tiker !== '') {
      intercept
        .get(chartType ? `/api/price/date/${tiker}` : `/api/price/minute/${tiker}`)
        .then((response) => {
          const arrays = response.data.filter((el, idx) => idx > response.data.length - 31);
          const newChart = arrays.map((el) => {
            const chartdt = {
              x: el?.tradeTime !== undefined ? el.tradeTime : el.tradeDate,
              y: [el.startPrice, el.highPrice, el.lowPrice, el.endPrice],
              volume: {
                x: el?.tradeTime !== undefined ? el.tradeTime : el.tradeDate,
                y: 0,
              },
            };
            return chartdt;
          });
          dispatch(getChart(newChart));
          dispatch(getTradePrice(tiker));
        });
    }
  };

export default reducer;
