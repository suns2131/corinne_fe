import axios from "axios";

const intercept = axios.create({
    baseURL: "http://52.79.228.83:8080",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTE5OTA5MjksIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.yIanm7gRxQzuXxbO-NT-c2FbVo5BcrXMJxgUaSZocBk",
    },
    withCredentials: false,
});

export default intercept;
