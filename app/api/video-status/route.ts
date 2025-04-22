export const fetchCache = "force-no-store";

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { _id } = await request.json();

  if (!_id) {
    return NextResponse.json(
      { error: "Video ID is required" },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      "https://video.a2e.ai/api/v1/video/awsResult",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.A2E_API_KEY}`,
        },
        body: JSON.stringify({ _id }),
      },
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error checking video status:", error);
    return NextResponse.json(
      { error: "Failed to check video status" },
      { status: 500 },
    );
  }
}
