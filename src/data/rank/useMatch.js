import { useState, useEffect } from 'react';
import axiosInstance from '../axios';

export function useMatch() {
  const [matchs, setMatchs] = useState({
    nickname: '',
    imageUrl: null,
    rivalFluctuationRate: 0,
  });

  useEffect(() => {
    axiosInstance
      .get('/api/user/rival')
      .then((response) => {
        setMatchs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return matchs;
}
