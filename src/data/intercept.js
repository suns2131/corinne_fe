import axios from "axios";

const intercept = axios.create({
    baseURL: "http://13.125.232.165:8081",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTIyNjkzMjcsIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.5MVuc5ERTcK-keMryiH-JxUvZgODITR89BS-ddkZpHM",
    },
    withCredentials: false,
});

export default intercept;
