import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { text, voiceId } = await request.json();

  if (!text || !voiceId) {
    return NextResponse.json(
      { error: "Text and anchor ID are required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch("https://video.a2e.ai/api/v1/video/send_tts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.A2E_API_KEY}`,
      },
      body: JSON.stringify({
        msg: text,
        tts_id: voiceId,
        speechRate: 1,
      }),
    });

    const data = await response.json();
    if (data.code === 0 && data.data) {
      return NextResponse.json({ audioUrl: data.data });
    } else {
      throw new Error(data.msg || "Failed to convert text to speech");
    }
  } catch (error) {
    console.error("Error converting text to speech:", error);
    return NextResponse.json(
      { error: "Failed to convert text to speech" },
      { status: 500 },
    );
  }
}
