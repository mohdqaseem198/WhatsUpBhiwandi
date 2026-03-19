import { NextResponse } from "next/server";
import mongoose from "mongoose";
import ShopAnalytics from "../../../Schema/ShopAnalytics";
import connectDB from "@/lib/mongoose";
import RegisterShop from "../../../Schema/RegisterShop";


export async function POST(req){
try{
    await connectDB();
    const {id} = await req.json()
//    console.log('shop-analytics inside try');
    
    const analytics = await ShopAnalytics.find({shopId : id});
    console.log('analytics' , analytics);

    return NextResponse.json({status : 200 , message : analytics});
}

catch(err){
    return NextResponse.json({status : 201 , message : 'something went wrong!'})
}
}