import axios from "axios";

const backend = "http://localhost:4000";

const api = axios.create({
    baseURL: backend,
});

export default api;
