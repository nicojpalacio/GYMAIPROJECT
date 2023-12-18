import { NextResponse } from "next/server";
import OpenAI from "openai";




export async function POST(request) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
    console.log('pase por aqui')
  try {
    const { bodyPart,objective,maxTokens} = await request.json();

    const userPrompt = `make me a routine for ${bodyPart}. my objective is ${objective}`

    const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are the best body trainer in the world" },
        {role:'user',content:userPrompt}],
        model: "gpt-3.5-turbo",
      });
      console.log(response)
    return NextResponse.json(
      {response:response.choices[0].message, message: "Successful created Objetive" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

