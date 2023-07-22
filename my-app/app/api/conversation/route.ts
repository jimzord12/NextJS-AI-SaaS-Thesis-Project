import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    console.log("🧪 0. Request: ", req);
    console.log("🧪 1. Api Key: ", process.env.OPENAI_API_KEY);
    const { userId } = auth();
    const body = await req.json();
    console.log("🧪 2. The body: ", body);

    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required!", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    console.log("🧪 3. OpenAI response:", response);

    return NextResponse.json(response.data.choices[0].message);
  } catch (error) {
    console.error("❌ (route.ts) [API_CONVERSATION_ERROR]: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
