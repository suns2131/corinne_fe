import { memo } from 'react';
import { maxExp } from '../../../share/exp';
import Level from '../../../share/Level';
import styles from './mypage.module.css';

function MyPageProfile({ userInfo, goChangeProfile }) {
  if (!userInfo) return null;
  const { userEmail, nickname, exp, imageUrl } = userInfo;
  return (
    <div className="flex col-span-2 rounded-lg">
      <section className="w-[182px] h-[182px] rounded-full">
        <img
          className="w-[182px] h-[182px] rounded-full"
          alt="프로필 이미지"
          src={imageUrl || '/images/defaultProfile180.png'}
        />
      </section>
      <section className="ml-5">
        <p className="text-Neutrals-deepGray text-bold text-[32px] ">{nickname}</p>
        <Level Exp={exp} />
        {/* <div className="border-[1px] flex w-[72px] items-center py-[3px] px-[6px] rounded-[20px] mt-5 mb-3">
          <div className="w-[14px] h-[14px] bg-Level-red rounded-full inline-block" />
          <span className="text-[12px] ml-1 text-Neutrals-black">Lv.레드</span>
        </div> */}
        <div className="flex items-center">
          <progress className={styles.progress} value={exp} max="320000" />
          <p className="ml-3">
            {exp}xp / {maxExp(exp)}xp
          </p>
        </div>
        <div className="inline-block text-Neutrals-black mt-10">
          <p>카카오 계정</p>
        </div>
        <div className="inline-block ml-[25px]">
          <span className="text-Neutrals-gray">{userEmail}</span>
        </div>
        <button type="button" onClick={goChangeProfile} className="relative left-[240px]">
          <img className="w-[24px] h-[24px]" alt="프로필 편집" src="/icons/edit.png" />
        </button>
      </section>
    </div>
  );
}

export default memo(MyPageProfile);
