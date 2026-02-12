import connectDB from "@/lib/mongoose";
import ContactUs from "../../../Schema/ContactUs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    console.log('connected DB');

    const body = await req.json();
    //console.log('body', body);

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, Email, Message fields are required" },
        { status: 400 }
      );
    }

    const newContact = await ContactUs.create(body);

    return NextResponse.json(
      { message: "Contact saved successfully", data: newContact },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
};

