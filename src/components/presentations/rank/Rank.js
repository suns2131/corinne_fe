import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Rank.module.css"
import {getMyRank, getTop3Rank, getRealRank} from '../../../state/reducer/rank/rank'
import RankTop3 from "./RankTop3";
import RankList from "./RankList";
import RankUserinfo from "./RankUserInfo";
import RankMatch from "./RankMatch";
import RankFollow from "./RankFollow";

function Rank() {
    const dispatch = useDispatch();
    const rankData = useSelector((state) => state.rank);
    const [weekRank,setWeekRank] = useState(false);
    const [matchRank,setMatchRank] = useState(false);
    const [rankPageNum,setRankPageNum] = useState(1);
    React.useEffect(()=>{
      dispatch(getRealRank(rankPageNum));
    },[])

    return (
      <div className=" font-Pretendard flex overflow-hidden">
        <div className=" w-[793px] mr-5">
          <div className=" w-full h-[372px] mb-[21px] bg-[url('/images/corinne_back.png')] bg-cover bg-center rounded-[10px] backdrop-blur-[7px] pl-[16px] pt-[19px]">  
            <div className="flex justify-start items-center mb-[27px]">
              <div>
                <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect width="42" height="50" fill="url(#pattern0)"/>
                  <defs>
                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_434_3816" transform="translate(-0.445205 -0.293785) scale(0.000630137 0.000519774)"/>
                  </pattern>
                  </defs>
                </svg>
              </div>
              <div className="ml-[4px] mb-[5px]">
                <div className="flex w-[710px] justify-between items-center">
                  <p className="font-bold text-[24px] text-[#ffffff]"  >지난주 랭킹결과 </p>
                  <div
                    onMouseEnter={()=>{setWeekRank(true)}}
                    onMouseLeave={()=>{setWeekRank(false)}}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00004 14.6668C11.6667 14.6668 14.6667 11.6668 14.6667 8.00016C14.6667 4.3335 11.6667 1.3335 8.00004 1.3335C4.33337 1.3335 1.33337 4.3335 1.33337 8.00016C1.33337 11.6668 4.33337 14.6668 8.00004 14.6668Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.77315 9V8.86003C7.77315 8.40669 8.05317 8.16668 8.33317 7.97335C8.6065 7.78668 8.8798 7.54669 8.8798 7.10669C8.8798 6.49336 8.38649 6 7.77315 6C7.15982 6 6.6665 6.49336 6.6665 7.10669" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.77026 10.5933H7.77626" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {weekRank &&
                        <div className=" absolute left-[800px] top-[10px] w-[375px] h-[295px] p-5 bg-[#33323F] rounded-[12px] shadow-008">
                          <p className="font-bold text-[12px] text-[#ffffff]">주간 모의투자 랭킹</p>
                          <p className="font-normal text-[12px] text-[#cecece]">주간 모의투자 랭킹은 일주일마다 총 자산 기준으로 순위가 책정되며,<br/>
                          매주 월요일 AM 9:00 마다 총 자산이 초기화 됩니다.<br/>
                          (순위 책정 기간 : 월요일 AM 9:00 ~ 다음주 월요일 AM 08:59)<br/><br/>
                          랭킹 순위에 따라 보상이 지급됩니다.<br/>
                          </p>
                          <p className="text-[12px] text-[#ffce85]">🥇 경험치 30,000xp + 원화 2,000,000원</p>
                          <p className="text-[12px] text-[#ffce85]">🥈 경험치 20,000xp + 원화 1,500,000원</p>
                          <p className="text-[12px] text-[#ffce85]">🥉 경험치 10,000xp + 원화 1,200,000원</p>
                          <p className="font-normal text-[12px] text-[#cecece]">👥 참여자 전원 경험치 <span className="text-[12px] text-[#ffce85]">5,000xp 지급</span> <br/> (참여자 기준: 매수, 매도 이력이 있는 사람)</p>
                          <p className="font-normal text-[12px] text-[#ff6e0d]">** 보상으로 지급되는 원화는 실제 원화가 아닌, corinne 가상 원화입니다.</p>
                      </div>
                  }
                </div>
                <p className="font-normal text-[12px] text-[#cecece]">2022.00.00 ~ 2022.00.00 </p>
              </div>
            </div>
            <RankTop3 />
          </div>
          {/* <div className=" w-full h-[100px] mb-[21px] rounded-[10px] bg-[#c4c4c4] flex justify-center items-center">
            1:1
          </div> */}
          <div className=" w-full h-[923px] rounded-t-[10px] shadow-008">
            <div className="w-[753px] h-[84px] mx-5 flex justify-between items-center">
              <p className="font-bold text-[16px] text-[#33323f] ">실시간 랭킹</p>
              <div className="flex justify-between rounded-[10px] bg-[#f9f9f9] ">
                <input placeholder="닉네임 검색" />
                <button
                  type="button"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z" fill="#434051"/>
                  </svg>
                </button>
              </div>
            </div>
            <RankList />
          </div>
        </div>
        <div className=" w-[387px] "> 
          <RankUserinfo />
          <RankMatch />
          <div className=" w-full h-[618px] rounded-[10px] shadow-008">
            <div className="w-[347px] h-[84px] m-5 flex justify-between items-center ">
              <p className=" font-bold text-[16px]">팔로잉 랭킹</p>
              <div>
                  <input className="w-[216px] h-[44px]" placeholder="닉네임 검색"/>
                  <button
                    type="button"
                    className="px-[10px]"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.33333 7.33333H7.80667L7.62 7.15333C8.27333 6.39333 8.66667 5.40667 8.66667 4.33333C8.66667 1.94 6.72667 0 4.33333 0C1.94 0 0 1.94 0 4.33333C0 6.72667 1.94 8.66667 4.33333 8.66667C5.40667 8.66667 6.39333 8.27333 7.15333 7.62L7.33333 7.80667V8.33333L10.6667 11.66L11.66 10.6667L8.33333 7.33333ZM4.33333 7.33333C2.67333 7.33333 1.33333 5.99333 1.33333 4.33333C1.33333 2.67333 2.67333 1.33333 4.33333 1.33333C5.99333 1.33333 7.33333 2.67333 7.33333 4.33333C7.33333 5.99333 5.99333 7.33333 4.33333 7.33333Z" fill="#434051"/>
                    </svg>
                  </button>
                </div>
            </div>
            <RankFollow />
          </div>
        </div>
      </div>
    );
}

export default Rank