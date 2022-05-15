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
    <div className="w-full h-full bg-[#fbfbfb]">
      <div className=" w-container m-auto bg-[#ffffff] ">
        <div className=" h-header" />
        <Headers handleRouter={handleRouter} router={router} />
        <div>{children}</div>
      </div>
      <Footers />
    </div>
  );
}
export default Wrapper;
