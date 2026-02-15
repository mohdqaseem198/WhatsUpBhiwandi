import connectDB from "@/lib/mongoose";
import RegisterShop from "../../../Schema/RegisterShop";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    
    const body = await req.json();

    const newRegisterShop = await RegisterShop.create(body);

    return NextResponse.json(
      { message: "Contact saved successfully", data: newRegisterShop },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
};

