import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TikerList from '../../presentations/transaction/tikerlist/TikerList';
import {
  deleteTikerListFavor,
  getTikerList,
  postTikerListFavor,
  SelectingTiker,
} from '../../../state/reducer/transaction/trans';

function TikerListContainer() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.trans.tikerList);
  const defaultList = list;
  const [coinList, setCoinList] = useState(defaultList);
  const [btnStat, setBtnStat] = useState({
    all: 'bg-[#eeeeee]',
    favor: 'bg-[#ffffff]',
  });

  const itemClick = (selectinfo) => {
    dispatch(SelectingTiker(selectinfo));
  };

  const changeCoinList = (e) => {
    setCoinList(defaultList.filter((el) => el.name.includes(e.target.value.toUpperCase())));
  };

  React.useEffect(() => {
    dispatch(getTikerList());
  }, []);

  React.useEffect(() => {
    setCoinList(list);
  }, [list]);

  const bookMarkClick = (tiker, favor) => {
    if (favor) {
      dispatch(deleteTikerListFavor(tiker));
    } else {
      dispatch(postTikerListFavor(tiker));
    }
  };

  return (
    <TikerList
      defaultList={defaultList}
      coinList={coinList}
      setCoinList={setCoinList}
      itemClick={itemClick}
      changeCoinList={changeCoinList}
      btnStat={btnStat}
      setBtnStat={setBtnStat}
      bookMarkClick={bookMarkClick}
    />
  );
}

export default TikerListContainer;
