import React from 'react';

function Login({ kakaoRedirectUrl }) {
  return (
    <div className="w-[183px] h-[45px] mt-[189px]">
      <a className="cursor-pointer" href={kakaoRedirectUrl}>
        <img alt="카카오로그인" src="/images/kakao_login_medium_narrow.png" />
      </a>
    </div>
  );
}

export default Login;
