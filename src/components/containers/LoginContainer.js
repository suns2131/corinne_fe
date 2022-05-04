import React, {useCallback, useEffect} from 'react';

import { useDispatch } from 'react-redux';
import { login } from '../../state/reducer/user';
import Login from '../presentations/login/Login';

function LoginContainer(){
    const dispatch = useDispatch();
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JSKEY;

    const kakaoLoginHandler = useCallback((response) => {
        const { id } = response.profile;
        const { email } = response.profile.kakao_account;

        console.log(response);
    }, [])

    useEffect(() => {
        dispatch(login());
    }, [dispatch])

    return (
        <Login 
        onSuccess={kakaoLoginHandler}
        kakaoKey={kakaoKey}
        />
    )
}

export default LoginContainer;