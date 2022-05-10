import React from 'react'
import { useSelector } from 'react-redux';

function TransactionCurrent() {
    const currentAmonut = useSelector((state) => state.chart.getCurrentMonut);

    return (
        <div className='flex flex-col justify-center items-end'> 
            <div className='flex justify-center items-center text-[#A634FF]'>
              <p className='text-[12px] mr-[4px]' >+0.01%(▲ 7,000) </p>
              {currentAmonut && <p className='text-[24px] font-bold'>{currentAmonut}원</p> }
            </div> 
            <p className=' text-[14px] font-normal text-[#CECECE]'>1.00 BTC</p>
        </div>
    );
}

export default TransactionCurrent;