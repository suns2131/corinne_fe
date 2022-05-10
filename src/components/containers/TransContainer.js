import React from 'react';
import Transaction from "../presentations/transaction/Transaction";
import Wrapper from "../presentations/Wrapper";
import ChattingContainer from './Transaction/chattingContainer';

function TransContainer() {
    return (
        <Wrapper >
            <div className='flex '>
                <div>
                    <ChattingContainer />
                </div>
                <div />
            </div>
        </Wrapper>
    );
}


export default TransContainer;