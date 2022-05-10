import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealRank } from "../../../state/reducer/rank/rank";

function RankList() {
    const dispatch = useDispatch();
    const realData = useSelector((state) => state.rank.realRank)
    const [pageNum,setPageNum] = useState(1);
    console.log(realData);
    React.useEffect(() =>{
        dispatch(getRealRank(pageNum))
    },[])

    return (
        <div className="w-full h-[839px] flex flex-col mx-5 mt-[19px] ">
          {realData?.rank && realData.rank.map((el,idx) => (
            <div>
            {idx === 0 && 
              <div className=" w-[753px] h-[64px] mb-[15px] bg-curp rounded-[10px] p-5 flex justify-between items-center">
                 <div className="w-[45px] font-bold text-[15px] text-neutrals5">🥇1위</div>
                 <div className="flex justify-center items-center">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#c4c4c4] mr-[5px]"/>
                  <p className="font-bold text-[15px] text-neutrals5">{el.nickname}</p>
                 </div>
                 <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center bg-neutrals5">
                  <div className="w-[14px] h-[14px] bg-red-600 rounded-full mr-[4px]" />
                  <p className=" font-normal text-[12px]">Lv.레드</p>
                 </div>
                 <div className="font-bold text-[15px] text-[#BF6FFF]">{el.fluctuationRate}%</div>
                 <div className="font-normal text-[15px] text-[#FFFFFF]">{el.totalBalance}원</div>
                 <div className="flex justify-center items-center">
                   <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                   </div>
                   <p className="ml-[6px] font-normal text-[15px] text-[#cecece]">{el.resetCount}</p>
                 </div>
                 {el.follow ?
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#A634FF] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로우</button>
                  </div>
                  :
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#cecece] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로잉</button>
                  </div>
                 }
                 
              </div>
            }
            {idx === 1 &&
              <div className=" w-[753px] h-[64px] mb-[15px] bg-[#434051] rounded-[10px] p-5 flex justify-between items-center">
                <div className="w-[45px] font-bold text-[15px] text-neutrals5">🥇2위</div>
                 <div className="flex justify-center items-center">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#c4c4c4] mr-[5px]"/>
                  <p className="font-bold text-[15px] text-neutrals5">{el.nickname}</p>
                 </div>
                 <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center bg-neutrals5">
                  <div className="w-[14px] h-[14px] bg-red-600 rounded-full mr-[4px]" />
                  <p className=" font-normal text-[12px]">Lv.레드</p>
                 </div>
                 <div className="font-bold text-[15px] text-[#BF6FFF]">{el.fluctuationRate}%</div>
                 <div className="font-normal text-[15px] text-[#FFFFFF]">{el.totalBalance}원</div>
                 <div className="flex justify-center items-center">
                   <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                   </div>
                   <p className="ml-[6px] font-normal text-[15px] text-[#cecece]">0</p>
                 </div>
                 {el.follow ?
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#A634FF] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로우</button>
                  </div>
                  :
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#cecece] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로잉</button>
                  </div>
                 }
              </div>
            }
            {idx === 2 && 
              <div className=" w-[753px] h-[64px] mb-[15px] bg-[#434051] rounded-[10px] p-5 flex justify-between items-center">
              <div className=" w-[45px] font-bold text-[15px] text-neutrals5">🥇3위</div>
                 <div className="flex justify-center items-center">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#c4c4c4] mr-[5px]"/>
                  <p className="font-bold text-[15px] text-neutrals5">{el.nickname}</p>
                 </div>
                 <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center bg-neutrals5">
                  <div className="w-[14px] h-[14px] bg-red-600 rounded-full mr-[4px]" />
                  <p className=" font-normal text-[12px]">Lv.레드</p>
                 </div>
                 <div className="font-bold text-[15px] text-[#BF6FFF]">{el.fluctuationRate}%</div>
                 <div className="font-normal text-[15px] text-[#FFFFFF]">{el.totalBalance}원</div>
                 <div className="flex justify-center items-center">
                   <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                   </div>
                   <p className="ml-[6px] font-normal text-[15px] text-[#cecece]">0</p>
                 </div>
                 {el.follow ?
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#A634FF] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로우</button>
                  </div>
                  :
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#cecece] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로잉</button>
                  </div>
                 }
              </div>
            }
            {idx > 2 &&
              <div className="w-[753px] h-[64px] mb-[15px] bg-[#f6f6f6] rounded-[10px] p-5 flex justify-between items-center">
              <div className="w-[45px] text-right font-bold text-[15px] text-[#33323F]">4위</div>
                 <div className="flex justify-center items-center">
                  <div className="w-[24px] h-[24px] rounded-full bg-[#c4c4c4] mr-[5px]"/>
                  <p className="font-bold text-[15px] text-[#33323F]">{el.nickname}</p>
                 </div>
                 <div className="w-[74px] h-[26px] border border-solid border-[#e4e4e4] rounded-[20px] flex justify-center items-center bg-neutrals5">
                  <div className="w-[14px] h-[14px] bg-red-600 rounded-full mr-[4px]" />
                  <p className=" font-normal text-[12px]">Lv.레드</p>
                 </div>
                 <div className="font-bold text-[15px] text-[#BF6FFF]">{el.fluctuationRate}%</div>
                 <div className="font-normal text-[15px] text-[#33323F]">{el.totalBalance}원</div>
                 <div className="flex justify-center items-center">
                   <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="#CECECE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.92664 1.38676C8.34664 1.21343 7.70664 1.1001 6.99997 1.1001C3.80664 1.1001 1.21997 3.68676 1.21997 6.8801C1.21997 10.0801 3.80664 12.6668 6.99997 12.6668C10.1933 12.6668 12.78 10.0801 12.78 6.88676C12.78 5.7001 12.42 4.59343 11.8066 3.67343" stroke="black" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                   </div>
                   <p className="ml-[6px] font-normal text-[15px] text-[#cecece]">0</p>
                 </div>
                 {el.follow ?
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#A634FF] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로우</button>
                  </div>
                  :
                  <div>
                    <button
                    type="button"
                    className="w-[60px] h-[24px] p-[5px] bg-[#cecece] rounded-[5px] flex justify-center items-center font-normal text-[12px] text-[#ffffff]"
                    >팔로잉</button>
                  </div>
                 }
              </div>
            }
            </div>
          ))
          }  
          </div>
    );
}

export default RankList;