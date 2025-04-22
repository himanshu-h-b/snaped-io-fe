import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { text } = await request.json();

  try {
    const response = await fetch(
      "https://video.a2e.ai/api/v1/video/lang_classify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.A2E_API_KEY}`,
        },
        body: JSON.stringify({ msg: text }),
      },
    );

    const data = await response.json();
    if (data.code === 0) {
      const detectedLanguage = data.data;
      // Here we're making assumptions about the country and region.
      // In a real-world scenario, you might want to have a mapping or additional logic.
      return NextResponse.json({
        language: detectedLanguage,
        country: detectedLanguage,
        region: detectedLanguage.toUpperCase(),
        voice_map_type: detectedLanguage,
      });
    } else {
      throw new Error("Failed to detect language");
    }
  } catch (error) {
    console.error("Error detecting language:", error);
    return NextResponse.json(
      { error: "Failed to detect language" },
      { status: 500 },
    );
  }
}
