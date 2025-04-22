import axios from "axios";
import { setCookies } from "@/lib/utils";
import { getCookie } from "cookies-next";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const refreshAccessToken = async () => {
  try {
    const refreshToken = getCookie("refresh_token");
    if (!refreshToken) throw new Error("No refresh token available");

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/token/refresh/`,
      {
        refresh: refreshToken,
      },
      {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      },
    );

    setCookies(response.data.access, refreshToken);
    return response.data.access;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
};

axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(error.config);
      }
    }
    return Promise.reject(error);
  },
);

export { axiosInstance };
