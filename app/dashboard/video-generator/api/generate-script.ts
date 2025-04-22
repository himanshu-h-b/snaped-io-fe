"use server";

import { axioPrivate } from "@/lib/axios-private";

async function generateScript(formdata: FormData, category: string) {
  formdata.append("category", category);
  try {
    const response = await axioPrivate.post(
      "/api/custom-script-creation/",
      formdata,
    );
    console.log(response);
    console.log(response.status);
    return response.data;
  } catch (err) {
    console.log(err)
    return {
      script: "Error occured",
    };
  }
}

export default generateScript;
