import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Headers() {
    const router = useRouter();
    const tf = true;
    if(tf){
      return (
        <div className=' font-Gmarket Sans w-full h-headers py-4 flex justify-between items-center '>
          <div className=' text-logos text-curp font-bold' >
            corinne
          </div>
            <nav className=' '>
              <ul className=' list-none '>
                {router.pathname === "/transaction" ?
                   <li className=' float-left text-menus mt-2 mr-[41px] font-bold '><Link href="/transaction">모의투자</Link></li>
                   :
                   <li className=' float-left text-menus mt-2 mr-[41px] text-[#777777] '><Link href="/transaction">모의투자</Link></li>
                } 
                {router.pathname === "/rankpage" ?
                   <li className=' float-left text-menus mt-2 mr-[41px] font-bold '><Link href="/rankpage">랭킹</Link></li>

                   :
                   <li className=' float-left text-menus mt-2 mr-[41px] text-[#777777]'><Link href="/RankPage">랭킹</Link></li>
                }
                <li className=' float-left text-menus mt-2 mr-[41px] text-[#777777]'>커뮤니티</li>
                <li className=' float-left text-menus mt-2 mr-[37px] text-[#777777]'>로그아웃</li>
                <li className=' float-left w-6 h-6 mt-1 mr-[33px]  '>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0201 2.90991C8.71009 2.90991 6.02009 5.59991 6.02009 8.90991V11.7999C6.02009 12.4099 5.76009 13.3399 5.45009 13.8599L4.30009 15.7699C3.59009 16.9499 4.08009 18.2599 5.38009 18.6999C9.69009 20.1399 14.3401 20.1399 18.6501 18.6999C19.8601 18.2999 20.3901 16.8699 19.7301 15.7699L18.5801 13.8599C18.2801 13.3399 18.0201 12.4099 18.0201 11.7999V8.90991C18.0201 5.60991 15.3201 2.90991 12.0201 2.90991Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                    <path d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10"/>
                  </svg>
                </li>
                <li className=' float-left'>
                  <div className=" w-8 h-8 rounded-full bg-[#EDEDED]" />
                </li>
              </ul>
            </nav>
        </div>
      );
    }
    return(
      <div className=' font-Gmarket Sans w-full h-headers py-4 flex justify-between items-center '>
        <div className=' text-logos text-neutrals5 font-bold' >
          corinne
        </div>
        {/* <button type='button' onClick={login}>카카오로그인</button> */}
      </div>
    );
}
