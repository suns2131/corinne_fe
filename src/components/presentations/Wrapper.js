import React from 'react'
import Headers from '../../../components/shared/Headers/container/Headers'

function Wrapper({children}) {
    return (
    <div className=" w-container m-auto ">
        <div className=" h-headers bg-white">
            <Headers />
        </div>
        <div className=" bg-white">
            {children}
        </div>
    </div>
    )
}

export default Wrapper