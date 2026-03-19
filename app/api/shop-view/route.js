import { NextResponse } from "next/server";
import mongoose from "mongoose";
import ShopAnalytics from "../../../Schema/ShopAnalytics";
import connectDB from "@/lib/mongoose";
import { stat } from "fs";

export async function POST(req) {

  try {
    await connectDB();
    //console.log('inside shop-view try')

    const { shopId } = await req.json();

    const today = new Date().toISOString().split("T")[0];

    await ShopAnalytics.updateOne(
      {
        shopId: shopId,
        date: today
      },
      {
        $inc: { views: 1 }
      },
      {
        upsert: true
      }
    );

    return NextResponse.json({
      success: true
    });

  } catch (error) {

    console.error("Shop view error:", error);

    return NextResponse.json({
      success: false
    }, { status: 500 });

  }

}
