import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { country, region } = await request.json();

  try {
    const response = await fetch(
      "https://video.a2e.ai/api/v1/anchor/voice_list",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.A2E_API_KEY}`,
        },
        body: JSON.stringify({
          country: country ? country : "en",
          region: region ? region : "US",
          voice_map_type: region ? `${country}-${region}}` : "en-US",
        }),
      },
    );

    const data = await response.json();
    if (data.code === 0) {
      return NextResponse.json({ voices: data.data });
    } else {
      throw new Error("Failed to fetch voice list");
    }
  } catch (error) {
    console.error("Error fetching voices:", error);
    return NextResponse.json(
      { error: "Failed to fetch voices" },
      { status: 500 },
    );
  }
}
