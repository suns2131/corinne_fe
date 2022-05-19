import { memo } from 'react';

function LoginSuccess({ goBackPage }) {
  return (
    <div
      style={{ background: 'rgba(0, 0, 0, 0.6)' }}
      className="absolute top-0 left-0 w-full h-full"
    >
      <div
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        className="top-0 absolute mx-auto w-[400px] h-[200px] bg-white shadow-box rounded-[10px]"
      >
        <div className="h-[70px] border-b">
          <h1 className="p-5 font-bold">프로필 편집 완료</h1>
        </div>
        <pre className="p-5">정상적으로 프로필 수정이 완료되었습니다.</pre>
        <div className="px-5">
          <button
            onClick={goBackPage}
            type="button"
            className="bg-[#6800BA] block w-full h-[45px] mx-auto text-white rounded-[10px]"
          >
            가입완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(LoginSuccess);
