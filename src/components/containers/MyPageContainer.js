import React, { useEffect, useRef, useState, useLayoutEffect, useCallback } from 'react';
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

export default function MyPageContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [lastScrollRef, inView] = useInView();

  const [page, setPage] = useState(1);

  const userInfo = useSelector(selectedUserInfo);
  const userBalance = useSelector(selectedUserBalance);
  const userTransaction = useSelector(selectedUserTransaction);

  const goChangeProfile = useCallback(() => {
    // dispatch()
    router.push('/login');
  }, [router]);

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
        <MyPageHoldings userBalance={userBalance} />
        <MyPageHoldingCoins userBalance={userBalance} />
        <MyPageHoldingPortfolio userBalance={userBalance} />
        <MyPageTransactionHistory lastScrollRef={lastScrollRef} userTransaction={userTransaction} />
      </div>
    </Wrapper>
  );
}
