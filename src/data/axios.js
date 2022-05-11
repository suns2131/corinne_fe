import axios from "axios";
import { getCookie } from "../share/cookie";

const token = getCookie({name: 'corinne'})

const axiosInstance = axios.create({
    baseURL: "http://13.125.232.165",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : `BEARER ${token}`, 
    },
    withCredentials: false,
});

export default axiosInstance;
