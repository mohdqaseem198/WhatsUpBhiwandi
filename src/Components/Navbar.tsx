'use client';
import { useSession } from "next-auth/react";
import { Cities } from "../Constants/constants";
import ListYourShop from "./Models/ListYouShopButton";
import Link from "next/link";

const Navbar = () => {

    const {data : session} = useSession();
    console.log(session?.user?.name, 'from navbar');
    const name =  (session?.user?.name)?.replaceAll(' ',"");

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
            <div className="p-1 cursor-pointer">Shops</div>
            <div className="p-1 cursor-pointer">Offers</div>
            <div className="p-1 cursor-pointer">Categories</div>
            <ListYourShop text = "List Your Shop" />
            <Link href={`/Admin/${name}`}>
                <ListYourShop text={'Admin'} disabled = {!session ? true : false} />
            </Link>
        </div>

    </div>)
};

export default Navbar;