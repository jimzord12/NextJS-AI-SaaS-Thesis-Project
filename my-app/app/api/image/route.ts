import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { prompt, amount = 1, resolution = "512x512" } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required!", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount are required!", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution are required!", { status: 400 });
    }

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    console.log("🧪 3. OpenAI response:", response);

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("❌ (route.ts) [API_IMAGE_ERROR]: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
