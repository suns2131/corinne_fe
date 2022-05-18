import { memo } from 'react';

function FirstLoginForm({
  profileImgRef,
  profileImgPreview,
  goNextProgress,
  handleProfileImgUpload,
  handleClickProfileImg,
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
        className="top-0 absolute mx-auto w-[440px] h-[381px] bg-white p-5 shadow-box rounded-[10px]"
      >
        <h1>프로필 이미지</h1>
        <span>설정 후 마이페이지에서 재변경이 가능합니다.</span>
        <div className="w-[180px] h-[180px] rounded-full mx-auto bg-gray-50 my-5">
          <img
            className="w-[180px] h-[180px] rounded-full"
            role="presentation"
            onClick={handleClickProfileImg}
            src={profileImgPreview}
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
        <button
          onClick={goNextProgress}
          type="button"
          className="bg-[#6800BA] block w-[340px] h-[45px] mx-auto text-white rounded-[10px]"
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default memo(FirstLoginForm);
