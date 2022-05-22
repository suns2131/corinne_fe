import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSell } from '../../../../state/reducer/transaction/trans';
import styles from './TradeDetail.module.css';

function TransProgressbar({
  buyRequest,
  setBuyRequest,
  sellRequest,
  setSellRequest,
  type,
  userAmount,
  setSellPrice,
}) {
  const dispatch = useDispatch();
  const marker = [{ value: 1 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }];
  const currentMount = useSelector((state) => state.chart.getCurrentMonut.tradePrice);
  console.log(currentMount);
  const sliderRef = useRef(null);
  const [leverage, setLeverage] = React.useState(1);
  // const sliderTheme = createTheme({
  //   palette : {
  //     customPurple: {
  //       main: '#6800BA'
  //     },
  //     customOrange: {
  //       main: '#FF9E0D',
  //     }
  //   }
  // })

  useEffect(() => {
    if (userAmount?.coins !== undefined) {
      const sell = userAmount.coins.filter((el) => el.leverage === Number(sliderRef.current.value));
      if (sell.length > 0) {
        const bPrice = sell[0].buyPrice;
        const account = sell[0].amount;
        console.log(currentMount);
        const yieldSell = ((currentMount - bPrice) / bPrice) * account;
        const sellmonut = Math.floor(yieldSell * leverage + account);
        dispatch(updateSell(sellmonut));
      }
    }
  }, [currentMount]);

  const handleChange = () => {
    setLeverage(sliderRef.current.value);
    if (type === 'buy') {
      setBuyRequest({
        ...buyRequest,
        leverage: sliderRef.current.value,
      });
    } else if (type === 'sell') {
      const sell = userAmount.coins.filter((el) => el.leverage === Number(sliderRef.current.value));
      // console.log(userAmount);
      // console.log(sliderRef.current.value);
      // console.log(`sell: ${sell}`);
      if (sell.length > 0) {
        const bPrice = sell[0].buyPrice;
        const account = sell[0].amount;
        const yieldSell = ((currentMount - bPrice) / bPrice) * account;
        // console.log(yieldSell);
        const sellmonut = Math.floor(yieldSell * sliderRef.current.value + account);
        // console.log(`yieldSell: ${yieldSell}`);
        // console.log(`sliderRef.current.value: ${sliderRef.current.value}`);
        // console.log(`account: ${account}`);

        setSellRequest({
          ...sellRequest,
          leverage: sliderRef.current.value,
        });

        dispatch(updateSell(sellmonut));
      } else {
        dispatch(updateSell(0));
      }
    }
  };

  return (
    <div>
      {type === 'buy' ? (
        <div className="w-[339px] flex justify-between items-center text-[14px] mb-[18px]">
          <p className="w-[80px] ">레버리지</p>
          <input
            ref={sliderRef}
            className={styles.slidersbuy}
            type="range"
            min="0"
            max="100"
            defaultValue={1}
            onChange={handleChange}
            step={25}
          />
          <p className=" w-[15px] text-[#6800BA] text-[15px] font-bold">{leverage}x</p>
        </div>
      ) : (
        <div className="w-[339px] flex justify-between items-center text-[14px] mb-[18px]">
          <p className="w-[80px] ">레버리지</p>
          <input
            ref={sliderRef}
            className={styles.sliderssell}
            type="range"
            min="0"
            max="100"
            defaultValue={1}
            onChange={handleChange}
            step={25}
          />
          <p className=" w-[15px] text-[#FF9E0D] text-[15px] font-bold">{leverage}x</p>
        </div>
      )}
    </div>
  );
}

export default TransProgressbar;
