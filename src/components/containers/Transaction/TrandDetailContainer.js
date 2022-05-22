import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import {
  getDetail,
  getUserAmount,
  postBuySell,
  updateSell,
} from '../../../state/reducer/transaction/trans';
import TradeDetail from '../../presentations/transaction/tradeDetail/TradeDetail';
import intercept from '../../../data/intercept';

function TrandDetailContainer() {
  const dispatch = useDispatch();
  const BuySellData = useSelector((state) => state.trans.transDetail);
  const [item, setItem] = useState(BuySellData);
  const [buysellState, setBuysellState] = useState(true);
  const SelectCoin = useSelector((state) => state.trans.tikerinfo);
  const userAmount = useSelector((state) => state.trans.userAmount);
  const buyPoint = useSelector((state) => state.trans.buyPoint);
  const sellPoint = useSelector((state) => state.trans.sellPoint);
  const currentMount = useSelector((state) => state.chart.getCurrentMonut);
  const detailPage = useSelector((state) => state.trans.detailTotalpage);

  const [page, setPage] = useState(1);
  const [sellPrice, setSellPrice] = useState(0);
  const buyRef = useRef(null);
  const sellRef = useRef(null);
  const [infinitiRef, inView] = useInView();
  const [buyRequest, setBuyRequest] = React.useState({
    leverage: 100,
    tradePrice: 570,
    buyAmount: 1000000,
  });
  const [sellRequest, setSellRequest] = React.useState({
    leverage: 1,
    tradePrice: 0,
    sellAmount: 0,
  });

  React.useEffect(() => {
    dispatch(getDetail(SelectCoin.tiker, page));
  }, [dispatch, page]);

  // 유저 자산 정보 조회
  React.useEffect(() => {
    dispatch(getUserAmount());
  }, []);

  const handleChange = (event, type, newValue) => {
    if (type === 'buy') {
      setBuyRequest({
        ...buyRequest,
        leverage: newValue,
      });
    } else if (type === 'sell') {
      setSellRequest({
        ...sellRequest,
        leverage: newValue,
      });
    }
  };

  // 매수 매도 처리
  const buySellClick = (type) => {
    if (type === 'buy') {
      if (SelectCoin?.tiker !== undefined) {
        const newRequest = {
          ...buyRequest,
          tradePrice: currentMount.tradePrice,
          buyAmount: Number(buyRef.current.value),
          tiker: SelectCoin.tiker,
        };
        dispatch(postBuySell('buy', newRequest));
      }
    } else if (type === 'sell') {
      // 레버리지값으로 coins에서 필터링한 buyprice 값으로 계산하여 sellAmount 값 계산
      const newRequest = {
        ...sellRequest,
        tradePrice: currentMount.tradePrice,
        sellAmount: Number(sellRef.current.value),
        tiker: SelectCoin.tiker,
      };
      dispatch(postBuySell('sell', newRequest));
    }
  };

  // 매수 금액 버튼 클릭시 자동 계산함수
  const btnSet = (type, sign) => {
    if (type === 'buy') {
      const buy = buyRef.current.value;
      const buyPercent = userAmount?.accountBalance !== undefined ? userAmount.accountBalance : 0;
      switch (sign) {
        case '-':
          if (buy - 50000 > 0) buyRef.current.value = buy - 50000;
          else buyRef.current.value = 0;
          break;

        case '+':
          buyRef.current.value = Number(buy) + 50000;
          break;

        case '0%':
          buyRef.current.value = 0;
          break;

        case '25%':
          buyRef.current.value = Math.ceil(buyPercent * 0.25);
          break;

        case '50%':
          buyRef.current.value = Math.ceil(buyPercent * 0.5);
          break;

        case '75%':
          buyRef.current.value = Math.ceil(buyPercent * 0.75);
          break;

        case '100%':
          buyRef.current.value = Math.ceil(buyPercent * 1);
          break;

        default:
          break;
      }
    } else if (type === 'sell') {
      const sell = sellRef.current.value;
      const sellPercent = sellPoint;
      console.log(`sells: ${sell}`);
      switch (sign) {
        case '-':
          if (sell - 50000 > 0) sellRef.current.value = sell - 50000;
          else sellRef.current.value = 0;
          break;

        case '+':
          sellRef.current.value = Number(sell) + 50000;
          break;

        case '0%':
          sellRef.current.value = 0;
          break;

        case '25%':
          sellRef.current.value = Math.ceil(sellPercent * 0.25);
          break;

        case '50%':
          sellRef.current.value = Math.ceil(sellPercent * 0.5);
          break;

        case '75%':
          sellRef.current.value = Math.ceil(sellPercent * 0.75);
          break;

        case '100%':
          sellRef.current.value = Math.ceil(sellPercent * 1);
          break;

        default:
          break;
      }
    }
  };

  // 사용자가 마지막 요소 조회시 page + 1
  React.useEffect(() => {
    if (inView && SelectCoin?.tiker !== undefined && detailPage > page) setPage(page + 1);
  }, [inView]);

  // info 변경될때마다 deatil 갱신
  React.useEffect(() => {
    if (SelectCoin?.tiker !== undefined) {
      setPage(1);
      dispatch(getDetail(SelectCoin.tiker, page));
      dispatch(getUserAmount(SelectCoin.tiker));
      dispatch(updateSell(0));
    }
  }, [SelectCoin]);

  React.useEffect(() => {
    setItem(BuySellData);
  }, [BuySellData]);

  const changebuysell = (type) => {
    if (type === 'buy') setBuysellState(true);
    else setBuysellState(false);

    // 매수 매도 금액 갱신 추가

    // page 정보 1로 갱신
  };

  return (
    <TradeDetail
      infinitiRef={infinitiRef}
      items={item}
      buysellState={buysellState}
      buyRequest={buyRequest}
      setBuyRequest={setBuyRequest}
      changebuysell={changebuysell}
      sellRequest={sellRequest}
      setSellRequest={setSellRequest}
      setBuysellState={setBuysellState}
      buySellClick={buySellClick}
      buyRef={buyRef}
      sellRef={sellRef}
      btnSet={btnSet}
      userAmount={userAmount}
      handleChange={handleChange}
      currentMount={currentMount}
      setSellPrice={setSellPrice}
      sellPrice={sellPrice}
      buyPoint={buyPoint}
      sellPoint={sellPoint}
      SelectCoin={SelectCoin}
    />
  );
}

export default TrandDetailContainer;
