import { useState, useEffect } from 'react';
import axiosInstance from '../axios';

export function useFollow() {
  const [follow, setFollow] = useState([]);

  useEffect(() => {
    axiosInstance.get('/api/follow').then((response) => {
      setFollow(response.data);
    });
  }, []);

  const onchangeFollow = (event) => {
    setFollow(follow.filter((el) => el.nickname.includes(event.target.value)));
  };

  return { follow, onchangeFollow };
}
