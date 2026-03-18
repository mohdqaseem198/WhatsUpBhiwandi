'use client'
import { useState } from "react";
import AnalyticsGraph from "./AnalyticsGraph";
import Filters from "./Filters";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";
import { Console } from "console";

const AdminClient  = ({session, data}) => {

    const [selectedShop, setSelectedShop] = useState(null);
    const [filter, setFilter] = useState("day");

    console.log('cleaned data admin client', data);

    const uniqueShops = {};

    data.forEach(item => {
      const id = item.shopId._id;
    
      if (!uniqueShops[id]) {
        uniqueShops[id] = item.shopId;
      }
    });

    const sidebarShops = Object.values(uniqueShops);
    console.log('sideBarShops' , sidebarShops);

    return(
        <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar setSelectedShop={setSelectedShop} sidebarShop = {sidebarShops} />

      {/* Main Content */}
      <div className="flex-1 p-6">

        <Filters filter={filter} setFilter={setFilter} />

        <StatsCards />

        <AnalyticsGraph />

      </div>

    </div>
    )
};

export default AdminClient;