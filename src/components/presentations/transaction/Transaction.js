import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionSide from './TransactionSide';
import TransactionContent from './TransactionContent';
import { getTikerList } from '../../../state/reducer/transaction/trans';

function Transaction(){
      const dispatch = useDispatch();
      const list = useSelector((state) => state.trans.tikerList);
      useEffect(() =>{
        dispatch(getTikerList())
      },[dispatch])

    return (
        <div className='flex'>
          <div className="  w-[387px] mr-5">
            <TransactionSide coinsList={list} />
          </div>
          <div className=" w-rankview ">
            <TransactionContent />
          </div>
        </div>
    );
}

export default Transaction;