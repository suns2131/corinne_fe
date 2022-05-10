import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Rank.module.css"
import { getUserInfo} from "../../../state/reducer/rank/rank";
import { maxExp } from "../../../share/exp";
import Level from "../../../share/level";

function RankUserinfo() {
    const userData = useSelector((state) => state.rank.userInfo);
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(getUserInfo(1));
    },[dispatch])

    return (
      <div className="w-full h-[473px] mb-[20px] rounded-[10px] shadow-008 py-5">
      {userData && 
        <div className="m-[20px] flex flex-col justify-start items-center">
          <img className="w-[141px] h-[141px] rounded-full mb-[15px] " src={userData?.imageUrl} alt={userData.nickname} />
          <p className="font-bold text-[20px] mb-[8px]">{userData.nickname}</p>
          <div className=" flex justify-center items-center mb-[24px]">
            <Level level={userData.exp} />
            <progress className={styles.progress}  max={maxExp(userData.exp)} value={userData.exp}  />
            <div className="ml-[8px] text-[12px] font-normal" >{userData.exp}xp / {maxExp(userData.exp)}xp</div>
          </div>
          <div className=" flex justify-around items-center mb-[30px]">
              <div className="w-[52px] h-[42px] mr-[32px] flex flex-col justify-center items-center">
                <p className="font-bold text-[15px] text-curp">{userData.myRank}위</p>
                <p className="font-bold text-[12px] text-[#777777]">현재랭킹</p>
              </div>
              <div className="w-[52px] h-[42px] mr-[32px] flex flex-col justify-center items-center">
                <p className="font-bold text-[15px] text-[#33323f]">{userData.BestRank}위</p>
                <p className="font-bold text-[12px] text-[#777777]">최고 기록</p>
              </div>
              <div className="w-[52px] h-[42px] mr-[32px] flex flex-col justify-center items-center">
                <p className="font-bold text-[15px] text-[#33323f]">{userData.follower}</p>
                <p className="font-bold text-[12px] text-[#777777]">팔로워</p>
              </div>
              <div className="w-[52px] h-[42px] flex flex-col justify-center items-center">
                <p className="font-bold text-[15px] text-[#33323f]">{userData.following}</p>
                <p className="font-bold text-[12px] text-[#777777]">팔로잉</p>
              </div>
          </div>
          <div className="w-[347px] h-[109px] p-5 flex justify-between items-center bg-[#f6f6f6] rounded-[10px]">
            <div className=" font-normal text-[14px]  text-[#777777]">
              <p>수익률</p>
              <p className="mt-[3px]">총 자산</p>
              <p className="mt-[3px]">리셋횟수</p>
            </div>
            <div className=" text-right text-[15px]">
              <p className="font-bold text-[#A634FF]">{userData.fluctuationRate}%</p>
              <p className="mt-[3px] font-normal text-[#33323f]">{userData.totalBalance}원</p>
              <p className="mt-[3px] font-normal text-[#33323f]">{userData.resetCount}</p>
            </div>  
          </div>
        </div>
      }
      </div>
    );
}

export default RankUserinfo;