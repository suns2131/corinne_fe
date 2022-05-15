import { memo } from 'react';

function MyPageProfile({ userInfo }) {
  if (!userInfo) return null;
  const { userEmail, nickname, exp } = userInfo;
  return (
    <div className="flex col-span-2 shadow-md rounded-lg p-5">
      <section className="w-[182px] h-[182px] bg-slate-400 rounded-full">
        <img alt="프로필 이미지" />
      </section>
      <section className="ml-5">
        <h1>{nickname}</h1>
        <div>
          <progress className="w-[430px]" max="10" />
          <span>{exp} / 5000xp</span>
        </div>
        <div className="inline-block">
          <p>이름(실명)</p>
          <p>카카오 계정</p>
        </div>
        <div className="inline-block ml-[25px]">
          <p>카카오 계정</p>
          <span>{userEmail}</span>
          <span className="relative left-[200px]">프로필 편집</span>
        </div>
      </section>
    </div>
  );
}

export default memo(MyPageProfile);
