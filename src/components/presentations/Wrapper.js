import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Footers from '../../share/footers/Footers';
import Headers from '../../share/headers/Headers';
import { selectedUserInfo } from '../../state/reducer/user/selectors';

const headerMenu = [
  { key: 'transaction', pathname: '/transaction', menu: '모의투자' },
  { key: 'rankpage', pathname: '/rankpage', menu: '랭킹' },
];

function Wrapper({ children }) {
  const router = useRouter();
  const userinfo = useSelector(selectedUserInfo);

  const goNickname = useCallback(() => {
    router.push({
      pathname: router.pathname,
      query: { progress: 'nickname' },
    });
  }, [router]);

  const handleRouter = useCallback(
    (path) => () => {
      if (!userinfo.firstLogin) window.location.replace(path);
      else goNickname();
    },
    [goNickname, userinfo],
  );

  return (
    <div className={router.pathname === '/' ? 'w-full h-full' : 'w-full h-full bg-Neutrals-ivory'}>
      <div className=" w-container m-auto">
        <div className=" h-header mb-[1.5em] ">
          <Headers handleRouter={handleRouter} router={router} headerMenu={headerMenu} />
        </div>
        <div>{children}</div>
      </div>
      <div className={router.pathname === '/' ? 'hidden' : ''}>
        <Footers />
      </div>
      <div
        className={
          router.pathname === '/' ? 'absolute top-0 min-w-full min-h-full -z-50' : 'hidden'
        }
        style={{ backgroundImage: "url('/images/corinne_background.gif')" }}
      />
    </div>
  );
}
export default Wrapper;
