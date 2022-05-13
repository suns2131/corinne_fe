import axios from "axios";

const intercept = axios.create({
    // baseURL: "http://13.125.232.165",
    baseURL: "https://gyuwony.shop",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTI1MDE4MDEsImlzcyI6InNwYXJ0YSIsIlVTRVJfSUQiOjF9.WHQYMiQ6jPAoDfBYUsaXREIAdywtW6k53343Ks7Gz34",
    },
    withCredentials: false,
});

export default intercept;
