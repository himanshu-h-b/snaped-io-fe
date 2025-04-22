"use server";
import { ElevenLabsClient } from "elevenlabs";

async function getVoices() {
  const elevenlabs = new ElevenLabsClient({
    apiKey: process.env.ELEVEN_LABS_API_KEY,
  });

  const voices = await elevenlabs.voices.getAll();
  return voices.voices;
}

export default getVoices;
