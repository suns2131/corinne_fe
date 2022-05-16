import React, { useEffect, useState } from 'react';
import intercept from '../axios';

const useTop3 = () => {
  const [Top3, setTop3] = useState({ states: [], setState: '' });

  useEffect(() => {
    intercept.get(`/api/rank/top3`).then((response) => {
      setTop3(response.data.rank);
    });
  }, []);

  return {
    states: Top3,
    setState: setTop3,
  };
};

export default useTop3;
