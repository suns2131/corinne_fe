import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getUserAmount, updateSell } from '../../../../state/reducer/transaction/trans';
import styles from './TradeDetail.module.css';

function TransProgressbar({
  buyRequest,
  setBuyRequest,
  sellRequest,
  setSellRequest,
  type,
  userAmount,
  setSellPrice,
  SelectCoin,
  buysellState,
}) {
  const dispatch = useDispatch();
  const buyMarker = [{ value: 1 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];
  const sellMarker = [{ value: 1 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];
  const currentMount = useSelector((state) => state.chart.getCurrentMonut.tradePrice);
  console.log(currentMount);
  const sliderRef = useRef(null);
  const [buyLeverage, setBuyLeverage] = React.useState(1);
  const [sellLeverage, setSellLeverage] = React.useState(1);
  const sliderTheme = createTheme({
    palette: {
      customPurple: {
        main: '#6800BA',
      },
      customOrange: {
        main: '#FF9E0D',
      },
    },
  });

  useEffect(() => {
    if (userAmount?.coins !== undefined) {
      const sell = userAmount.coins.filter((el) => el.leverage === Number(sellLeverage));
      if (sell.length > 0) {
        const bPrice = sell[0].buyPrice;
        const account = sell[0].amount;
        // console.log(currentMount);
        const yieldSell = ((currentMount - bPrice) / bPrice) * account;
        const sellmonut = Math.floor(yieldSell * sellLeverage + account);
        dispatch(updateSell(sellmonut));
      }
    }
  }, [currentMount]);

  useEffect(() => {
    setBuyLeverage(1);
    setSellLeverage(1);
  }, [buysellState]);

  const handleChange = (event, newValue) => {
    setBuyLeverage(newValue);
    dispatch(getUserAmount(SelectCoin.tiker));
    if (type === 'buy') {
      setBuyRequest({
        ...buyRequest,
        leverage: newValue,
      });
    }
  };

  const sellHandleChange = (event, newValue) => {
    setSellLeverage(newValue);
    const sell = userAmount.coins.filter((el) => el.leverage === Number(newValue));
    // console.log(userAmount);
    // console.log(newValue);
    // console.log(`sell: ${sell}`);
    if (sell.length > 0) {
      const bPrice = sell[0].buyPrice;
      const account = sell[0].amount;
      const yieldSell = ((currentMount - bPrice) / bPrice) * account;
      // console.log(yieldSell);
      const sellmonut = Math.floor(yieldSell * newValue + account);
      // console.log(`yieldSell: ${yieldSell}`);
      // console.log(`sliderRef.current.value: ${newValue}`);
      // console.log(`account: ${account}`);
      setSellRequest({
        ...sellRequest,
        leverage: newValue,
      });
      dispatch(updateSell(sellmonut));
    } else {
      dispatch(updateSell(0));
    }
  };

  const buyValueText = (value) => `${value}x`;

  const buyValueLabelFormat = (value) => buyMarker.findIndex((mark) => mark.value === value) * 25;

  const sellValueText = (value) => `${value}x`;

  const sellValueLabelFormat = (value) => sellMarker.findIndex((mark) => mark.value === value) * 25;

  return (
    <div>
      {type === 'buy' ? (
        <div className="w-[339px] flex justify-between items-center text-[14px] mb-[18px]">
          <p className="w-[80px] ">레버리지</p>
          <ThemeProvider theme={sliderTheme}>
            <Slider
              color="customPurple"
              sx={{ width: 213, height: 7 }}
              aria-label="Restricted values"
              defaultValue={1}
              value={buyLeverage}
              valueLabelFormat={buyValueLabelFormat}
              getAriaValueText={buyValueText}
              step={null}
              onChange={handleChange}
              valueLabelDisplay="auto"
              marks={buyMarker}
            />
          </ThemeProvider>
          <p className=" w-[15px] text-[#6800BA] text-[15px] font-bold">{buyLeverage}x</p>
        </div>
      ) : (
        <div className="w-[339px] flex justify-between items-center text-[14px] mb-[18px]">
          <p className="w-[80px] ">레버리지</p>
          <ThemeProvider theme={sliderTheme}>
            <Slider
              color="customOrange"
              sx={{ width: 213, height: 7 }}
              aria-label="Restricted values"
              defaultValue={1}
              value={sellLeverage}
              valueLabelFormat={sellValueLabelFormat}
              getAriaValueText={sellValueText}
              step={null}
              onChange={sellHandleChange}
              valueLabelDisplay="auto"
              marks={sellMarker}
            />
          </ThemeProvider>
          <p className=" w-[15px] text-[#FF9E0D] text-[15px] font-bold">{sellLeverage}x</p>
        </div>
      )}
    </div>
  );
}

export default TransProgressbar;
