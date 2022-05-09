import axios from "axios";

const intercept = axios.create({
    baseURL: "http://3.39.187.36",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json",
        Authorization : "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTIyNjkzMjcsIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.5MVuc5ERTcK-keMryiH-JxUvZgODITR89BS-ddkZpHM",
    },
    withCredentials: false,
});

//  axios.defaults.headers.common.Authorization = "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFWFBJUkVEX0RBVEUiOjE2NTE5MTk5NjQsIlVTRVJfRU1BSUwiOiJhQG5hdmVyLmNvbSIsImlzcyI6InNwYXJ0YSIsIkNMQUlNX1VTRVJfTklDS05BTUUiOiLquYDshLHsp4QifQ.IGgEhzdNvqtl5Lj-LxRW7oM5PVu7yvXYO5anIuQkQBU";
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

export default intercept;