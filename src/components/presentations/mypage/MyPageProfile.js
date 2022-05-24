import { memo } from 'react';
import styled from '@emotion/styled';
import { checkLevelColor, maxExp } from '../../../share/exp';
import Level from '../../../share/Level';
import styles from './mypage.module.css';

function MyPageProfile({ userInfo, goChangeProfile }) {
  if (!userInfo) return null;
  const { userEmail, nickname, exp, imageUrl } = userInfo;
  const { colorCss } = checkLevelColor(exp);
  return (
    <div className="flex col-span-2 rounded-lg">
      <section className="w-[182px] h-[182px] rounded-full">
        <img
          className="w-[182px] h-[182px] rounded-full"
          alt="프로필 이미지"
          src={imageUrl === 'null' ? '/images/defaultProfile/defalutProfile180.png' : imageUrl}
        />
      </section>
      <section className="ml-5">
        <p className="text-Neutrals-deepGray font-bold text-[32px] ">{nickname}</p>
        <Level Exp={exp} />
        <div className="flex items-center">
          <LevelProgress colorCss={colorCss} value={exp} max={maxExp(exp)} />
          <p className="ml-3 text-Neutrals-gray">
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

const LevelProgress = styled.progress`
  -webkit-appearance: none;
  width: 400px;
  height: 11px;
  ::-webkit-progress-bar {
    background-color: #eeeeee;
    border-radius: 10px;
  }
  ::-webkit-progress-value {
    background-color: ${(props) => props.colorCss};
    border-radius: 10px;
  }
`;
