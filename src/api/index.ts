import axios, {AxiosInstance} from "axios";
import authService from "../services/auth/authService.ts";

export const $baseApi: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const $authApi: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

$authApi.interceptors.request.use(
    (config) => {
        const token = authService.getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)



