import axios, { AxiosInstance } from "axios";
import interceptors from "./interceptors";


const axiosInstance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 1000,
});
interceptors(axiosInstance)

export const $axios = axiosInstance;