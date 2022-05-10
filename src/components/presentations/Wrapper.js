import { memo } from 'react';

function Wrapper({children}) {
    return (
    <div>
        <video className='fixed top-0 right-0 bottom-0 min-w-full min-h-full' src="/images/corinne_background.mp4" autoPlay loop muted /> 
        {children}
    </div>
    )
}

export default memo(Wrapper);