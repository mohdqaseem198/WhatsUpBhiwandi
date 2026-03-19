'use client'
import { useEffect, useState } from "react";
import AnalyticsGraph from "./AnalyticsGraph";
import Filters from "./Filters";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import { Console } from "console";
import axios from "axios";

const AdminClient  = ({session, data}) => {

    const [selectedShop, setSelectedShop] = useState(null);
    const [filter, setFilter] = useState("day");
    const [analytics, setAnalytics] = useState(null);

    console.log('cleaned data admin client', data);

const uniqueShops = {};

// data.forEach(item => {
//   const id = item.shopId._id;

//   if (!uniqueShops[id]) {
//     uniqueShops[id] = {
//       _id: item?._id,
//       name: item.shopId.name
//     };
//   }
// });

data.forEach(item => {
  const id = item.shopId._id;

  if (!uniqueShops[id]) {
    uniqueShops[id] = {
      _id: item?.shopId,
      name: item.shopId.name
    };
  }
});

const sidebarShops = Object.values(uniqueShops);

    const getSelectedShopAnalytics = async(id) => {
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

    console.log('analytics' , analytics);

    return(
        <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar setSelectedShop={setSelectedShop} sidebarShop = {sidebarShops} />

      {/* Main Content */}
      <div className="flex-1 p-6">

        <Filters filter={filter} setFilter={setFilter} />

        <StatsCards />

        <AnalyticsGraph analytics = {analytics} />

      </div>

    </div>
    )
};

export default AdminClient;