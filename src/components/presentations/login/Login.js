import React from 'react';

function Login({ kakaoRedirectUrl, isLogin, goToTransaction }) {
  return (
    <div>
      {isLogin ? (
        <button
          type="button"
          onClick={goToTransaction}
          className="bg-white text-Primary-purple text-sm w-[183px] h-[45px] mt-[189px] cursor-pointer rounded-[10px]"
        >
          모의투자 바로가기
        </button>
      ) : (
        <div className="w-[183px] h-[45px] mt-[189px]">
          <a className="cursor-pointer" href={kakaoRedirectUrl}>
            <img alt="카카오로그인" src="/images/kakao_login_medium_narrow.png" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Login;
