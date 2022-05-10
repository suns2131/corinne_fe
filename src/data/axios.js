import axios from "axios";
// import { setCookie, removeCookie } from "../share/cookie";

const intercept = axios.create({
    baseURL: "http://13.125.232.165:8081",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
    },
    withCredentials: false,
});

export default intercept;
