import { useState, useEffect } from 'react';
import axiosInstance from '../axios';

export function usePrvRank() {
  const [prevRank, setPrevRank] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/rank/lastweek/1').then((response) => {
      setPrevRank(response.data);
    });
  }, []);

  return prevRank;
}
