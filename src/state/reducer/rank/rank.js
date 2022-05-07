import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    myrank: '',
}

const { actions, reducer } = createSlice({
    name : 'Rank',
    initialState,
    reducers : {
        myrank : (state, {payload}) => {
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
        const reusltData  = response.data.content;
        console.log(reusltData);
        dispatch(myRank(reusltData))
    })
}

export default reducer;