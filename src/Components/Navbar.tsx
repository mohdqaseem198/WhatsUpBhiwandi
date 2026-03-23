'use client';
import { useSession } from "next-auth/react";
import { Cities } from "../Constants/constants";
import ListYourShop from "./Models/ListYouShopButton";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { set } from "mongoose";

const Navbar = () => {

    const [FormOpen, setFormOpen] = useState(false);
    const {data : session} = useSession();
    let ShopData = null;
    let categoryList;
    
    const name =  (session?.user?.name)?.replaceAll(' ',"");
    
    const setList = new Set;
    ShopData = useSelector((store) => store.FeaturedShopSlicer.data);

    if(ShopData.length > 0){
        ShopData?.map((single) => setList.add(single?.description));
    }
    categoryList = setList.values();


    return(<div className="p-1 flex bg-white lg:flex-row lg:justify-between" id="navbar">
        <div className="p-1">
            <div>
                <h2 className="font-bold">WhatsUp Bhiwandi</h2>
            </div>
            <div>
                {Cities && Cities.map((single, index) => (
                    <span className="text-sm p-2 text-gray-400" key={index}>{single}</span>
                ))
            }
            </div>
        </div>

        <div className="hidden lg:flex my-auto flex-row justify-center gap-2">
            <div onClick={() => document.getElementById('FeaturedShop')?.scrollIntoView({behavior : "smooth"})} className="p-1 cursor-pointer">Shops</div>
            <div onClick={() => document.getElementById('offers')?.scrollIntoView({behavior : "smooth"})} className="p-1 cursor-pointer">Offers</div>
            <div className="">
                
                <button onClick={() => setFormOpen(!FormOpen)} className="relative cursor-pointer bg-teal-500 text-white rounded-md py-1 px-2">Categories</button>
                {FormOpen &&
                <div className="absolute m-auto inset-x-0 top-15 h-96 w-150 z-10 bg-white border-2 border-teal-400 rounded-md">
                    <div className="flex flex-row justify-around">
                        <h2 className="font-semibold">Categories Available</h2>
                        <button className="cursor-pointer  bg-red-500 text-white w-8 h-8 rounded-full" onClick={() => setFormOpen(!FormOpen)}>X</button>
                    </div>
                    <div className="flex flex-wrap justify-around m-1">
                        {
                        categoryList && 
                        categoryList.map((single, index) => <p key={index} className="m-1"><span className="text-teal-500">▶ </span>{`${single}`}</p>)
                        }
                    </div>
                </div>
                }

            </div>
            <ListYourShop text = "List Your Shop" />
            <Link href={`/${name}`}>
                <ListYourShop text={'Admin'} disabled = {!session ? true : false} />
            </Link>
        </div>

    </div>)
};

export default Navbar;