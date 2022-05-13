import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useInView } from "react-intersection-observer"

import { useDispatch, useSelector } from 'react-redux';

import { getUserBalance, getUserInfo, getUserTransaction } from '../../state/reducer/user/thunk';
import { selectedUserBalance, selectedUserInfo, selectedUserTransaction } from '../../state/reducer/user/selectors';

import Wrapper from '../presentations/Wrapper';
import MyPageProfile from '../presentations/mypage/MyPageProfile';
import MyPageHoldings from '../presentations/mypage/MyPageHoldings';
import MyPageHoldingCoins from '../presentations/mypage/MyPageHoldingCoins';
import MyPageHoldingPortfolio from '../presentations/mypage/MyPageHoldingPortfolio';
import MyPageTransactionHistory from '../presentations/mypage/MyPageTransactionHistory';

const data = [{
    coin: '비트코인',
    balance: '1000000원'
}, {
    coin: '이더리움',
    balance: '1000000원'
}, {
    coin: '리플',
    balance: '1000000원'
}, {
    coin: '리플',
    balance: '1000000원'
}]

export default function MyPageContainer() {
    const dispatch = useDispatch();
    const [ref, inView] = useInView();

    const userInfo = useSelector(selectedUserInfo);
    const userBalance = useSelector(selectedUserBalance);
    const userTransaction = useSelector(selectedUserTransaction);

    useLayoutEffect(() => {
        dispatch(getUserInfo());
        dispatch(getUserBalance());
        dispatch(getUserTransaction({page: 1}))
    }, [dispatch])

    useEffect(() => {
        console.log(inView);
    }, [inView])

    return(
        <Wrapper>
            <div className="grid grid-cols-3 gap-2">
                <MyPageProfile 
                    userInfo={userInfo} 
                />
                <MyPageHoldings 
                    userBalance={userBalance}
                />
                <MyPageHoldingCoins 
                    data={data} 
                    userBalance={userBalance} 
                />
                <MyPageHoldingPortfolio 
                    data={data} 
                    userBalance={userBalance}
                />
                <MyPageTransactionHistory
                    ref={ref}
                    data={data} 
                    userTransaction={userTransaction}
                />
            </div>
        </Wrapper>
    )
};