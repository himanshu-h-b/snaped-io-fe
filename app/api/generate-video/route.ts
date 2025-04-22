import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const response = await fetch("https://video.a2e.ai/api/v1/video/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.A2E_API_KEY}`,
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (data.code === 0) {
      return NextResponse.json({ videoId: data.data._id });
    } else {
      throw new Error(data.msg || "Failed to generate video");
    }
  } catch (error) {
    console.error("Error generating video:", error);
    return NextResponse.json(
      { error: "Failed to generate video" },
      { status: 500 },
    );
  }
}
