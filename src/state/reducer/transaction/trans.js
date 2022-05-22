/* eslint-disable no-shadow */
import { createSlice } from '@reduxjs/toolkit';
import intercept from '../../../data/axios';
import { getCurMonut } from './chart';
import { postBookmark } from './thunk';

// 초기 state값
const initialState = {
  tikername_en: '',
  tikerList: [],
  transDetail: [],
  tikerinfo: {
    favorite: false, // 즐겨찾기
    imageUrl: '/icons/icon_btc.png', // 코인 이미지 주소
    prevPrice: 0, // 전일가
    tiker: 'KRW-BTC', // 코인 id
    tikername: '비트코인', // 코인이름
    unit: 'BTC', // 단위
  },
  userAmount: {},
  buyPoint: 0, // 코인별 매수 가능금액
  sellPoint: 0, // 코인별 매도 가능금액
};

const { actions, reducer } = createSlice({
  name: 'tiker',
  initialState,
  reducers: {
    detailList: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.transDetail = payload;
    },
    addDetail: (state, { payload }) => {
      const arrays = [...state.transDetail];
      arrays.unshift(payload);
      // eslint-disable-next-line no-param-reassign
      state.transDetail = arrays;
      // eslint-disable-next-line no-param-reassign
      state.buyPoint = payload.buyPoint;
      // eslint-disable-next-line no-param-reassign
      state.sellPoint = payload.sellPoint;
    },
    tikerList: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.tikerList = payload;
    },
    infos: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.tikerinfo = payload;
    },
    Amounts: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.userAmount = payload;
      // eslint-disable-next-line no-param-reassign
      state.buyPoint = payload.accountBalance;
    },
    updateSell: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.sellPoint = payload;
    },
    updateFavorite: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.tikerinfo.favorite = payload;
    },
  },
  extraReducers: (bulider) => {
    bulider.addCase(postBookmark.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.tikerinfo = {
        ...state.tikerinfo,
        favorite: !state.tikerinfo.favorite,
      };
    });
  },
});

export const { detailList, tikerList, infos, addDetail, Amounts, updateSell, updateFavorite } =
  actions;

// 코인 정보리스트
export const getTikerList = () =>
  function (dispatch) {
    intercept
      .get(
        '/api/price/rank',
        // axios.get('/api/price/rank'
      )
      .then((response) => {
        const reusltData = response.data;
        const newArray = reusltData.map((el) => {
          const newElemnt = {
            favorite: el.favorite,
            src: `/icons/icon_${el.unit.toLowerCase()}.png`,
            alt: el.unit,
            name: el.tikername,
            tiker: el.tiker,
            upRate: el.fluctuationRate,
            price: el.tradePrice,
            unitPrice: el.unit,
          };
          return newElemnt;
        });
        // eslint-disable-next-line no-use-before-define
        dispatch(tikerList(newArray));
      });
  };

// 연결되는 코인 정보 갱신
export const SelectingTiker = (selectInfo) =>
  function (dispatch) {
    const newSelector = {
      imageUrl: selectInfo.src, // 코인 이미지 주소
      tiker: selectInfo.tiker, // 코인 id
      tikername: selectInfo.name, // 코인이름
      favorite: selectInfo.favorite, // 즐겨찾기
      unit: selectInfo.unitPrice, // 단위
      prevPrice: selectInfo.price, // 전일가
    };
    dispatch(infos(newSelector));
  };

// 거래내역 조회
export const getDetail = (tiker, page) =>
  function (dispatch) {
    console.log(`detailtiker: ${tiker}`);
    if (tiker !== '') {
      console.log(`detailtiker2: ${tiker}`);
      intercept.get(`/api/transaction/${tiker}/${page}`).then((response) => {
        dispatch(detailList(response.data.content));
      });
    }
  };

// 매수 매도 처리
export const postBuySell = (type, requestData) =>
  function (dispatch) {
    console.log(requestData);
    intercept.post(`/api/transaction/${type}`, requestData).then((response) => {
      console.log(response.data);
      const newArray = {
        amount: response.data.amount,
        price: response.data.type === 'buy' ? response.data.buyPrice : response.data.sellPrice,
        tradeAt: response.data.tradeAt,
        leverage: response.data.leverage,
        type: response.data.type,
        buyPoint: response.data.accountBalance,
        sellPoint: response.data?.leftover !== undefined ? response.data?.leftover : 0,
      };
      dispatch(addDetail(newArray));
    });
  };

// 유저 자산 정보 조회
export const getUserAmount = (tiker) =>
  function (dispatch) {
    intercept.get(`/api/account/balance/${tiker}`).then((response) => {
      console.log(response.data);
      dispatch(Amounts(response.data));
    });
  };

export const PostServer = (url, requestData) =>
  function (dispatch) {
    intercept.post(url, requestData).then((response) => {});
  };

export default reducer;
