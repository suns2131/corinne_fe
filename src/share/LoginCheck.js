import { useLayoutEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { getCookie } from './cookie';
import { selectedIsFirstLogin } from '../state/reducer/user/selectors';

export default function LoginCheck({ children }) {
  const router = useRouter();
  const token = getCookie({ name: 'corinne' });

  const isFirstLogin = useSelector(selectedIsFirstLogin);

  useLayoutEffect(() => {
    // if(token !== undefined) {
    //     router.push('/');
    // }
    if (isFirstLogin) {
      router.push('/');
    }
  }, [token, router, isFirstLogin]);

  return children;
}
