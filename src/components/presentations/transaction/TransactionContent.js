import React, { useEffect } from 'react'
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import TransChart from './TransChart';
import {getServer , PostServer} from '../../../state/reducer/transaction/trans'


function TransactionContent() {
    const dispatch = useDispatch();
    const seletor = useSelector((state) => state.trans);
    useEffect(()=> {
      dispatch(getServer('/api/transaction/KRW-BTC/1',''));
    },[])
    const [coinList,setCoinList] = React.useState(
        {
          src : '/icons/icon_btc.png',
          alt : 'btc',
          name : 'BTC',
          upRate : '-0.05%',
          price : '10,000,000',
          unitPrice : 'BTC',
        })
    const [buystate,setBuyState] = React.useState(true);
    const [inputPrice,setInputPrice] = React.useState(0);
    
    const clickBuy = (type) => {
      let requestData;
      if(type === "buy")
      {
        requestData = {
          'tiker' : 'KRW-BTC',
          'leverage' : 1,
          'tradePrice' : 1000,
          'buyAmount' : Number(inputPrice),
        }  
      }
      else
      {
        requestData = {
          'tiker' : 'KRW-BTC',
          'leverage' : 1,
          'tradePrice' : 1000,
          'sellAmount' : Number(inputPrice),
        }  
      }
      
      console.log('버튼클릭')
      console.log(requestData)
      dispatch(PostServer(`/api/transaction/${type}`,requestData));
    }

    return (
      <div className=' font-Pretendard'>
        <div className=" w-[793px] h-[90px] bg-neutrals5 p-5 shadow-md rounded-[10px] mb-5 ">
          {coinList && 
          <div className=" mr-[10px] flex justify-between items-center ">
            <div className='flex justify-center items-center '>
              <Image src= {coinList.src} width="42" height="42" />
              <div className='ml-[11px]' >
                <div className='flex justify-center items-center '>
                  <p className=' font-bold text-[20px] mr-[7px]'>BTC</p>
                  <svg width="18" height="18" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7299 1.50989L13.4899 5.02989C13.7299 5.51989 14.3699 5.98989 14.9099 6.07989L18.0999 6.60989C20.1399 6.94989 20.6199 8.42989 19.1499 9.88989L16.6699 12.3699C16.2499 12.7899 16.0199 13.5999 16.1499 14.1799L16.8599 17.2499C17.4199 19.6799 16.1299 20.6199 13.9799 19.3499L10.9899 17.5799C10.4499 17.2599 9.55991 17.2599 9.00991 17.5799L6.01991 19.3499C3.87991 20.6199 2.57991 19.6699 3.13991 17.2499L3.84991 14.1799C3.97991 13.5999 3.74991 12.7899 3.32991 12.3699L0.849909 9.88989C-0.610091 8.42989 -0.140091 6.94989 1.89991 6.60989L5.08991 6.07989C5.61991 5.98989 6.25991 5.51989 6.49991 5.02989L8.25991 1.50989C9.21991 -0.400107 10.7799 -0.400107 11.7299 1.50989Z" fill="#FFCE85"/>
                  </svg>
                </div>
                <p className='text-[13px] text-[#cecece]'>비트코인</p>
              </div>
            </div>
            <div className='flex flex-col justify-center items-end'> 
              <div className='flex justify-center items-center text-[#A634FF]'>
                <p className='text-[12px] mr-[4px]' >+0.01%(▲ 7,000) </p>
                <p className='text-[24px] font-bold'>{coinList.price}원</p>
              </div> 
              <p className=' text-[14px] font-normal text-[#CECECE]'>1.00 {coinList.unitPrice}</p>
            </div>  
          </div>
          }
        </div>
        <div className=' w-[793px] h-[558px] p-5 bg-neutrals1 shadow-md rounded-[10px] mb-5'>
          <div className=' w-full h-[32px] mb-[10px]  flex justify-start item-center '>
            <button 
              className=' w-[31px] h-[32px] border-solid border-[#eeeeee] border-[1px] rounded-md hover:bg-[#eeeeee] mr-[4px] '
              type='button'
            >
              일
            </button>
            <button 
              className=' w-[31px] h-[32px] border-solid border-[#eeeeee] border-[1px] rounded-md hover:bg-[#eeeeee] '
              type='button'
            >
              주
            </button>
            <p className=' text-[12px] flex justify-center items-center ml-[15px] mr-[10px]'>고가 <span className='ml-[3px] text-[#A634FF]'>50,000,000</span>원</p>
            <p className=' text-[12px] flex justify-center items-center mr-[10px]'>저가 <span className='ml-[3px] text-[#FF9E0D]'>50,000,000</span>원</p>
            <p className=' text-[12px] flex justify-center items-center mr-[10px]'>전일가 <span className='ml-[3px] text-[#434051]'>50,000,000</span>원</p>
            <p className=' text-[12px] flex justify-center items-center mr-[10px]'>거래대금 <span className='ml-[3px] text-[#434051]'>50,000,000</span>원</p>
            <div className=' text-[12px] flex justify-center items-center border-solid border border-[#eeeeee] rounded-md py-[3px] px-[6px]'>금주매수회원 <span className='ml-[3px] text-[#A634FF]'>8</span>명</div>
          </div>
          <TransChart />
        </div>
        <div className=' w-[793px] h-[464px] flex shadow-md'>
          <div className=' w-[386px] h-[464px] mr-[20px] '> 
            {buystate ? 
              <div>
                <div className='w-full h-[69px] flex'>
                  <button
                    type='button' 
                    className=' w-1/2 flex justify-center items-center shadow-md rounded-t-xl bg-neutrals5'
                    onClick={()=> setBuyState(true)}
                  >매수</button>
                  <button 
                    type='button' 
                    className=' w-1/2 flex justify-center items-center shadow-md rounded-t-xl text-[#cecece] bg-[#eeeeee]'
                    onClick={()=> setBuyState(false)}
                    >
                      매도
                    </button>
                </div>
                <div className='  w-full h-[395px] rounded-b-xl bg-neutrals5 p-5 '>
                  <div className='w-full flex justify-between items-center text-[14px] mb-[33px]'>
                    <p>매수 가능 금액</p>
                    <p>10,000,000원</p>
                  </div>
                  <div className='w-full flex justify-start items-center text-[14px] mb-[33px]'>
                    <p className='w-[80px] mr-[5px]'>레버리지</p>
                    <div className='w-[213px] h-[7px] bg-violet-500 rounded-xl  mr-[14px] ' />
                    <p className=' text-[15px] text-curp font-bold'>25x</p>
                  </div>
                  <div className='flex justify-center items-start mb-[12px] '>
                    <p className=' text-[14px] w-[80px] pt-[10px] mr-[5px]'>매수 금액</p>
                    <div>
                    <div className='w-full flex justify-start items-center text-[14px] bg-[#fbfbfb] px-[9px] py-[6px]' >
                      <button className='w-[32px] h-[32px] flex justify-center items-center border border-solid border-[#eeeeee] rounded-md mr-[10px]' type='button' >-</button>
                      <input 
                      className='bg-[#fbfbfb] outline-none' 
                      type="text" 
                      onChange={(e)=> setInputPrice(e.target.value)}
                      placeholder='금액을 입력해주세요.' />
                      <button className='w-[32px] h-[32px] flex justify-center items-center border border-solid border-[#eeeeee] rounded-md ml-[10px]' type='button' >+</button>
                    </div>
                    <div className='flex justify-center items-center'>
                      <button className='w-[41px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>0%</button>
                      <button className='w-[45px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>25%</button>
                      <button className='w-[45px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>50%</button>
                      <button className='w-[45px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>75%</button>
                      <button className='w-[50px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>100%</button>
                    </div>
                  </div>
                </div>
                <div className=' mt-[77px] flex flex-col justify-center items-center'> 
                    <p className=' text-[#cecece] text-[12px] mb-[15px]'>최소 주문금액 50,000원 (수수료 0%)</p>
                    <button
                      className=' w-[346px] h-[45px] bg-curp rounded-md text-[14px] text-[#ffffff]'
                      type='button'
                      onClick={()=> {clickBuy('buy')} }
                      >
                      매수하기
                    </button>
                </div>
                </div>
                </div>
                :
                <div>
                <div className='w-full h-[69px] flex'>
                  <button
                    type='button' 
                    className=' w-1/2 flex justify-center items-center shadow-md rounded-t-xl text-[#cecece] bg-[#eeeeee]'
                    onClick={()=> setBuyState(true)}
                  >매수</button>
                  <button 
                    type='button' 
                    className=' w-1/2 flex justify-center items-center shadow-md rounded-t-xl bg-neutrals5 '
                    onClick={()=> setBuyState(false)}
                    >
                      매도
                    </button>
                </div>
                <div className='  w-full h-[395px] rounded-b-xl bg-neutrals5 p-5 '>
                  <div className='w-full flex justify-between items-center text-[14px] mb-[33px]'>
                    <p>매도 가능 금액</p>
                    <p>10,000,000원</p>
                  </div>
                  <div className='w-full flex justify-start items-center text-[14px] mb-[33px]'>
                    <p className='w-[80px] mr-[5px]'>레버리지</p>
                    <div className='w-[213px] h-[7px] bg-[#FF9E0D] rounded-xl  mr-[14px] ' />
                    <p className=' text-[15px] text-[#FF9E0D] font-bold'>25x</p>
                  </div>
                  <div className='flex justify-center items-start mb-[12px] '>
                    <p className=' text-[14px] w-[80px] pt-[10px] mr-[5px]'>매도 금액</p>
                    <div>
                    <div className='w-full flex justify-start items-center text-[14px] bg-[#fbfbfb] px-[9px] py-[6px]' >
                      <button className='w-[32px] h-[32px] flex justify-center items-center border border-solid border-[#eeeeee] rounded-md mr-[10px]' type='button' >-</button>
                      <input className='bg-[#fbfbfb] outline-none' type="text" placeholder='금액을 입력해주세요.' />
                      <button className='w-[32px] h-[32px] flex justify-center items-center border border-solid border-[#eeeeee] rounded-md ml-[10px]' type='button' >+</button>
                    </div>
                    <div className='flex justify-center items-center'>
                      <button className='w-[41px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>0%</button>
                      <button className='w-[45px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>25%</button>
                      <button className='w-[45px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>50%</button>
                      <button className='w-[45px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>75%</button>
                      <button className='w-[50px] h-[32px] px-[7.5px] py-[5.5px] mr-[9px] rounded-md text-[14px] border border-solid border-[#eeeeee] active:bg-[#eeeeee]' type='button'>100%</button>
                    </div>
                  </div>
                </div>
                <div className=' mt-[77px] flex flex-col justify-center items-center'> 
                    <p className=' text-[#cecece] text-[12px] mb-[15px]'>최소 주문금액 50,000원 (수수료 0%)</p>
                    <button
                      className=' w-[346px] h-[45px] bg-[#FF9E0D] rounded-md text-[14px] text-[#ffffff]'
                      type='button'
                      onClick={()=> {clickBuy('sell')}}
                      >
                      매도하기
                    </button>
                </div>
                </div>
                </div>
            }
          </div>

          <div className=' w-[387px] h-[464px] shadow-md '> 
            <div className='w-full h-[69px] flex'>
              <div className=' w-full flex justify-center items-center shadow-md rounded-t-xl bg-neutrals5'>거래내역</div>
            </div>
            
            <div className='w-full h-[395px] p-5 rounded-b-xl bg-neutrals5'>
              {/* 반복문 */}
              {seletor.tikerDetail && seletor.tikerDetail.map((el) => (
                <div>
                  <div className='flex justify-between items-center'>
                    {el.type === 'buy' ? 
                      <p className=' text-[#ff9e0d] font-bold text-[15px]'>매수</p>
                      :
                      <p className=' text-curp font-bold text-[15px]'>매도</p>
                    }
                      <p className=' text-[#cecece] text-[12px]'>{el.tradeAT}</p>
                  </div>
                  <div className='flex justify-between items-center mb-[4px]'>
                      <p className='text-[#cecece] text-[14px]'>체결가격</p>
                      <p className=' text-[#33323F] text-[15px] font-bold'> {el.price}원</p>
                  </div>
                  <div className='flex justify-between items-center mb-[4px]'>
                      <p className='text-[#cecece] text-[14px]'>체결금액</p>
                      <p className=' text-[#33323F] text-[15px] font-bold'>{el.amount}원</p>
                  </div>
                  <div className='flex justify-between items-center mb-[24px]'>
                      <p className='text-[#cecece] text-[14px]'>레버리지</p>
                      <p className=' text-[#33323F] text-[15px] font-bold'>{el.leverage}x</p>
                  </div>
                </div> 
                ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default TransactionContent;