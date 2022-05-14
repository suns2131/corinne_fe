import React from 'react'
import Footers from '../../share/footers/Footers'
import Headers from '../../share/headers/Headers'

function Wrapper({children}) {
    return (
    <div className='w-full h-full bg-Neutrals-ivory'>
      <div className=" w-container m-auto">
        <Headers />
        <div>
          {children}
        </div>
      </div>
      <Footers />
    </div>
    )
}
export default Wrapper
