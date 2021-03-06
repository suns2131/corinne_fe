/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Level from '../../../../share/Level';
import ExpBar from '../userinfo/ExpBar';
import { maxExp } from '../../../../share/exp';
import TradeList from '../../../../share/myalarm/tradelist';
import Closeicon from '../../../../../public/icons/close.svg';
import { getTargetInfo } from '../../../../state/reducer/rank/thunk';
import { Won } from '../../../../share/convertWon';
import { getTargetTransaction } from '../../../../state/reducer/user/thunk';
import { selectedTargetTransaction } from '../../../../state/reducer/user/selectors';

function UserProfile({ profile, setClose }) {
  const dispatch = useDispatch();
  const targetinfo = useSelector((state) => state.rank.targetInfo);
  const targetTransaction = useSelector(selectedTargetTransaction);

  useEffect(() => {
    dispatch(getTargetInfo(profile.userId));
    const followId = profile.userId;
    dispatch(getTargetTransaction({ followId }));
  }, [dispatch, profile.userId]);

  if (profile === null) return null;
  return (
    <div>
      <div className=" h-[69px] self-stretch flex-grow-0 flex justify-start items-start p-5 sahdow-box bg-Neutrals-white rounded-t-[10px]">
        <div className="w-full h-[29px] flex-gorw flex justify-between items-center">
          <span className="h-[29px] flex-grow-0 font-Pretendard text-[16px] font-bold text-left text-Neutrals-black">
            프로필 및 거래내역
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setClose({ isopen: false, userId: '' });
          }}
        >
          <Closeicon />
        </button>
      </div>
      <div className="flex-grow flex flex-col justify-start items-stretch p-5 shadow-box bg-Neutrals-white rounded-b-[10px]">
        <div className="w-[44.375em] h-[27.938em] flex-grow-0 flex flex-row justify-start items-start">
          <div className="flex flex-col">
            <div className="w-[21.688em] h-[10.375em] flex flex-col justify-start items-center gap-[1.875em] mr-5 ">
              <div className="h-[94px] self-stretch flex-grow-0 flex justify-start items-center gap-[20px] ">
                <div className=" z-[2] relative">
                  <img
                    className="w-[87px] h-[87px] rounded-full"
                    src={
                      targetinfo.imageUrl !== 'null'
                        ? targetinfo.imageUrl
                        : '/images/defaultProfile/defalutProfile180.webp'
                    }
                    alt="defaultProfile"
                  />
                  <div className="absolute top-[75%] w-[100%]">
                    <div className="flex justify-center items-center">
                      <Level Exp={targetinfo.exp} />
                    </div>
                  </div>
                </div>
                <div className="h-[69px] flex-grow flex flex-col justify-center items-start gap-[12px]">
                  <div className="w-[240px] h-[32px] flex justify-between items-start ">
                    <span className="h-[32px] flex-grow-0 font-Pretendard text-[24px] font-bold text-left text-Neutrals-deepGray">
                      {targetinfo.nickname}
                    </span>
                  </div>
                  <div className="h-[28px] self-stretch flex-grow-0 flex flex-col justify-start items-start">
                    <ExpBar exp={targetinfo.exp} />
                    <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-right text-Neutrals-gray">
                      <span className="text-Neutrals-black">{targetinfo.exp}xp</span>/
                      {maxExp(targetinfo.exp)}
                      xp
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[347px] h-[48px] flex-grow-0 flex justify-center items-start gap-[32px]">
                <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                  <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Primary-purple">
                    {targetinfo.myRank}위
                  </span>
                  <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                    현재랭킹
                  </span>
                </div>
                <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                  <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                    {targetinfo.highRank}위
                  </span>
                  <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                    최고 기록
                  </span>
                </div>
                <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                  <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                    {targetinfo.follower}
                  </span>
                  <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                    팔로워
                  </span>
                </div>
                <div className="w-[52px] h-[48px] flex-grow-0 flex flex-col justify-start items-center gap-[10px]">
                  <span className="h-[18px]  flex-grow-0 font-Pretendard text-[15px] font-bold text-center text-Neutrals-black">
                    {targetinfo.following}
                  </span>
                  <span className="h-[20px] flex-grow-0 font-Pretendard text-[12px] text-center text-Neutrals-gray">
                    팔로잉
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[21.688em] h-[13.188em] flex-grow-0 flex justify-start items-start gap-[13%] p-5 rounded-[10px] border border-solid border-Neutrals-lightGray2 mt-[1.875em]">
              <div className="w-[110px] h-[69px] flex flex-col justify-between items-start gap-[9px] ">
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                  수익률
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                  총 자산
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                  매수한 자산
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                  1:1 랜덤배틀
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                  주간 랭킹 참여
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[14px] text-left text-Neutrals-gray">
                  리셋 횟수
                </span>
              </div>
              <div className="w-[160px] h-[69px] flex flex-col justify-between items-end gap-[9px] ">
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] font-bold text-right text-Primary-purple2">
                  {targetinfo.fluctuationRate}%
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard font-bold text-[15px] text-right text-Neutrals-black">
                  {Won(targetinfo?.totalBalance !== undefined ? targetinfo.totalBalance : 0)}원
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                  {Won(targetinfo?.accountBalance !== undefined ? targetinfo.accountBalance : 0)}원
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                  {targetinfo?.draw !== undefined
                    ? targetinfo.draw !== null
                      ? targetinfo.draw
                      : 0
                    : 0}
                  무{' '}
                  {targetinfo?.win !== undefined
                    ? targetinfo.win !== null
                      ? targetinfo.win
                      : 0
                    : 0}
                  승{' '}
                  {targetinfo?.lose !== undefined
                    ? targetinfo.lose !== null
                      ? targetinfo.lose
                      : 0
                    : 0}
                  패
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-black">
                  {targetinfo.participation}회
                </span>
                <span className="h-[21px] flex-grow-0 font-Pretendard text-[15px] text-right text-Neutrals-lightGray ">
                  {targetinfo.resetCount}
                </span>
              </div>
            </div>
          </div>
          <div className="w-[303px] h-[407px] flex-grow-0 flex flex-col justify-start items-stretch gap-[10px] p-5 rounded-[10px] bg-Neutrals-whiteGray ml-[20px] overflow-x-hidden scrollbar-none">
            {targetTransaction &&
              targetTransaction.content.map((el) => <TradeList type={el.type} tradeData={el} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
