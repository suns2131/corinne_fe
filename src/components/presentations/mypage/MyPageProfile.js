import { memo } from 'react';
import styles from './mypage.module.css';

function MyPageProfile({ userInfo, goChangeProfile }) {
  if (!userInfo) return null;
  const { userEmail, nickname, exp } = userInfo;
  return (
    <div className="flex col-span-2 shadow-box rounded-lg p-5">
      <section className="w-[182px] h-[182px] bg-slate-400 rounded-full">
        <img alt="프로필 이미지" />
      </section>
      <section className="ml-5">
        <p className="text-Neutrals-deepGray text-bold text-[32px] ">{nickname}</p>
        <div className="border-[1px] flex w-[72px] items-center py-[3px] px-[6px] rounded-[20px] mt-5 mb-3">
          <div className="w-[14px] h-[14px] bg-Level-red rounded-full inline-block" />
          <span className="text-[12px] ml-1 text-Neutrals-black">Lv.레드</span>
        </div>
        <div>
          <progress className={styles.progress} value={exp} max="5000" />
          <span className="ml-3">{exp} / 5000xp</span>
        </div>
        <div className="inline-block text-Neutrals-black">
          <p>이름(실명)</p>
          <p>원동환</p>
        </div>
        <div className="inline-block ml-[25px]">
          <p className="text-Neutrals-gray">카카오 계정</p>
          <span className="text-Neutrals-gray">{userEmail}</span>
          <button type="button" onClick={goChangeProfile} className="relative left-[180px]">
            프로필 편집
          </button>
        </div>
      </section>
    </div>
  );
}

export default memo(MyPageProfile);
