import React from 'react';
import Wrapper from "../presentations/Wrapper";
import BuySellContainer from './Transaction/TrandDetailContainer';
import ChattingContainer from './Transaction/chattingContainer';
import RankContanier from './Transaction/RankContainer';
import TikerListContainer from './Transaction/TikerListContainer';

function TransContainer() {
    return (
        <Wrapper >
            <div className='flex '>
                <div className='mr-5'>
                    <RankContanier />
                    <TikerListContainer />
                    <ChattingContainer />
                </div>
                <div>
                    <BuySellContainer />
                </div>
            </div>
        </Wrapper>
    );
}


export default TransContainer;