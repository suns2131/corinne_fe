import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import {createTheme, ThemeProvider} from '@mui/material/styles'

function TransProgressbar({ buyRequest ,setBuyRequest }) {
    const marker = [{value : 0},{value: 25},{value: 50,},{value: 75,},{value: 100,}]
    const [leverage, setLeverage] = React.useState(0);
    const sliderTheme = createTheme({
      palette : {
        customPurple : {
          main : '#6800BA'
        }
      }
    })

    const handleChange = (event, newValue) => {
      setLeverage(newValue);
      setBuyRequest({
        ...buyRequest,
        'leverage': newValue
      })
    };
    const valueText = (value) => `${value}x`

    const valueLabelFormat = (value) => marker.findIndex((mark) => mark.value === value)*25;

    return (
      <Box sx={{ width : 413, height : 7, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
        <p className=' w-[80px] mr-[5px]'  >레버리지</p>
        <ThemeProvider theme={sliderTheme}>
        <Slider
          color = "customPurple"
          sx={{ width: 200}}
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
         <p className=' ml-[15px] text-[15px] text-curp font-bold'>{leverage}x</p>
      </Box>
    );
}

export default TransProgressbar;