import axios from 'axios';
import { getCookie } from '../share/cookie';

const token = getCookie({ name: 'corinne' });

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_MAIN,
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    accept: 'application/json',
    Authorization: `BEARER ${token}`,
  },
  withCredentials: false,
});

export const axiosImgInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER_MAIN,
  headers: {
    'content-type': 'multipart/form-data',
    accept: 'application/json',
    Authorization: `BEARER ${token}`,
  },
});

export default axiosInstance;
