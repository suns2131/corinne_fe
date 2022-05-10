import axios from "axios";

const intercept = axios.create({
    baseURL: "http://13.125.232.165",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTI0NDYzNjYsImlzcyI6InNwYXJ0YSIsIlVTRVJfSUQiOjF9.-tWtqXen-mNaJtaLAgmCQY5K55BHHFU7Ty98WtXm3kQ",
    },
    withCredentials: false,
});

export default intercept;
