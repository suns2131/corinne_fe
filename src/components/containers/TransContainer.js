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

function TransContainer() {
  const dispatch = useDispatch();
  const userInfos = useSelector(selectedUserInfo);
  const [loading, setloading] = useState(false);

  useLayoutEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="flex ">
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
  );
}

export default TransContainer;
