import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setCookie } from '../../../src/share/cookie';
import { isFirstLogin } from '../../../src/state/reducer/user';

export default function KakaoCallback() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { code } = router.query;
  useEffect(() => {
    if (code !== undefined) {
      axios({
        baseURL: 'http://13.125.232.165:8082/user/kakao/callback',
        headers: {
          'content-type': 'application/json; charset=UTF-8',
          accept: 'application/json',
        },
        withCredentials: false,
        method: 'post',
        data: {
          authCode: code,
        },
      }).then((res) => {
        const token = res.headers.authorization.split(' ')[1];
        dispatch(isFirstLogin(res.data));
        console.log(res.data);
        setCookie({ name: 'corinne', value: token });
        if (res.data) {
          router.push('/');
        } else {
          router.push({
            pathname: '/',
            query: { progress: 'image' },
          });
        }
      });
    }
  }, [router, code, dispatch]);
  return null;
}
