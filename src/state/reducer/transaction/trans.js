/* eslint-disable no-shadow */
import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import intercept from "../../../data/intercept"

// 초기 state값
const initialState = {
    tikername_en : '',
    tikerList : [],
    TransDetail : [],
    tikerinfo: {},
}

const { actions, reducer } = createSlice({
    name : 'tiker',
    initialState,
    reducers : {
        DetailList : (state, {payload}) => {
            // eslint-disable-next-line no-param-reassign
            state.tikerDetail = payload
        },
        addDetail : (state, {payload}) => {
            const arrays = [...state.tikerDetail].unshift(payload);
            // eslint-disable-next-line no-param-reassign
            state.tikerDetail = arrays
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

export const {DetailList,tikerList,infos,addDetail} = actions;


// 코인 정보리스트
export const getTikerList = () => function (dispatch){
     intercept.get('/api/price/rank'
    // axios.get('/api/price/rank'
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

// 연결되는 코인 정보 갱신 
export const SelectingTiker = (selectInfo) => function (dispatch) {
    const newSelector = {
        imageUrl: selectInfo.src, // 코인 이미지 주소
        tiker: selectInfo.tiker, // 코인 id
        tikername: selectInfo.name, // 코인이름
        favorite: selectInfo.favorite, // 즐겨찾기
        unit: selectInfo.unitPrice,   // 단위
        prevPrice: selectInfo.price, // 전일가
    }
    dispatch(infos(newSelector));
}

// 거래내역 조회
export const getDetail = (tiker,page) => function (dispatch) {
    console.log(tiker,page);
    intercept.get(`/api/transaction/${tiker}/${page}`
    ).then((response) => {
        console.log(response.data)
        // dispatch(DetailList(response.data))
    })
}

// 매수 매도 처리 
export const postBuySell = (type,requestData) => function (dispatch) {
    intercept.post(`/api/transaction/${type}`,requestData
    ).then((response)=>{
        console.log(response.data)
        dispatch(addDetail(response.data));
    })
}

export const PostServer = (url,requestData) => function (dispatch) {
console.log(requestData)
intercept.post(url,requestData
).then((response) => {
    console.log(response);
})
}




export default reducer;