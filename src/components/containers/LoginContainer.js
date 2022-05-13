import React, {useCallback, useState, useEffect, useRef} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { login } from '../../state/reducer/user';
import { selectedUserName, selectLoginStatus } from '../../state/reducer/user/selectors';
import { signUp } from '../../state/reducer/user/thunk';

import LoginCheck from '../../share/LoginCheck';
import FirstLoginForm from '../presentations/login/FirstLoginForm';


function LoginContainer(){
    const dispatch = useDispatch();

    const status = useSelector(selectLoginStatus);
    const selectUserName = useSelector(selectedUserName);

    const [loginStatusText, setLoginStatusText] = useState('')
    const [loginStatus, setLoginStatus] = useState(false);

    const handleClickLoginSuccess = useCallback(() => {
        if(selectUserName.length < 2 || selectUserName.length > 8){
            setLoginStatusText('글자수를 확인해주세요');
        }else{
            dispatch(signUp(selectUserName))
        }
    }, [dispatch, selectUserName])

    const handeChangeUserName = useCallback((e) => {
        dispatch(login(e.target.value));
    }, [dispatch])

    useEffect(() => {
        if(selectUserName.length > 2 && selectUserName.length < 8){
            setLoginStatus(true)
        }else{
            setLoginStatus(false);
        }
    }, [selectUserName])

    useEffect(() => {
        if(status === 'error'){
            setLoginStatusText('닉네임이 중복입니다.')
        }
        if(status === 'success'){
            setLoginStatusText('')
        }
    }, [loginStatus, status])

    return (
        <LoginCheck>
            <FirstLoginForm 
                handeChangeUserName={handeChangeUserName}
                handleClickLoginSuccess={handleClickLoginSuccess}
                loginStatus={loginStatus}
                loginStatusText={loginStatusText}
                />
        </LoginCheck>
    )
}

export default LoginContainer;