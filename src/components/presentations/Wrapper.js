import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Footers from '../../share/footers/Footers';
import Headers from '../../share/headers/Headers';

const headerMenu = [
  { key: 'transaction', pathname: '/transaction', menu: '모의투자' },
  { key: 'rankpage', pathname: '/rankpage', menu: '랭킹' },
];

function Wrapper({ children }) {
  const router = useRouter();

  const handleRouter = useCallback(
    (path) => () => {
      window.location.replace(path);
    },
    [],
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
