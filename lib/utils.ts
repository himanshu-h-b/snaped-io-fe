import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  CookieValueTypes,
  setCookie,
  deleteCookie,
  getCookie,
  getCookies,
} from "cookies-next";
// import { cookies } from "next/headers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setCookies = (
  access: string | CookieValueTypes,
  refresh: string | CookieValueTypes,
) => {
  setCookie("access_token", access, {
    // cookies,
  });
  setCookie("refresh_token", refresh, {
    // cookies,
  });
  setCookie("system-login", false, {
    // cookies,
  });
};

export const deleteCookies = () => {
  deleteCookie("access_token", {
    // cookies,
  });
  deleteCookie("refresh_token", {
    // cookies,
  });
  deleteCookie("system-login", {
    // cookies,
  });
};
