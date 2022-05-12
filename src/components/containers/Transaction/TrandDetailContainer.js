import React, { useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer'
import axios from 'axios';
import { getDetail } from '../../../state/reducer/transaction/trans';
import TradeDetail from '../../presentations/transaction/tradeDetail/TradeDetail'


function TrandDetailContainer() {
    const dispatch = useDispatch();
    const BuySellData = useSelector((state) => state.trans.tikerDetail);
    const [items, setItems] = useState(BuySellData)
    const [buysellState,setBuysellState] = useState(false);
    const SelectCoin = useSelector((state) => state.trans.tikerinfo);
    const [page, setPage] = useState(1)
    const buyRef = useRef(null);
		const sellRef = useRef(null);
    const [infinitiRef,inView] = useInView();
    const [buyRequest, setBuyRequest] = React.useState({
        'leverage' : 0,
        'tradePrice' : 0,
        'buyAmount' : 0
    })
    const [sellRequest, setSellRequest] = React.useState({
      'leverage' : 0,
      'tradePrice' : 0,
      'sellAmount' : 0
    })
    
    const getitem = useCallback(async () => {
        // await axios.get('').then((response) => {
        //     setItems(prevItem => [...prevItem, response.data])
        // })
    },[page])

    // 매수 매도 처리
    const buySellClick = (type) => {
        if(type === "buy")
            console.log(buyRequest)
        else if(type === "sell")
            console.log(sellRequest)
    }

    // 매수 금액 버튼 클릭시 자동 계산함수
    const btnSet = (type, sign) => {
        if(type === "buy")
        {
					const buy = buyRef.current.value;
					switch(sign){
						case '-': 
							if(buy - 50000 > 0)
								buyRef.current.value = buy - 50000;
							else 
								buyRef.current.value = 0;
							break;

						case '+':
							buyRef.current.value = Number(buy) + 50000;
							break;

						case '0%':
							buyRef.current.value = 0;
							break;

						case '25%':
							buyRef.current.value = buy * 0.25;
							break;

						case '50%':
							buyRef.current.value = buy * 0.5;
							break;

						case '75%':
							buyRef.current.value = buy * 0.75;
							break;

						case '100%':
							buyRef.current.value = buy * 1;
							break;

						default:
							break;
					}
;       }
				else if(type === "sell")
        {
					const sell = sellRef.current.value;
					switch(sign){
						case '-': 
							if(sell - 50000 > 0)
								sellRef.current.value = sell - 50000;
							else 
								sellRef.current.value = 0;
							break;

						case '+':
							sellRef.current.value = Number(sell) + 50000;
							break;

						case '0%':
							sellRef.current.value = 0;
							break;

						case '25%':
							sellRef.current.value = sell * 0.25;
							break;

						case '50%':
							sellRef.current.value = sell * 0.5;
							break;

						case '75%':
							sellRef.current.value = sell * 0.75;
							break;

						case '100%':
							sellRef.current.value = sell * 1;
							break;

						default:
							break;
					}
;       }
    }


    // getitem 변경될때마다 실행.
    React.useEffect(() => {
        getitem()
    },[getitem])

    // 사용자가 마지막 요소 조회시 page + 1
    React.useEffect(() => {
        setPage(prevPage => prevPage + 1);
    },[inView])

    // info 변경될때마다 deatil 갱신
    React.useEffect(() => {
        dispatch(getDetail(SelectCoin.tiker, page))
    },[SelectCoin])

    // 초기 페이지 로드시 거래내역 호출
    React.useEffect(() => {
        dispatch(getDetail(SelectCoin.tiker, page))
    },[])


    return (
        <TradeDetail 
            infinitiRef={infinitiRef}
            list={items}
            buysellState={buysellState}
            setBuysellState={setBuysellState}
						buyRequest={buyRequest}
            setBuyRequest={setBuyRequest}
						sellRequest={sellRequest}
            setSellRequest={setSellRequest}
            buySellClick={buySellClick}
						buyRef={buyRef}
						sellRef={sellRef}
            btnSet={btnSet}
            />
        
    );
}

export default TrandDetailContainer