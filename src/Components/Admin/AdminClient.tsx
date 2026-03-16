'use client'
import { useState } from "react";
import AnalyticsGraph from "./AnalyticsGraph";
import Filters from "./Filters";
import Sidebar from "./Sidebar";
import StatsCards from "./StatsCards";

const AdminClient  = ({session}) => {

    const [selectedShop, setSelectedShop] = useState(null);
    const [filter, setFilter] = useState("day");

    return(
        <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar setSelectedShop={setSelectedShop} />

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