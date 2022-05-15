import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Rank.module.css';
import { getMatchUp } from '../../../state/reducer/rank/rank';

function RankMatch() {
  const [matchRank, setMatchRank] = useState(false);
  const dispatch = useDispatch();
  const matchData = useSelector((state) => state.rank.matchup);
  React.useEffect(() => {
    dispatch(getMatchUp());
  }, [dispatch]);

  return (
    <div>
      {matchData && (
        <div className="w-[387px] h-[100px] mb-5 rounded-[10px] flex">
          <div className="w-[164.5px] h-[100px] bg-curp rounded-tl-[10px] rounded-bl-[10px] flex flex-col justify-center items-center">
            <div className="flex justify-center item_center">
              <div className="w-[12.8px] h-[12.8px] bg-slate-500 rounded-full mr-[5.6px]" />
              <p className="font-bold text-[12px] text-[#ffffff]">{matchData?.winner?.nickname}</p>
            </div>
            <p className="font-bold text-[20px] text-[#ffffff]">
              {matchData?.winner?.fluctuationRate}%
            </p>
          </div>
          <div className={styles.matchs} />
          <div className="w-[164.5px] h-[100px] bg-[#33323f] rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center items-center">
            <div className="flex justify-center item_center">
              <div className="w-[12.8px] h-[12.8px] bg-slate-500 rounded-full mr-[5.6px]" />
              <p className="font-bold text-[12px] text-[#ffffff]">{matchData?.loser?.nickname}</p>
            </div>
            <p className="font-bold text-[20px] text-[#ffffff]">
              {matchData?.loser?.fluctuationRate}%
            </p>
          </div>
          <div
            className=" absolute left-[80%] top-[58%]"
            onMouseEnter={() => {
              setMatchRank(true);
            }}
            onMouseLeave={() => {
              setMatchRank(false);
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00004 14.6668C11.6667 14.6668 14.6667 11.6668 14.6667 8.00016C14.6667 4.3335 11.6667 1.3335 8.00004 1.3335C4.33337 1.3335 1.33337 4.3335 1.33337 8.00016C1.33337 11.6668 4.33337 14.6668 8.00004 14.6668Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.77315 9V8.86003C7.77315 8.40669 8.05317 8.16668 8.33317 7.97335C8.6065 7.78668 8.8798 7.54669 8.8798 7.10669C8.8798 6.49336 8.38649 6 7.77315 6C7.15982 6 6.6665 6.49336 6.6665 7.10669"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.77026 10.5933H7.77626"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {matchRank && (
            <div className=" absolute w-[245px] h-[218px] left-[82%] top-[50%] bg-[#33323f] p-5 rounded-[12px] shadow-008">
              <p className="font-bold text-[12px] text-[#ffffff] mb-[8px]">1:1 랜덤배틀</p>
              <p className="font-bold text-[12px] text-[#cecece] mb-[8px]">
                본인과 같은 레벨의 회원 중 한명과 랜덤으로
                <br />
                매치되어 일주일동안 수익률 배틀을 합니다.
                <br />
                <br />
                모의투자 랭킹과 상관없이 1:1 랜덤 배틀에서
                <br />
                승리하면 보상으로{' '}
                <span className="text-[12px] text-[#ffce85]">경험치 5,000xp,</span>
                <br />
                <span className="text-[12px] text-[#ffce85]">원화 100,000원</span>을 획득하게됩니다.
                <br />
                <br />
                패배할 경우, 패널티는 없습니다.
                <br />
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default RankMatch;
