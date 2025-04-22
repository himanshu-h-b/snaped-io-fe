import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://video.a2e.ai/api/v1/custom_back/allBackground",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.A2E_API_KEY}`,
        },
        body: JSON.stringify({}),
      },
    );

    const data = await response.json();
    if (data.code === 0) {
      return NextResponse.json({ backgrounds: data.data });
    } else {
      throw new Error("Failed to fetch background list");
    }
  } catch (error) {
    console.error("Error fetching background list:", error);
    return NextResponse.json(
      { error: "Failed to fetch background list" },
      { status: 500 },
    );
  }
}
