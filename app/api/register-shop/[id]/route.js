import { NextResponse } from "next/server";
import connectDB from "@/lib/mongoose";
import RegisterShop from "../../../../Schema/RegisterShop";

export async function  GET(request, {params}){

    console.log('from shop' , request);

    try{
        await connectDB();

        const {id} = await params;
        console.log('from shop id' , id);
        const userById  = await RegisterShop.find({owner : id});

        return NextResponse.json({data : userById},{
            status : 200
        })
    }

    catch(err){
        return NextResponse.json({message : err},
            {status : 400}
        )
    }
};