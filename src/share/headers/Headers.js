import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import Image from 'next/image';
import AlarmNone from '../../../public/icons/header/alarm_none.svg'
import AlarmRing from '../../../public/icons/header/alarm_ring.svg'
import AlarmClick from '../../../public/icons/header/alarm_click.svg'
import socketClient from '../socket';
import { getCookie } from '../cookie';

const usertoken = getCookie({name: 'corinne'})

export default function Headers() {
    const router = useRouter();
    const islogin = true;
    const [alarmState, setAlarmState] = useState(0);
    const clickAlram = () => {
      setAlarmState((prev) => prev > 1 ? 0 : prev + 1)
    }

    useEffect(() => {
      if(usertoken !== undefined)
      {
        // api/user/info에서 조회한 내정보의 userid로 알림 소켓 구독.
        socketClient.connect({token: `BEARER ${usertoken}`}, ()=> {
          socketClient.subscribe("/sub/topic/1" , (message) => {
            const AlramData = JSON.parse(message.body);
            // 알림 로직 체크
            // 새로운 알림이 생길경우 1 / 알림이 없을 경우 0 / 알림 클릭시 2
            if(AlramData.type)
              setAlarmState(1);
          })
        })
      }
    },[])

    if(islogin){
      return (
        <div className='w-container h-headers flex justify-between items-center shadow-box'>
          <div className='h-[36px] text-[30px] font-bold text-left text-Primary-purple flex justify-start items-center'>
            <Link href="/">
            corinne
            </Link>
          </div>
            <nav>
              <ul className='w-[450px] h-[36px] grow-0 flex justify-center items-center gap-[25px]'>
                {router.pathname === "/transaction" ?
                   <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                     <Link href="/transaction">
                      <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple'>모의투자</span>
                     </Link>
                   </li>
                   :
                   <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                     <Link href="/transaction">
                      <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-gray'>모의투자</span>
                     </Link>
                   </li>
                } 
                {router.pathname === "/rankpage" ?
                   <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                    <Link href="/rankpage">
                     <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple'>랭킹</span>  
                    </Link>
                   </li>
                   :
                   <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                     <Link href="/rankpage">
                       <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-gray'>
                        랭킹
                       </span>
                     </Link>
                   </li>
                }
                {router.pathname === "/community" ?
                   <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                    <Link href="/community">
                     <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple'>
                      커뮤니티
                     </span>  
                    </Link>
                   </li>
                   :
                   <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                     <Link href="/community">
                       <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-gray'>
                        커뮤니티
                       </span>
                     </Link>
                   </li>
                }
                <li className='w-[68px] h-[36px] grow-0 flex justify-center items-center gap-[10px] px-[8px]'>
                    <Link href="/" >
                     <span className='w-[52px] h-[18px] grow-0 font-Pretendard text-[15px] font-normal text-center text-Neutrals-gray'>
                      로그아웃
                     </span>  
                    </Link>
                </li>
                <li className='w-[24px] h-[24px] grow-0 flex justify-center items-center'>
                  <button
                  type='button'
                  onClick={clickAlram}>
                    {alarmState === 0 &&
                      <AlarmNone />
                    }
                    {alarmState === 1 &&
                      <AlarmRing />
                    }
                    {alarmState === 2 &&
                      <AlarmClick />
                    }
                  </button>
                </li>
                <li className='w-[40px] h-[36px] grow-0 flex justify-center items-center'>
                  <Image src="/images/defaultProfile/defalutProfile32.png" alt="defaultProfile" width="32px" height="32px"/>
                </li>
              </ul>
            </nav>
        </div>
      );
    }
    return(
      <div className='font-Gmarket Sans w-container h-headers flex justify-start items-center gap-[712px]'>
        <span className='w-[128px] h-[36px] text-[30px] font-bold text-left text-Neutrals-white flex justify-start items-center' >
          corinne
        </span>
      </div>
    );
}
