import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Level from '../../../share/Level';
import { getfollwerRank } from '../../../state/reducer/rank/rank';
import {Won} from '../../../share/convertWon'

function RankFollow() {
    const dispatch = useDispatch();
    const followData = useSelector((state) => state.rank.followRank);
    
    React.useEffect(() => {
      dispatch(getfollwerRank())
    },[dispatch])

    return (
      <div className="mx-5 h-[618px]">
        {followData && followData.map((el) => (
          <div className="flex justify-between items-start mb-[20px]">
            <div className="flex">
              <div className="w-[60px] h-[60px] bg-slate-500 rounded-full" />
              <div>
                <div className="ml-[13px] flex justify-center items-start font-bold">
                  <p className="text-[#6800BA] text-[15px] mr-[7px]">{el.id}위</p>
                  <p>{el.nickname}</p>
                </div>
                <div className='ml-[13px] text-[12px] text-[#cecece]'>
                  <p className='mb-[5px]'>수익률</p>
                  <p>총 자산</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-center">
              <Level level={el.exp} />
              <p className="font-normal text-[12px] text-[#cecece] mb-[5px]">{el.fluctuationRate}%</p>
              <p className=" font-normal text-[12px] text-[#cecece]">{Won(el.totalBalance)}원</p>
            </div>
          </div>
          ))}
      </div>
    );
}

export default RankFollow;