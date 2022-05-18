import React, { useEffect, useState, useLayoutEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/router';
import { getUserBalance, getUserInfo, getUserTransaction } from '../../state/reducer/user/thunk';
import {
  selectedUserBalance,
  selectedUserInfo,
  selectedUserTransaction,
} from '../../state/reducer/user/selectors';

import Wrapper from '../presentations/Wrapper';
import MyPageProfile from '../presentations/mypage/MyPageProfile';
import MyPageHoldings from '../presentations/mypage/MyPageHoldings';
import MyPageHoldingCoins from '../presentations/mypage/MyPageHoldingCoins';
import MyPageHoldingPortfolio from '../presentations/mypage/MyPageHoldingPortfolio';
import MyPageTransactionHistory from '../presentations/mypage/MyPageTransactionHistory';
import LoginContainer from './LoginContainer';

export default function MyPageContainer() {
  const dispatch = useDispatch();
  const [lastScrollRef, inView] = useInView();
  const router = useRouter();

  const userInfo = useSelector(selectedUserInfo);
  const userBalance = useSelector(selectedUserBalance);
  const userTransaction = useSelector(selectedUserTransaction);

  const [page, setPage] = useState(1);

  const goChangeProfile = useCallback(() => {
    // dispatch()
    router.push({
      pathname: router.pathname,
      query: { progress: 'image' },
    });
  }, [router]);

  const profitOrLossCheck = ({ account, profit }) => {
    if (account - profit > 0) {
      return {
        result: `+${Number(account - profit).toLocaleString()}원`,
        property: 'text-Primary-purple font-bold',
      };
    }
    return {
      result: `-${Number(profit - account).toLocaleString()}원`,
      property: 'text-Secondary-orange font-bold',
    };
  };

  useLayoutEffect(() => {
    dispatch(getUserInfo());
    dispatch(getUserBalance());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserTransaction({ page }));
  }, [dispatch, page]);

  useEffect(() => {
    if (inView === true && userTransaction.totalPages > page) {
      setPage(page + 1);
    }
  }, [inView]);

  return (
    <Wrapper>
      <div className="grid grid-cols-3 gap-2">
        <MyPageProfile userInfo={userInfo} goChangeProfile={goChangeProfile} />
        <MyPageHoldings userBalance={userBalance} profitOrLossCheck={profitOrLossCheck} />
        <MyPageHoldingCoins userBalance={userBalance} />
        <MyPageHoldingPortfolio userBalance={userBalance} />
        <MyPageTransactionHistory lastScrollRef={lastScrollRef} userTransaction={userTransaction} />
      </div>
      <LoginContainer />
    </Wrapper>
  );
}
