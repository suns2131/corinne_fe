import { memo } from 'react';

function Wrapper({children}) {
    return (
    <div className="max-w-[1000px]">
        <video className='fixed bg-cover' src="/images/corinne_background.mp4" autoPlay loop muted /> 
        {children}
    </div>
    )
}

export default memo(Wrapper);