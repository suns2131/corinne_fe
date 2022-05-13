import React, { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router';

import Headers from '../../../components/shared/Headers/container/Headers';

function Wrapper({children}) {
    const router = useRouter();

    const handleRouter = useCallback((path) => () => {
        router.push(path)
    }, [router])
    return (
    <div className='w-full h-full bg-[#fbfbfb]'>
        <div className=" w-container m-auto bg-[#ffffff] ">
            <div className=" h-header" />
            <Headers handleRouter={handleRouter} router={router} />
            <div>
                {children}
            </div>
        </div>
    </div>
    )
}
export default Wrapper
