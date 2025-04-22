"use server";
import axios from "axios";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const axioPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

axioPrivate.interceptors.request.use((config) => {
  const token = getCookie("access_token", { cookies });
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axioPrivate };
