import React from 'react';

function Login({ kakaoRedirectUrl }) {
    return (
    <div>
        <a className="ml-[200px] z-10 cursor-pointer" href={kakaoRedirectUrl}>
            <button type="button">
                카카오 계정으로 로그인
            </button>
        </a>
    </div>
    )
}

export default Login