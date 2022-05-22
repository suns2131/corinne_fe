import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../../data/axios';
import intercept from '../../../data/intercept';
import {
  getRealRank,
  getFollowlist,
  getPrevRank,
  getUserAlarm,
  getUserQuest,
  getMatch,
  getTargetInfo,
} from './thunk';

// 초기 state값
const initialState = {
  myrank: '',
  userInfo: {},
  top3Rank: [],
  realRank: [],
  realRankTotalPage: 0,
  followRank: [],
  followRankTotalPage: 0,
  prevRank: [],
  prevRankTotalPage: 0,
  matchup: {},
  userAlarm: [],
  userQuest: [],
  targetInfo: {},
};

const { actions, reducer } = createSlice({
  name: 'Rank',
  initialState,
  reducers: {
    myRank: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.myrank = payload;
    },
    topRank: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.top3Rank = payload;
    },
    rankList: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.realRank = payload;
    },
    addrank: (state, { payload }) => {
      const array = [...state.realRank].concat(payload);
      // eslint-disable-next-line no-param-reassign
      state.realRank = array;
    },
    infos: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.userInfo = payload;
    },
    matchup: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.matchup = payload;
    },
    followList: (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.followRank = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRealRank.fulfilled, (state, { payload }) => ({
      ...state,
      realRank: payload.rank,
      realRankTotalPage: payload.totalPage,
    }));

    builder.addCase(getFollowlist.fulfilled, (state, { payload }) => {
      console.log(payload);
      // eslint-disable-next-line no-param-reassign
      state.followRank = payload;
    });

    builder.addCase(getPrevRank.fulfilled, (state, { payload }) => {
      // eslint-disable-next-line no-param-reassign
      state.prevRank = payload;
    });

    builder.addCase(getUserAlarm.fulfilled, (state, { payload }) => ({
      ...state,
      userAlarm: payload,
    }));

    builder.addCase(getUserQuest.fulfilled, (state, { payload }) => ({
      ...state,
      userQuest: payload,
    }));

    builder.addCase(getMatch.fulfilled, (state, { payload }) => ({
      ...state,
      matchup: payload,
    }));

    builder.addCase(getTargetInfo.fulfilled, (state, { payload }) => ({
      ...state,
      targetInfo: payload,
    }));
  },
});
export const { myRank, topRank, rankList, infos, matchup, followList, addrank } = actions;

// 나의 랭크
export const getMyRank = (url, requestData) =>
  function (dispatch) {
    console.log(url);
    intercept.get(url, requestData).then((response) => {
      const reusltData = response.data.myRank;
      console.log(reusltData);
      dispatch(myRank(reusltData));
    });
  };

// top3 랭크
export const getTop3Rank = () =>
  function (dispatch) {
    intercept.get('/api/rank/top3').then((response) => {
      const reusltData = response.data.rank;
      const newTop3 = [
        {
          imageUrl: reusltData[1]?.imageUrl === undefined ? null : reusltData[1].imageUrl,
          userId: reusltData[1]?.userId === undefined ? '' : reusltData[1]?.userId,
          nickname: reusltData[1]?.nickname === undefined ? '' : reusltData[1]?.nickname,
          totalBalance: Number(
            reusltData[1]?.totalBalance === undefined ? 0 : reusltData[1]?.totalBalance,
          ),
          fluctuationRate:
            reusltData[1]?.fluctuationRate === undefined ? 0 : reusltData[1]?.fluctuationRate,
        },
        {
          imageUrl: reusltData[0]?.imageUrl === undefined ? null : reusltData[0].imageUrl,
          userId: reusltData[0]?.userId === undefined ? '' : reusltData[0]?.userId,
          nickname: reusltData[0]?.nickname === undefined ? '' : reusltData[0]?.nickname,
          totalBalance: Number(
            reusltData[0]?.totalBalance === undefined ? 0 : reusltData[0]?.totalBalance,
          ),
          fluctuationRate:
            reusltData[0]?.fluctuationRate === undefined ? 0 : reusltData[0]?.fluctuationRate,
        },
        {
          imageUrl: reusltData[2]?.imageUrl === undefined ? null : reusltData[2].imageUrl,
          userId: reusltData[2]?.userId === undefined ? '' : reusltData[2]?.userId,
          nickname: reusltData[2]?.nickname === undefined ? '' : reusltData[2]?.nickname,
          totalBalance: Number(
            reusltData[2]?.totalBalance === undefined ? 0 : reusltData[2]?.totalBalance,
          ),
          fluctuationRate:
            reusltData[2]?.fluctuationRate === undefined ? 0 : reusltData[2]?.fluctuationRate,
        },
      ];
      dispatch(topRank(newTop3));
    });
  };

// 유저인포
export const getUserInfo = () =>
  function (dispatch) {
    axios.get('/api/rank/userinfo').then((response) => {
      dispatch(infos(response.data));
    });
  };

// 유저 1:1 매치업
export const getMatchUp = () =>
  function (dispatch) {
    axios.get('/api/rank/matchup').then((response) => {
      dispatch(matchup(response.data));
    });
  };

export const postFollow = (userId, followStat) =>
  function (dispatch) {
    if (followStat) {
      axiosInstance.delete(`/api/follow/${userId}`).then(() => {
        const page = 1;
        dispatch(getRealRank({ page }));
        dispatch(getFollowlist());
      });
    } else {
      axiosInstance.post(`/api/follow/${userId}`).then(() => {
        const page = 1;
        dispatch(getRealRank({ page }));
        dispatch(getFollowlist());
      });
    }
  };

export default reducer;
