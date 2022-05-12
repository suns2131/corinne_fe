import axios from "axios";
import React from "react";
import intercept from "../../shared/intercept";

// const [coinDetail,setCoinDetail] = React.useState(null);

// const transCoinDetail = (name) => {
//     const datas = '';
//     intercept.get(`/api/transaction/${name}/1`
//     ).then((response) => {setCoinDetail(response.data)}).catch((error) => error.data)
//     return datas;
// }

// 코인 리스트 
const coinList = () => {
    const list = [{
        favorite : true,
        src : '/icons/icon_btc.png',
        alt : 'btc',
        name : 'BTC',
        upRate : '+0.45%',
        price : '48,936,000',
        unitPrice : 'BTC',
      },
      {
        favorite : true,
        src : '/icons/icon_sol.png',
        alt : 'sol',
        name : 'SOL',
        upRate : '-0.09%',
        price : '7,000,000',
        unitPrice : 'SOL',
      },
      {
        favorite : false,
        src : '/icons/icon_eth.png',
        alt : 'eth',
        name : 'ETH',
        upRate : '-0.08%',
        price : '3,588,000',
        unitPrice : 'ETH',
      },
      {
        favorite : false,
        src : '/icons/icon_xrp.png',
        alt : 'xrp',
        name : 'XRP',
        upRate : '+0.05%',
        price : '781.2',
        unitPrice : 'XRP',
      },
      {
        favorite : true,
        src : '/icons/icon_ada.png',
        alt : 'ada',
        name : 'ADA',
        upRate : '+0.30%',
        price : '998',
        unitPrice : 'ADA',
      },
      {
        favorite : false,
        src : '/icons/icon_doge.png',
        alt : 'doge',
        name : 'DOGE',
        upRate : '-0.84%',
        price : '166.1',
        unitPrice : 'DOGE',
      },
      {
        favorite : false,
        src : '/icons/icon_avax.png',
        alt : 'avax',
        name : 'AVAX',
        upRate : '0.00%',
        price : '76,700',
        unitPrice : 'AVAX',
      },
      {
        favorite : false,
        src : '/icons/icon_dot.png',
        alt : 'dot',
        name : 'DOT',
        upRate : '+1.26%',
        price : '19,270',
        unitPrice : 'DOT',
      },
      {
        favorite : false,
        src : '/icons/icon_matic.png',
        alt : 'matic',
        name : 'MATIC',
        upRate : '0.00%',
        price : '1,388',
        unitPrice : 'MATIC',
      },
    ]
    return list;
};

// 코인 검색 처리
const searchCoin = (inputData) => {

}

const transprops = {
    coinList,
    searchCoin,
    // transCoinDetail,
    // coinDetail,
};

export default transprops;