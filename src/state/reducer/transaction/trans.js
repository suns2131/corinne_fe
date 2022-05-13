/* eslint-disable no-shadow */
import { createSlice } from "@reduxjs/toolkit"
import intercept from "../../../data/axios"


// 초기 state값
const initialState = {
    tikername_en : '',
    tikerList : [],
    transDetail : [],
    tikerinfo: {},
}

const { actions, reducer } = createSlice({
    name : 'tiker',
    initialState,
    reducers : {
        detailList : (state, {payload}) => {
            // eslint-disable-next-line no-param-reassign
            state.transDetail = payload
        },
        addDetail : (state, {payload}) => {
            const arrays = [...state.transDetail];
            arrays.unshift(payload);
            // eslint-disable-next-line no-param-reassign
            state.transDetail = arrays
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

export const {detailList,tikerList,infos,addDetail,Amounts} = actions;

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
    intercept.get(`/api/transaction/${tiker}/${page}`
    ).then((response) => {
        dispatch(detailList(response.data.content))
    })
}

// 매수 매도 처리 
export const postBuySell = (type,requestData) => function (dispatch) {
    intercept.post(`/api/transaction/${type}`,requestData
    ).then((response)=>{
        const newArray = {
            amount: response.data.amount,
            price: response.data.type ==="buy"? response.data.buyPrice: response.data.sellPrice,
            tradeAt: response.data.tradeAt,
            leverage: response.data.leverage,
            type: response.data.type
        }
        dispatch(addDetail(newArray));
    })
}

// 유저 자산 정보 조회 
export const getUserAmount = (tiker) => function (dispatch) {
    intercept.get(`/api/account/balance/${tiker}`
    ).then((response) => {
        dispatch(Amounts(response.data))
    })
}

export const PostServer = (url,requestData) => function (dispatch) {
intercept.post(url,requestData
).then((response) => {
})
}




export default reducer;