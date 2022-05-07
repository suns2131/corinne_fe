import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TransactionSide from './TransactionSide';
import TransactionContent from './TransactionContent';

function Transaction(){
      const dispatch = useDispatch();
      const list2 = useSelector((state) => state.trans.tikerList);
      const list = [{
          favorite : true,
          src : '/icons/icon_btc.png',
          alt : 'btc',
          name : 'BTC',
          upRate : '+0.45%',
          price : '48,936,000',
          unitPrice : 'BTC',
        },
        {
          favorite : true,
          src : '/icons/icon_sol.png',
          alt : 'sol',
          name : 'SOL',
          upRate : '-0.09%',
          price : '7,000,000',
          unitPrice : 'SOL',
        },
        {
          favorite : false,
          src : '/icons/icon_eth.png',
          alt : 'eth',
          name : 'ETH',
          upRate : '-0.08%',
          price : '3,588,000',
          unitPrice : 'ETH',
        }]
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