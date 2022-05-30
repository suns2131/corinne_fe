import React from 'react';
import styles from './Help.module.css';

function Help({ type }) {
  const helptype = type;
  if (helptype === 'prevRank') {
    return (
      <div className="flex justify-center items-start ">
        <div className={styles.arrow} />
        <div className="p-5 gap-[16px] rounded-[12px] shadow-help bg-Neutrals-black">
          <div className="flex-grow-0 flex flex-col justify-start items-start gap-[8px]">
            <span className="flex-grow-0 font-Pretendard text-[12px] font-bold text-left text-Neutrals-white">
              주간 모의투자 랭킹
            </span>
            <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray leading-5">
              주간 모의투자 랭킹은 일주일마다 총 자산 기준으로 순위가 책정되며,
              <br />
              매주 월요일 AM 9:00 마다 총 자산이 초기화됩니다.
              <br />
              (순위 책정 기간 : 월요일 AM 9:00 ~ 다음주 월요일 AM 8:59)
              <br />
              <br />
              랭킹 순위에 따라 보상이 지급됩니다.
              <br />
              <span className="text-[#ffce85]">
                🥇 경험치 30,000xp + 원화 2,000,000원
                <br />
                🥈 경험치 20,000xp + 원화 1,500,000원
                <br />
                🥉 경험치 10,000xp + 원화 1,200,000원
                <br />
              </span>
              👥 참여자 전원 <span className="text-[#ffce85]">경험치 5,000xp</span> 지급
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(참여자 기준: 매수, 매도 이력이 있는 사람)
              <br />
              <br />
              <span className="text-[#ff450def]">
                **보상으로 지급되는 원화는 실제원화가 아닌, corinne 가상 원화입니다
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (helptype === 'match') {
    return (
      <div className="flex justify-center items-start ">
        <div className={styles.arrow} />
        <div className="w-[245px] h-[215px] p-5 gap-[16px] rounded-[12px] shadow-help bg-Neutrals-black">
          <div className="flex-grow-0 flex flex-col justify-start items-start gap-[8px]">
            <span className="flex-grow-0 font-Pretendard text-[12px] font-bold text-left text-Neutrals-white">
              1:1 랜덤 배틀
            </span>
            <span className="flex-grow-0 font-Pretendard text-[12px] text-left text-Neutrals-lightGray leading-5">
              본인과 같은 레벨의 회원 중 한명과 랜덤으로
              <br />
              매치되어 일주일동안 수익률 배틀을 합니다.
              <br />
              <br />
              모의투자 랭킹과 상관없이 1:1 랜덤 배틀에서
              <br />
              승리하면 보상으로{' '}
              <span className="text-[#ffce85]">
                경험치 10,000xp,
                <br /> 원화 500,000원
              </span>
              을 획득하게됩니다.
              <br />
              <br />
              패배할 경우, 패널티는 없습니다.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Help;
