import connectDB from "@/lib/mongoose";
import RegisterShop from "../../../Schema/RegisterShop";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    const session = await getServerSession(authOptions);

    if(!session){
        return NextResponse.json(
            {message : "session is blank"},
            {status : 404}
        )
    }

    const user = await mongoose.connection.db.collection("users").findOne({email : session?.user?.email});

    if(!user){
        return NextResponse.json({
            error : "User not found"
        }, 
    {status : 404})
    }

    const newRegisterShop = await RegisterShop.create({
        ...body,
        owner : user._id.toString()
    });

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

