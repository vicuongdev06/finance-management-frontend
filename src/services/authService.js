import axios from "axios";
import baseUrl from "../config";

const authService = {
  login: async (data) => {
    const response = await axios.post(`${baseUrl}/auth/login`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return response;
  },
  register: async (data) => {
    const response = await axios.post(`${baseUrl}/auth/register`, data, {
      headers: { "Content-Type": "application/json" }
    });
    return response;
  }
};

export default authService;
