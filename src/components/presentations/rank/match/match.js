import React, { useState } from 'react';
import Image from 'next/image';
import styles from './match.module.css';
import Boxing from '../../../../../public/icons/Boxing.svg';
import Hoveron from '../../../../../public/icons/help/helpon.svg';
import Hoveroff from '../../../../../public/icons/help/helpnone.svg';
import Help from '../help/Help';

function MatchOne({ Info, matchs }) {
  const [matchRank, setMatchRank] = useState(false);

  return (
    <div className=" w-[387px] h-[100px] rounded-[10px] bg-Neutrals-black flex justify-start items-center mt-[20px] ">
      <div className="w-[143px] h-[100px] bg-Primary-purple rounded-tl-[10px] rounded-bl-[10px] flex flex-col justify-center items-center">
        <div className="flex justify-center item_center">
          <img
            className="w-[16px] h-[16px] rounded-full mr-[4px] relative"
            src={
              // eslint-disable-next-line no-nested-ternary
              matchs.imageUrl !== undefined
                ? matchs.imageUrl !== 'null'
                  ? matchs.imageUrl
                  : '/images/defaultProfile/defalutProfile96.png'
                : '/images/defaultProfile/defalutProfile96.png'
            }
            alt={matchs.nickname}
          />
          <span className="h-[14px] flex-grow-0 flex justify-center items-center font-Pretendard text-[12px] font-bold text-left text-Neutrals-white">
            {matchs?.nickname !== undefined ? matchs.nickname : ''}
          </span>
        </div>
        <span className="h-[29px] flex-grow-0 font-Pretendard text-[20px] font-bold text-center text-Neutrals-white">
          {matchs?.rivalFluctuationRate !== undefined ? matchs.rivalFluctuationRate : 0}%
        </span>
      </div>
      <div className={styles.matchs} />
      <div className=" relative">
        <div className=" absolute right-3 top-[-35px]">
          <Boxing />
        </div>
      </div>
      <div className="w-[143px] h-[100px] bg-Neutrals-black rounded-tr-[10px] rounded-br-[10px] flex flex-col justify-center items-center">
        <div className="flex justify-center item_center">
          <span className="h-[14px] flex-grow-0 flex justify-center items-center font-Pretendard text-[12px] font-bold text-left text-Neutrals-white">
            {Info?.nickname !== undefined ? Info.nickname : ''}
          </span>
        </div>
        <span className="h-[29px] flex-grow-0 font-Pretendard text-[20px] font-bold text-center text-Neutrals-white">
          {Info?.fluctuationRate !== undefined ? Info.fluctuationRate : 0}%
        </span>
      </div>
      <div className=" relative">
        <div
          className="absolute top-[-35px] right-2"
          onMouseEnter={() => setMatchRank((prev) => !prev)}
          onMouseLeave={() => setMatchRank((prev) => !prev)}
        >
          <Hoveroff />
          {/* {matchRank ? <Hoveron /> : <Hoveroff />} */}
        </div>
      </div>
      {matchRank && (
        <div className=" absolute left-[1533px] top-[400px]">
          <Help type="match" />
        </div>
      )}
    </div>
  );
}

export default MatchOne;
