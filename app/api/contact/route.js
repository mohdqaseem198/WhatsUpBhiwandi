import connectDB from "@/lib/mongoose";
import ContactUs from "../../../Schema/ContactUs";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

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

    try{
    //for email sending only
    // 👉 Setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // app password
      }
    });


    // 👉 Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // you receive it
      subject: `New Contact Form Submission : ${body.name}`,
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${body.name}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Number:</b> ${body?.number}</p>
        <p><b>Message:</b> ${body.message}</p>
      `
    });

    }
    catch(err){
      console.log('mail send failed', err);
    }


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

