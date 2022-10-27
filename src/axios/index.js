import axios from "axios";

const backend = process.env.NODE_ENV === "development" ? "http://192.168.91.224:4000" : "https://e-coaching-server.vercel.app"
// const backend = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://e-coaching-server.vercel.app"
console.log(process.env.NODE_ENV)
const api = axios.create({
    baseURL: backend,
});

export default api;
