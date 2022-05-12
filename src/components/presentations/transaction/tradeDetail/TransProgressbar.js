import React from 'react'
import Slider from '@mui/material/Slider';
import {createTheme, ThemeProvider} from '@mui/material/styles'

function TransProgressbar({ buyRequest ,setBuyRequest,sellRequest ,setSellRequest, type }) {
    const marker = [{value : 0},{value: 25},{value: 50,},{value: 75,},{value: 100,}]
    const [leverage, setLeverage] = React.useState(0);
    const sliderTheme = createTheme({
      palette : {
        customPurple: {
          main: '#6800BA'
        },
        customOrange: {
          main: '#FF9E0D'
        }
      }
    })

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
        setSellRequest({
          ...sellRequest,
          'leverage': newValue
        })
      }
      
    };
    const valueText = (value) => `${value}x`

    const valueLabelFormat = (value) => marker.findIndex((mark) => mark.value === value)*25;

    return (
      <div>
        {type === "buy" ?
        <div className='w-[339px] flex justify-between items-center text-[14px] mb-[18px]'>
          <p className='w-[80px] '>레버리지</p>
          <ThemeProvider theme={sliderTheme}>
          <Slider
            color = "customPurple"
            sx={{ width: 213, height: 7}}
            aria-label = "Restricted values"
            defaultValue={0}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valueText}
            step={null}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks={marker}
            />
          </ThemeProvider>
          <p className='text-[#6800BA] text-[15px] font-bold'>{leverage}x</p>
        </div>
        :
        <div className='w-[339px] flex justify-between items-center text-[14px] mb-[18px]'>
          <p className='w-[80px] '>레버리지</p>
          <ThemeProvider theme={sliderTheme}>
          <Slider
            color = "customOrange"
            sx={{ width: 213, height: 7}}
            aria-label = "Restricted values"
            defaultValue={0}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valueText}
            step={null}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks={marker}
            />
          </ThemeProvider>
          <p className='text-[#FF9E0D] text-[15px] font-bold'>{leverage}x</p>
        </div>
        }
        
      </div>
    );
}

export default TransProgressbar;