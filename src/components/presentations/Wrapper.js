import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import Footers from '../../share/footers/Footers';
import Headers from '../../share/headers/Headers';

function Wrapper({ children }) {
  const router = useRouter();

  const handleRouter = useCallback(
    (path) => () => {
      router.push(path);
    },
    [router],
  );
  return (
    <div className="w-full h-full">
      <div className=" w-container m-auto">
        <div className=" h-header" />
        <Headers handleRouter={handleRouter} router={router} />
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
