import axios, {type AxiosResponse} from "axios";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getAxios = () => {
    const createdAxios = axios.create({
        baseURL: `${BASE_URL}/api`,
        timeout: 4000,
        headers: {
            'Content-Type': 'application/json',
            credentials: "include",
            Authorization: 'Bearer YOUR_BOT_TOKEN_HERE',
        }
    });

    createdAxios.interceptors.response.use(getAxiosResponse);

    return createdAxios;
}

export const getAxiosResponse = (response: AxiosResponse) => {
    return response.data;
}