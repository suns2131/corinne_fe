import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    tikername_en : '',
    tikerList : [],
    tikerDetail : [],
}

export const getServer = (url,requestData) => function (dispatch, getState){
        intercept.get(url,requestData
        ).then((response) => {
            const reusltData  = response.data.content;
            // eslint-disable-next-line no-use-before-define
            dispatch(tikerData(reusltData)); 
        })
    }

export const getTikerList = () => function (dispatch){

      intercept.get('/api/price/rank'
        ).then((response) => {
            const reusltData  = response.data;
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
               }
               return newElemnt
            })
            // eslint-disable-next-line no-use-before-define
            dispatch(tikerList(newArray)); 
        })
}


export const PostServer = (url,requestData) => function (dispatch) {
    console.log(requestData)
    intercept.post(url,requestData
    ).then((response) => {
        console.log(response);
    })
}



const { actions, reducer } = createSlice({
    name : 'tiker',
    initialState,
    reducers : {
        tikerData : (state, {payload}) => {
                // eslint-disable-next-line no-param-reassign
                state.tikerDetail = payload
        },
        tikerList : (state, {payload}) => {
            // eslint-disable-next-line no-param-reassign
            state.tikerList = payload
    }
    }
})

export const {tikerData,tikerList} = actions;

export default reducer;