import React, {useCallback, useState, useEffect, useRef} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../state/reducer/user';
import { selectLoginStatus } from '../../state/reducer/user/selectors';
import { signUp } from '../../state/reducer/user/thunk';
import FirstLoginForm from '../presentations/login/FirstLoginForm';
import Wrapper from '../presentations/Wrapper';

function LoginContainer(){
    const dispatch = useDispatch();
    const userNameRef = useRef();

    const status = useSelector(selectLoginStatus);

    const [loginStatusText, setLoginStatusText] = useState('')
    const [loginStatus, setLoginStatus] = useState(false);

    const handleClickLoginSuccess = useCallback(() => {
        const userName = userNameRef.current.value;
        if(userName.length < 2 || userName.length > 8){
            setLoginStatusText('글자수를 확인해주세요');
        }else{
            dispatch(signUp(userName))
        }
    }, [dispatch, userNameRef])

    useEffect(() => {
        if(status === 'error'){
            setLoginStatusText('닉네임이 중복입니다.')
        }
        if(status === 'success'){
            setLoginStatusText('')
        }
    }, [loginStatus, status])

    return (
        <Wrapper>
            <FirstLoginForm 
            userNameRef={userNameRef}
            handleClickLoginSuccess={handleClickLoginSuccess}
            loginStatus={loginStatus}
            loginStatusText={loginStatusText}
            />
        </Wrapper>
    )
}

export default LoginContainer;