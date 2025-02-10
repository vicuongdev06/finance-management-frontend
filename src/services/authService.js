import axios from "axios";
import baseUrl from "../config";

const authService = {
    login: async (data) => {
        return axios.post(`${baseUrl}/auth/login`, data);
    },
    register: async (data) => {
        return axios.post(`${baseUrl}/auth/register`, data);
    },
};

export default authService;
