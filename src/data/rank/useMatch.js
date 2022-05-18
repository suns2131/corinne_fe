import { useState, useEffect } from 'react';
import axiosInstance from '../axios';

export function useMatch() {
  const [matchs, setMatchs] = useState(null);

  useEffect(() => {
    axiosInstance.get('/api/user/rival').then((response) => {
      console.log(response.data);
      // setMatchs(response.data);
    });
  });

  return matchs;
}
