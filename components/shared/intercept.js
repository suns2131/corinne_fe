import axios from "axios";

const intercept = axios.create({
    baseURL: "",
    headers: {
        "content-type" : "application/json; charset=UTF-8",
        accept : "application/json"
    },
    withCredentials: false,
});

// axios.defaults.headers.common.Authorization = sessionStorage.getItem('login');
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

export default intercept;