import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Wrapper from '../presentations/Wrapper';
import BuySellContainer from './Transaction/TrandDetailContainer';
import ChattingContainer from './Transaction/ChattingContainer';
import RankContanier from './Transaction/RankContainer';
import TikerListContainer from './Transaction/TikerListContainer';
import ChartContainer from './Transaction/ChartContainer';
import { getUserInfo } from '../../state/reducer/user/thunk';
import { selectedUserInfo } from '../../state/reducer/user/selectors';
import Receipt from '../presentations/transaction/modal/Receipt';
import { Modals } from '../../state/reducer/transaction/trans';

function TransContainer() {
  const dispatch = useDispatch();
  const userInfos = useSelector(selectedUserInfo);
  const receiptModal = useSelector((state) => state.trans.callResultModal);
  const [loading, setloading] = useState(false);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <div>
      <Wrapper>
        <div className="flex mb-[90px]">
          <div className="mr-5">
            <RankContanier />
            <TikerListContainer />
            <ChattingContainer userInfos={userInfos} />
          </div>
          <div>
            <ChartContainer />
            <BuySellContainer />
          </div>
        </div>
      </Wrapper>
      {receiptModal.isopen && (
        <div className="w-full h-screen fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-40 text-center z-40">
          <Receipt
            dispatch={dispatch}
            Modals={Modals}
            type={receiptModal.type}
            desc={receiptModal.desc}
          />
        </div>
      )}
    </div>
  );
}

export default TransContainer;
