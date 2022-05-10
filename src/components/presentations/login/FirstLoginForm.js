import { memo } from 'react';

function FirstLoginForm({
    userNameRef, 
    handleClickLoginSuccess, 
    loginStatusText,
    loginStatus,
}) {
    return (
        <div 
            style={{ 
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
            className="top-0 absolute mx-auto w-[440px] h-[600px] bg-white text-center">
            <h1>프로필 설정</h1>
            <span>설정 후 마이페이지에서 재변경이 가능합니다.</span>
            <div className="w-[180px] h-[180px] rounded-full mx-auto bg-gray-50">
                <img alt="프로필 이미지" />
            </div>
            <input ref={userNameRef} className="w-[340px] mx-auto block" placeholder="닉네입 입력하기" />
            <p>한글 or 영문 최소 2자, 최대 8자 입력 가능</p>
            <p>{loginStatusText}</p>
            <button 
                onClick={handleClickLoginSuccess} 
                type="button" 
                className={loginStatus 
                    ? 'bg-[#6800BA] block w-[340px] h-[45px] mx-auto text-white'
                    : 'block w-[340px] h-[45px] bg-[#BDBDBD] mx-auto'
                }
            >
                가입완료
            </button>
        </div>
    )
}

export default memo(FirstLoginForm)