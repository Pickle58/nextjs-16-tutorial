import { NextResponse } from "next/server";

export async function POST(request: Request) {
    console.log("hey this runs on the server side");
    return NextResponse.json({ message: "Hello, world!" });
}