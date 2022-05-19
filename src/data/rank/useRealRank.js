import axios from 'axios';
import React, { useEffect, useState } from 'react';
import intercept from '../axios';

const useRealRank = (page) => {
  const [Top3, setTop3] = useState([]);

  useEffect(() => {
    axios.get(`/api/rank/${page}`).then((response) => {
      if (page === 1) setTop3(response.data);
      else setTop3((prevItem) => [...prevItem].concat(response.data));
    });
  }, [page]);

  return {
    states: Top3,
    setState: setTop3,
  };
};

export default useRealRank;
