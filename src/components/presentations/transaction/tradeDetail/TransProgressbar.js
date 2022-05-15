import React, { useEffect } from 'react'
// import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
// import {createTheme, ThemeProvider} from '@mui/material/styles'
import { updateSell } from '../../../../state/reducer/transaction/trans';

function TransProgressbar({ buyRequest, setBuyRequest ,sellRequest ,setSellRequest, type, userAmount, setSellPrice}) {
    const dispatch = useDispatch();
    const marker = [{value : 1},{value: 25},{value: 50,},{value: 75,},{value: 100,}]
    const currentMount = useSelector((state) => state.chart.getCurrentMonut);
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
      if(userAmount?.coins !== undefined)
      {
      const sell = userAmount.coins.filter((el) => el.leverage === leverage);
      if(sell.length > 0)
      {
        console.log(sell[0].buyPrice)
        console.log(sell[0].amount)
        const bPrice = sell[0].buyPrice;
        const account = sell[0].amount
        console.log(bPrice);
        const yieldSell = ((currentMount - bPrice) / bPrice) * account
        const sellmonut = Math.floor((yieldSell * leverage) + account);
        console.log(sellmonut) ;
        dispatch(updateSell(sellmonut));
      } 
    }
    },[currentMount])

    const handleChange = (event, newValue) => {
      setLeverage(newValue);
      if(type === "buy")
      {
        setBuyRequest({
          ...buyRequest,
          'leverage': newValue
        })
      }
      else if(type === "sell"){

        const sell = userAmount.coins.filter((el) => el.leverage === newValue);
        if(sell.length > 0)
        {
          const bPrice = sell[0].buyPrice;
          const account = sell[0].amount
          const yieldSell = ((currentMount - bPrice) / bPrice) * account
          const sellmonut = Math.floor((yieldSell * newValue) + account);
          setSellRequest({
            ...sellRequest,
            'leverage': newValue
          })
          dispatch(updateSell(sellmonut));
        } 
        else{
          dispatch(updateSell(0));
        }
        
      }
      
    };
    const valueText = (value) => `${value}x`

    const valueLabelFormat = (value) => marker.findIndex((mark) => mark.value === value)*25;

    return (
      <div>
        {type === "buy" ?
        <div className='w-[339px] flex justify-between items-center text-[14px] mb-[18px]'>
          <p className='w-[80px] '>레버리지</p>
          {/* <ThemeProvider theme={sliderTheme}>
          <Slider
            color = "customPurple"
            sx={{ width: 213, height: 7}}
            aria-label = "Restricted values"
            defaultValue={1}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valueText}
            step={null}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks={marker}
            />
          </ThemeProvider> */}
          <p className=' w-[15px] text-[#6800BA] text-[15px] font-bold'>{leverage}x</p>
        </div>
        :
        <div className='w-[339px] flex justify-between items-center text-[14px] mb-[18px]'>
          <p className='w-[80px] '>레버리지</p>
          {/* <ThemeProvider theme={sliderTheme}>
          <Slider
            color = "customOrange"
            sx={{ width: 213, height: 7}}
            aria-label = "Restricted values"
            defaultValue={1}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valueText}
            step={null}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks={marker}
            />
          </ThemeProvider> */}
          <p className=' w-[15px] text-[#FF9E0D] text-[15px] font-bold'>{leverage}x</p>
        </div>
        }
        
      </div>
    );
}

export default TransProgressbar;