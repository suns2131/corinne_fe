import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Quest from '../quest/Quest';
import Alarms from './Alarms';
import styles from './MyAlarm.module.css';
import { QuestData } from '../quest/questData';
import axiosInstance from '../../data/axios';
import { getUserAlarm, getUserQuest, patchQuest } from '../../state/reducer/rank/thunk';

function MyAlarm() {
  const dispatch = useDispatch();
  const [type, setType] = useState(true);
  const AlramData = useSelector((state) => state.rank.userAlarm);
  const QuestNo = useSelector((state) => state.rank.userQuest);
  console.log(AlramData);
  console.log(QuestNo);
  useEffect(() => {
    dispatch(getUserAlarm());
    dispatch(getUserQuest());
  }, [dispatch]);

  const questResult = (questNo) => {
    console.log(`questNo: ${questNo}`);
    dispatch(patchQuest(questNo));
    dispatch(getUserQuest());
  };

  return (
    <div className="w-[440px] h-[560px] flex flex-col items-end relative z-50 ">
      <div className={styles.arrow} />
      {/* 내소식 */}
      {type ? (
        <div>
          <div className="w-[440px] h-[552px] rounded-[10px] gap-[10px] shadow-box flex-grow-0 pt-5 bg-Neutrals-white">
            <button
              className="w-[400px] h-[58]px bg-Primary-purple rounded-[10px] flex-grow-0 p-5 gap-[10px] flex flex-col items-start  mx-5"
              type="button"
              onClick={() => {
                setType(false);
              }}
            >
              <div className="w-[360px] h-[18px] flex justify-between items-center gap-[50px] self-stretch flex-grow-0 font-Pretendard font-bold text-[15px] text-Neutrals-white">
                <span className="w-[291px] h-[18px]  flex justify-start items-center ">
                  🎁 튜토리얼 퀘스트 바로가기
                </span>
                <span>&gt;</span>
              </div>
            </button>
            <div className="w-[440px] h-[472px] overflow-y-auto overflow-x-hidden scrollbar-none">
              {AlramData && AlramData.map((el) => <Alarms alData={el} />)}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="w-[440px] h-[552px] rounded-[10px] gap-[10px] shadow-box flex-grow-0 px-5 pt-5 bg-Neutrals-white">
            <button
              className="flex-grow-0 gap-[10px] flex flex-col items-start"
              type="button"
              onClick={() => {
                setType(true);
              }}
            >
              <div className={styles.arrowprev} />
            </button>
            <div className="w-[400px] h-[472px] overflow-y-auto overflow-x-hidden scrollbar-none">
              {QuestNo &&
                QuestNo.map((el) => (
                  <Quest
                    type={el.clear}
                    resultQuest={QuestData(el.questNo)}
                    questResult={questResult}
                    questNo={el.questNo}
                  />
                ))}
            </div>
          </div>
        </div>
      )}

      {/* 내소식 - 퀘스트 */}
    </div>
  );
}

export default MyAlarm;
