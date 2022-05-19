import React, { useState } from 'react';
import useTop3 from '../../../data/rank/useTop3';
import PrevRank from '../../presentations/rank/prevrank/PrevRank';

function PrevRankContainer({ setModal }) {
  const prevRankTop3Data = useTop3();

  return <PrevRank setModal={setModal} prevRankTop3={prevRankTop3Data} />;
}

export default PrevRankContainer;
