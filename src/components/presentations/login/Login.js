import React from 'react';

import KaKaoLogin from 'react-kakao-login';

function Login({ onSuccess, kakaoKey }) {
    return (
    <div>
        <KaKaoLogin
            token={kakaoKey}
            buttonText="kakao"
            onSuccess={onSuccess}
            onFail={console.error}
            onLogout={console.info}
        >
        <h3>카카오 계정으로 로그인</h3>
      </KaKaoLogin>
    </div>
    )
}

export default Login