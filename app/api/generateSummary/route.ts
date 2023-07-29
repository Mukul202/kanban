
import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { todos } = await request.json();

    // const response = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   temperature: 0.8,
    //   n: 1,
    //   stream: false,
    //   messages: [
    //     {
    //       role: "system",
    //       content:
    //         "When responding, welcome the user as Mukul and always say welcome to the Dush! Limit the response to 200 characters",
    //     },
    //     {
    //       role: "user",
    //       content: `Hi there, provide a summary to the following todos. Count how many todos are there in each category such as To Do, In Progress and Done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
    //         todos
    //       )}`,
    //     },
    //   ],
    // });

    // const { data } = response;
    // console.log("Data is", data);
    // console.log(data.choices[0].message);
    // return NextResponse.json(data.choices[0].message);
    return NextResponse.json({});
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.error();
  }
}
