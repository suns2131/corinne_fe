import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TikerList from '../../presentations/transaction/tikerlist/TikerList'
import { getTikerList, SelectingTiker } from '../../../state/reducer/transaction/trans';

function TikerListContainer() {
    const dispatch = useDispatch();
    const list = useSelector((state) => state.trans.tikerList)
    const defaultList = list
    const [coinList,setCoinList] = useState(defaultList);

    const itemClick = (selectinfo) => {
        dispatch(SelectingTiker(selectinfo));
    }

    const changeCoinList = (e) => {
        setCoinList(defaultList.filter((el) => el.name.includes(e.target.value.toUpperCase())))
    }
    
    React.useEffect(() => {
        dispatch(getTikerList())
    },[])

    React.useEffect(()=>{
        setCoinList(list)
      },[list])

    return(
        <TikerList 
            defaultList={defaultList}
            coinList={coinList}
            setCoinList={setCoinList}
            itemClick={itemClick}
            changeCoinList={changeCoinList}
        />
    );
}

export default TikerListContainer