'use client';
import { disconnect } from "process";
import ExploreButton from "./Models/ExploreButton";
import RegisterShop from "./Models/RegisterShopButton";
import DiscoverCount from "./DiscoverCount";
import DiscoverRight from "./DiscoverRight";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const Discover = ({onSuccess}) => {
    const {data : session} = useSession();
    return (
    <div className="grid py-14 bg-teal-600 text-white lg:grid-cols-5" id="discover">
        <div className="p-2 lg:col-span-3">
            <h1 className="p-1 text-5xl">Discover Local Shops in Bhiwandi</h1>
            <p>Connect with  1000+ local businesses.</p>
            <p>Find best deals, offers, and products near you. Support your neighborhood shops</p>
            
            {/* <div className="my-2">
                <a href="#FeaturedShop">
                <ExploreButton text="Explore Shops" />
                </a>
            </div> */}

            <div className="my-2">
              <ExploreButton
                text="Explore Shops"
                onClick={() => {
                  document.getElementById("FeaturedShop")?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>

            
            <div className="my-3">
                <RegisterShop text={session ? 'Register You Shop' : 'LogIn to Register'} onSuccess={onSuccess} />
            </div>
            

            <div className="my-8 w-full h-[1px] bg-teal-200" />

            <div>
                <DiscoverCount />
            </div>

        </div>

        <div className="hidden m-auto px-2 lg:flex lg:col-span-2 lg:w-full">
            <DiscoverRight />
        </div>

    </div>)
};

export default Discover;