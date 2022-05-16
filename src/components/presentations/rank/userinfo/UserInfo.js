import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../../../state/reducer/rank/rank';
import { maxExp } from '../../../../share/exp';
import Level from '../../../../share/level';
import { Won } from '../../../../share/convertWon';
import ExpBar from './ExpBar';

function Userinfo() {
  const userData = useSelector((state) => state.rank.userInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserInfo(1));
  }, [dispatch]);

  return (
    <div className="w-[387px] h-[345px] flex justify-start items-start gap-[10px] m-[20px,360px,3px,20px] p-5 rounded-[10px] shadow-box bg-Neutrals-white">
      {userData && (
        <div className="w-[347px] h-[305px] flex-grow-0 flex flex-col justify-start items-center gap-[30px]">
          <div className="h-[94px] self-stretch flex-grow-0 flex justify-start items-center gap-[20px]">
            <div className=" z-[2]">
              <img
                className="w-[87px] h-[87px] rounded-full relative"
                src={userData?.imageUrl}
                alt={userData.nickname}
              />
              <div className=" absolute top-[176px]">
                <Level level={userData.exp} />
              </div>
            </div>
            <div className="h-[69px] flex-grow flex flex-col justify-center items-start gap-[12px]">
              <span className="h-[29px] flex-grow-0 font-Pretendard text-[24px] font-bold text-left text-Neutrals-deepGray">
                {userData.nickname}
              </span>
              <div className="h-[28px] self-stretch flex-grow-0 flex flex-col justify-start items-start">
                <ExpBar exp={userData.exp} />
                <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-right text-Neutrals-gray">
                  <span className="text-Neutrals-black">{userData.exp}xp</span>/{' '}
                  {maxExp(userData.exp)}
                  xp
                </span>
              </div>
            </div>
          </div>
          <div className="w-[304px] h-[48px] flex-grow-0 flex justify-start items-start gap-[32px]">
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple">
                {userData.myRank}위
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                현재랭킹
              </span>
            </div>
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                {userData.BestRank}위
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                최고 기록
              </span>
            </div>
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                {userData.follower}
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                팔로워
              </span>
            </div>
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                {userData.following}
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                팔로잉
              </span>
            </div>
          </div>
          <div className="w-[347px] h-[109px] flex-grow-0 flex justify-center items-center gap-[155px] p-5 rounded-[10px] border border-solid border-Neutrals-lightGray2">
            <div className="w-[52px] h-[69px] flex flex-col justify-between items-start">
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                수익률
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                총 자산
              </span>
              <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                리셋 횟수
              </span>
            </div>
            <div className="h-[66px] flex-grow flex flex-col justify-between items-end">
              <span className="h-[15px] flex-grow-0 font-Pretendard text-[15px] font-bold text-right text-Primary-purple2">
                {userData.fluctuationRate}%
              </span>
              <span className="h-[15px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                {Won(userData?.totalBalance !== undefined ? userData.totalBalance : 0)}원
              </span>
              <span className="h-[15px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray ">
                {userData.resetCount}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userinfo;
