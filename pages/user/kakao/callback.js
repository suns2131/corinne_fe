import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";
import { kakaoLogin } from "../../../src/state/reducer/user/thunk";

export default function KakaoCallback() {
    const router = useRouter();
    const dispatch = useDispatch();

    const { code } = router.query;
    useEffect(() => {
        if(code !== 'undefined'){
            axios({
                baseURL: "http://13.125.232.165:8081/user/kakao/callback",
                withCredentials: false,
                method: 'post',
                data: {
                    autoCode: code,
                }
            }).then((res) => {
                console.log(res);
                // router.push('')
            }
            )
        }
    }, [router, code])
    return null;
}