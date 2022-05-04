import axios from "axios";

const intercept = axios.create({
    baseURL: "http://52.79.228.83",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTE5MTk5NjQsIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.IGgEhzdNvqtl5Lj-LxRW7oM5PVu7yvXYO5anIuQkQBU",
    },
    withCredentials: false,
});

export default intercept;
