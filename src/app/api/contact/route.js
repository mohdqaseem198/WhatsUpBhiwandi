import connectDB from "@/lib/db";
import Post from "@Schema/ContactSchema";
import { NextResponse } from "next/server";

export async function ContactUs() {
  await connectDB();

  const dummyPost = await Post.create({
    title: "Dummy Title",
    description: "This is dummy data",
  });

  return NextResponse.json(dummyPost);
}
