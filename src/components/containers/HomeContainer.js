import { useEffect, useCallback } from "react"

import { useDispatch } from 'react-redux';
import { useRouter } from "next/router"

import Wrapper from "../presentations/Wrapper";
import { login } from '../../state/reducer/user';
import Login from '../presentations/login/Login';
import HomeText from "../presentations/home/homeText";
// import { kakaoLogin } from "../../state/reducer/user/thunk";

export default function HomeContainer() {
    const router = useRouter();
    const { code } = router.query;

    const kakaoRedirectUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URL}&response_type=code`;
    const dispatch = useDispatch();
    const kakaoKey = process.env.NEXT_PUBLIC_KAKAO_JSKEY;

    const kakaoLoginHandler = useCallback((response) => {
        const { id } = response.profile;
        const { email } = response.profile.kakao_account;
    }, [])

    useEffect(() => {
      if(code !== 'undefined'){
        console.log(code);
      }
    }, [code])

  return (
    <Wrapper>
        <Login
          onSuccess={kakaoLoginHandler}
          kakaoKey={kakaoKey}
          kakaoRedirectUrl={kakaoRedirectUrl}
        />
        <HomeText />
    </Wrapper>
  )
}
