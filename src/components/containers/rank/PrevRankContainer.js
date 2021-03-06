import React from 'react';
import useTop3 from '../../../data/rank/useTop3';
import PrevRank from '../../presentations/rank/prevrank/PrevRank';

function PrevRankContainer({ setModal, setCallUser }) {
  const prevRankTop3Data = useTop3();

  const goSurvey = () => {
    window.location.href = 'https://forms.gle/f7hsZ7iQrJfZnFND9';
  };

  return (
    <PrevRank
      setModal={setModal}
      prevRankTop3={prevRankTop3Data}
      setCallUser={setCallUser}
      goSurvey={goSurvey}
      type
    />
  );
}

export default PrevRankContainer;
