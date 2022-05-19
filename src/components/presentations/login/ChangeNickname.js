import { memo } from 'react';

function ChangeNickname({
  handleClickLoginSuccess,
  handeChangeUserName,
  loginStatusText,
  loginStatus,
}) {
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
        className="top-0 absolute mx-auto w-[400px] h-[253px] bg-white shadow-box rounded-[10px]"
      >
        <div className="h-[93px] border-b">
          <div className="p-5">
            <h1 className="font-bold">
              닉네임<span className="text-Primary-purple">(필수)</span>
            </h1>
            <pre>설정 후 마이페이지에서 재변경이 가능합니다.</pre>
          </div>
        </div>
        <div className="h-[52px] border border-Neutrals-lightGray2 m-5 rounded-[10px] flex items-center">
          <input
            onChange={handeChangeUserName}
            className="w-[340px] mx-auto block my-5"
            placeholder="닉네입 입력하기"
          />
        </div>
        <p>{loginStatusText}</p>
        <button
          onClick={handleClickLoginSuccess}
          type="button"
          className={
            loginStatus
              ? 'bg-[#6800BA] block w-[340px] h-[45px] mx-auto text-white rounded-[10px]'
              : 'block w-[340px] h-[45px] bg-[#BDBDBD] mx-auto rounded-[10px]'
          }
        >
          가입완료
        </button>
      </div>
    </div>
  );
}

export default memo(ChangeNickname);
