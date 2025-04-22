"use server";

import { axioPrivate } from "./axios-private";

async function getUser(): Promise<null | User> {
  try {
    const response = await axioPrivate.get("/accounts/me/");
    if (response.status === 200) return response.data.user;
  } catch (error) {
    console.log(error);
    return null;
  }
  return null;
}

export { getUser };
