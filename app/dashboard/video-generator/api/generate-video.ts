"use server";

import { axioPrivate } from "@/lib/axios-private";
async function generateVideo(
    formdata: FormData,
    script: string,
    aspect_ratio: string,
    ai_visual: string
) {
    formdata.forEach((value) => {
        console.log(value);
    });

    if(aspect_ratio == "Square HD 1:1") aspect_ratio = "Square HD"

    const data = {
        script: script,
        ai_assistant: false,
        prompt_for_video: "",
        aspect_ratio: aspect_ratio,
        folder: null,
        voice_link: null,
        caption: null,
        video_length: parseInt(formdata.get("video_length") as string),
        language: formdata.get("language"),
        voice_id: formdata.get("voice_id"),
        ai_visual: ai_visual, // "Cyberpunk Neon (CYBERPUNK)",
        caption_font_size: formdata.get("caption_font_size"),
        caption_color: formdata.get("caption_color"),
        caption_position: formdata.get("caption_position"),
    };
    console.log(data);
    try {
        const response = await axioPrivate.request({
            method: "POST",
            url: "/api/facelessv1queries/",
            data: data,
            headers: {
                "content-type": "application/json",
            },
        });
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        return {
            script: "Error occured",
        };
    }
}

// async function generateVideo(
//     formdata: FormData,
//     script: string,
//     aspect_ratio: string,
//     ai_visual: string
// ) {

//     formdata.forEach((value) => {
//         console.log(value);
//     });

//     const options = {
//         method: "POST",
//         url: "https://5e7e-49-36-168-221.ngrok-free.app/api/facelessv1queries/",
//         headers: {
//             "content-type": "application/json",
//         },
//         data: {
//             script: script,
//             ai_assistant: true,
//             prompt_for_video: "act",
//             aspect_ratio: aspect_ratio,
//             folder: null,
//             voice_link: null,
//             caption: null,
//             video_length: formdata.get("video_length"),
//            language: formdata.get("language"),
//            voice_id: formdata.get("voice_id"),
//            ai_visual: ai_visual, // "Cyberpunk Neon (CYBERPUNK)",
//            caption_font_size: formdata.get("caption_font_size"),
//            caption_color: formdata.get("caption_color"),
//            caption_position: formdata.get("caption_position")
//         },
//     };

//     try {
//         const { data } = await axioPrivate.request(options);
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

export default generateVideo;
