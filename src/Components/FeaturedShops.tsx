"use client";
import { useEffect, useState } from "react";
import { CardItems } from "../Constants/constants";
import FeaturedCard from "./FeaturedCard";
import { fetchData } from "next-auth/client/_utils";
import axios from "axios";


const FeaturedShops = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        //console.log('inside useEffect');

        const FetchData = async() => {

            //console.log('fetch data func run');

            const res = await axios.get("/api/register-shop");
            
            if(res.status == 200){
                setUserData(res.data);
            }
        }

        FetchData();
        

    }, [])

    console.log('userData', userData)
    
    return(<div className="">
        <div className="flex flex-row justify-between p-3">
            <div>
                <h2 className="font-semibold text-2xl">Featured Shops</h2>
                <p className="text-gray-700">Top-rated businesses in Bhiwandi</p>
            </div>
            <div>
                <button className="cursor-pointer text-teal-700">View All</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="featured-shop">
            {CardItems && CardItems.map((single) => (
                <div className="mx-3 my-5" key={single.id}>
                    <FeaturedCard item= {single} />
                </div>
            ))}
        </div>

        {userData?.length > 0 &&
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="featured-shop">
            {userData && userData.map((single) => (
                <div className="mx-3 my-5" key={single._id}>
                    <FeaturedCard item= {single} />
                </div>
            ))}
        </div>}

    </div>)
};

export default FeaturedShops;