'use client'
import { useEffect, useState } from "react";
import AnalyticsGraph from "./AnalyticsGraph";
import Filters from "./Filters";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import { Console } from "console";
import axios from "axios";

const AdminClient  = ({session, data} : any) => {

  type Shop = {
      _id: string;
      name: string;
    };

    const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
    const [filter, setFilter] = useState("day");
    const [analytics, setAnalytics] = useState(null);

    console.log('cleaned data admin client', data);

const uniqueShops : Record<string, Shop> = {};

// data.forEach(item => {
//   const id = item.shopId._id;

//   if (!uniqueShops[id]) {
//     uniqueShops[id] = {
//       _id: item?._id,
//       name: item.shopId.name
//     };
//   }
// });

data.forEach((item : any)  => {
  const id = item?.shopId?._id;
try{
  if (!uniqueShops[id]) {
    uniqueShops[id] = {
      _id: item?.shopId,
      name: item.shopId.name
    };
  }
  }
  catch(err){
    console.log('failed in shopId', err);
  }
  
});

const sidebarShops = Object.values(uniqueShops);

    const getSelectedShopAnalytics = async(id : any) => {
      const res =  await axios.post('/api/shop-analytics', {id})
      const data = await res;
      setAnalytics(data?.data?.message);
      return data;
    }

    useEffect(() => {

      if(!selectedShop){
        return;
      }

      const id = selectedShop?._id;
      getSelectedShopAnalytics(id); 

    }, [selectedShop])

    //console.log('analytics' , analytics);

    return(
        <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar setSelectedShop={setSelectedShop} sidebarShop = {sidebarShops} />

      {/* Main Content */}
      <div className="flex-1 p-6">

        <Filters filter={filter} setFilter={setFilter} />

        <StatsCards  analytics = {analytics} />

        <AnalyticsGraph analytics = {analytics} />

      </div>

    </div>
    )
};

export default AdminClient;