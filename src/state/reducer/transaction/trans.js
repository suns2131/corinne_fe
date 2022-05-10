import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    tikername_en : '',
    tikerList : [],
    tikerDetail : [],
    tikerinfo: {},
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
        },
        infos: (state, {payload}) => {
            // eslint-disable-next-line no-param-reassign
            state.tikerinfo = payload
        }
    }
})

export const {tikerData,tikerList,infos} = actions;


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

// 연결되는 코인 정보 갱신 
export const SelectingTiker = (selectInfo) => function (dispatch) {
    const newSelector = {
        imageUrl: selectInfo.imageUrl, // 코인 이미지 주소
        tiker: selectInfo.tiker, // 코인 id
        tikername: selectInfo.tikername, // 코인이름
        favorite: selectInfo.favorite, // 즐겨찾기
        unit: selectInfo.unitPrice,   // 단위
        prevPrice: selectInfo.price, // 전일가
    }
    dispatch(infos(newSelector));
}


export default reducer;