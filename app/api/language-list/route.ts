import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://video.a2e.ai/api/v1/anchor/language_list",
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
      return NextResponse.json({ languages: data.data });
    } else {
      throw new Error("Failed to fetch language list");
    }
  } catch (error) {
    console.error("Error fetching language list:", error);
    return NextResponse.json(
      { error: "Failed to fetch language list" },
      { status: 500 },
    );
  }
}
