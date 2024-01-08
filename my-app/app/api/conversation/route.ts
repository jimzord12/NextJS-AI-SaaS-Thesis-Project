import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai"; //OLD

import OpenAI from "openai";

// OLD
/*
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
*/
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const firstMessage = {
  role: "user",
  content: "Please provide all your responses in markdown format.",
};

export async function POST(req: Request) {
  try {
    // console.log("🧪 0. Request: ", req);
    console.log("🧪 1. Api Key: ", process.env.OPENAI_API_KEY);
    const { userId } = auth();
    const body = await req.json();
    console.log("🧪 2. The body: ", body);

    let { messages }: { messages: Array<any> } = body;
    messages = [firstMessage, ...messages];
    console.log("🧪 3. The Messages: ", messages);

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API Key not configured", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required!", { status: 400 });
    }

    // OLD
    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   messages,
    // });

    // New
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });
    // console.log(chatCompletion.choices[0].message);

    console.log("🧪 4. OpenAI response:", chatCompletion.choices[0].message);

    // return new Error("Testing error");
    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.error("❌ (route.ts) [API_CONVERSATION_ERROR]: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
