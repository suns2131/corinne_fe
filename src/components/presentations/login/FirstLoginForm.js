import { memo } from 'react';

function FirstLoginForm({
  profileImgRef,
  profileImgPreview,
  goNextProgress,
  goBackPage,
  handleProfileImgUpload,
  handleClickProfileImg,
}) {
  console.log(profileImgPreview);
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
        className="top-0 absolute mx-auto w-[440px] h-[381px] bg-white shadow-box rounded-[10px]"
      >
        <div className="h-[93px] border-b">
          <div className="p-5">
            <div className="flex justify-between items-center">
              <span className="font-bold">
                닉네임<span className="text-Primary-purple">(필수)</span>
              </span>
              <button type="button" onClick={goBackPage}>
                X
              </button>
            </div>
            <pre className=" font-Pretendard text-Nuetrals-black">
              설정 후 마이페이지에서 재변경이 가능합니다.
            </pre>
          </div>
        </div>
        <div className="w-[180px] h-[180px] rounded-full mx-auto bg-gray-50 my-5">
          <img
            className="w-[180px] h-[180px] rounded-full"
            role="presentation"
            onClick={handleClickProfileImg}
            src={profileImgPreview || '/images/defaultProfile180.png'}
            alt="프로필 이미지"
          />
          <input
            ref={profileImgRef}
            onChange={handleProfileImgUpload}
            id="profileImg"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
          />
        </div>
        <div className="px-5">
          <button
            onClick={goNextProgress}
            type="button"
            className="bg-[#6800BA] w-full h-[45px] mx-auto text-white rounded-[10px]"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(FirstLoginForm);
