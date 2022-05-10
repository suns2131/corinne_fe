import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    myrank: '',
    top3Rank: [],
    realRank: [],
    followRank: [],
}

const { actions, reducer } = createSlice({
    name : 'Rank',
    initialState,
    reducers : {
        myRank : (state, {payload}) => {
          // eslint-disable-next-line no-param-reassign
          state.myrank = payload
        },
        topRank: (state, {payload}) => {
          // eslint-disable-next-line no-param-reassign
          state.top3Rank = payload;
        },
        rankList: (state, {payload}) => {
          // eslint-disable-next-line no-param-reassign
          state.realRank = payload;
        },
    }
})
export const {myRank,topRank,rankList} = actions;

// 나의 랭크
export const getMyRank = (url,requestData) => function (dispatch){
    console.log(url);
     intercept.get(url,requestData
    ).then((response) => {
        const reusltData  = response.data.myRank;
        console.log(reusltData);
        dispatch(myRank(reusltData))
    })
}

// top3 랭크 
export const getTop3Rank = () => function (dispatch){
     intercept.get('/api/rank/top3'
    ).then((response) => {
        const reusltData  = response.data.rank;
        const newTop3 = [{
            imageUrl: reusltData[1].imageUrl,
            userId: reusltData[1].userId,
            nickname: reusltData[1].nickname,
            totalBalance: reusltData[1].totalBalance,
            fluctuationRate: reusltData[1].fluctuationRate,
          },
          {
            imageUrl: reusltData[0].imageUrl,
            userId: reusltData[0].userId,
            nickname: reusltData[0].nickname,
            totalBalance: reusltData[0].totalBalance,
            fluctuationRate: reusltData[0].fluctuationRate,
          },
          {
            imageUrl: reusltData[2]?.imageUrl === undefined? null : reusltData[2].imageUrl,
            userId: reusltData[2]?.userId === undefined? '' :  reusltData[2]?.userId,
            nickname: reusltData[2]?.nickname === undefined? '' : reusltData[2]?.nickname,
            totalBalance: reusltData[2]?.totalBalance === undefined? 0 : reusltData[2]?.totalBalance,
            fluctuationRate: reusltData[2]?.fluctuationRate === undefined? 0 : reusltData[2]?.fluctuationRate,
          }
        ]
        dispatch(topRank(newTop3))
    })
}

// 유저랭킹리스트
export const getRealRank = (Page) => function(dispatch){
    console.log(`/api/rank/${Page}`)
    intercept.get(`/api/rank/${Page}`
    ).then((response) => {
        const reusltData  = response.data;
        console.log(reusltData);
        dispatch(rankList(reusltData))
    })
}

// 팔로워 랭킹리스트 
export const getfollwerRank = () => function (dispatch){
    intercept.get(`/api/rank/`
    ).then((response) => {
        const reusltData  = response.data.content;
        console.log(reusltData);
        dispatch(myRank(reusltData))
    })
}

export default reducer;