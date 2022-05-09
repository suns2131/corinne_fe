import React from 'react'
import Headers from '../../../components/shared/Headers/container/Headers'

function Wrapper({children}) {
    return (
    <div className='w-full h-full bg-[#fbfbfb]'>
        <div className=" w-container m-auto bg-[#ffffff] ">
            <div className=" h-header">
                <Headers />
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
    )
}

export default Wrapper