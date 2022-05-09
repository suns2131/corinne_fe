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
        }
    }
})
export const {myRank} = actions;

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
export const getTop3Rank = () => function(dispatch){
     intercept.get('/api/rank/top3'
    ).then((response) => {
        const reusltData  = response.data.content;
        console.log(reusltData);
        dispatch(myRank(reusltData))
    })
}

// 유저랭킹리스트
export const getRealRank = (Page) => function(dispatch){
    console.log(`/api/rank/${Page}`)
    intercept.get(`/api/rank/${Page}`
    ).then((response) => {
        const reusltData  = response.data;
        console.log(reusltData);
        dispatch(myRank(reusltData))
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