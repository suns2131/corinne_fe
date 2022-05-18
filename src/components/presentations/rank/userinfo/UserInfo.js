import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../../../state/reducer/rank/rank';
import { maxExp } from '../../../../share/exp';
import Level from '../../../../share/Level';
import { Won } from '../../../../share/convertWon';
import ExpBar from './ExpBar';

function Userinfo({ Info }) {
  const userData = useSelector((state) => state.rank.userInfo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUserInfo(1));
  }, [dispatch]);

  return (
    <div className="w-[387px] h-[345px] flex justify-start items-start gap-[10px] m-[20px,360px,3px,20px] p-5 rounded-[10px] shadow-box bg-Neutrals-white">
      {Info && (
        <div className="w-[347px] h-[305px] flex-grow-0 flex flex-col justify-start items-center gap-[30px]">
          <div className="h-[94px] self-stretch flex-grow-0 flex justify-start items-center gap-[20px]">
            <div className=" z-[2]">
              <img
                className="w-[87px] h-[87px] rounded-full relative"
                src={
                  // eslint-disable-next-line no-nested-ternary
                  Info.imageUrl !== undefined
                    ? Info.imageUrl !== 'null'
                      ? Info.imageUrl
                      : '/images/defaultProfile/defalutProfile96.png'
                    : '/images/defaultProfile/defalutProfile96.png'
                }
                alt={Info.nickname}
              />
              <div className=" absolute top-[176px]">
                <Level Exp={Info?.exp !== undefined ? Info.exp : 0} />
              </div>
            </div>
            <div className="h-[69px] flex-grow flex flex-col justify-center items-start gap-[12px]">
              <span className="h-[29px] flex-grow-0 font-Pretendard text-[24px] font-bold text-left text-Neutrals-deepGray">
                {Info?.nickname !== undefined ? Info.nickname : 0}
              </span>
              <div className="h-[28px] self-stretch flex-grow-0 flex flex-col justify-start items-start">
                <ExpBar exp={Info?.exp !== undefined ? Info.exp : 0} />
                <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-right text-Neutrals-gray">
                  <span className="text-Neutrals-black">
                    {Info?.exp !== undefined ? Info.exp : 0}xp
                  </span>
                  /{maxExp(Info?.exp !== undefined ? Info.exp : 0)}
                  xp
                </span>
              </div>
            </div>
          </div>
          <div className="w-[304px] h-[48px] flex-grow-0 flex justify-start items-start gap-[32px]">
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple">
                {Info?.myRank !== undefined ? Info.myRank : 0}위
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                현재랭킹
              </span>
            </div>
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                {Info?.highRank !== undefined ? Info.highRank : 0}위
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                최고 기록
              </span>
            </div>
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                {Info?.follower !== undefined ? Info.follower : 0}
              </span>
              <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                팔로워
              </span>
            </div>
            <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
              <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                {Info?.following !== undefined ? Info.following : 0}
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
                {Info?.fluctuationRate !== undefined ? Info.fluctuationRate : 0}%
              </span>
              <span className="h-[15px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                {Won(Info?.totalBalance !== undefined ? Info.totalBalance : 0)}원
              </span>
              <span className="h-[15px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray ">
                {Info?.resetCount !== undefined ? Info.resetCount : 0}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userinfo;
