"use client";

import { useState } from "react";

const Sidebar = ({ setSelectedShop, sidebarShop }) => {

  const [isMobile, setIsMobile] = useState(false);

  return (<div>

    {/* Mobile */}
      <div className="md:hidden relative my-8">
        <div className="space-y-1 p-1 m-auto cursor-pointer" onClick={() => setIsMobile(!isMobile)}>
            <div className="w-8 h-1 bg-black" />
            <div className="w-8 h-1 bg-black" />
            <div className="w-8 h-1 bg-black" />
        </div>

        {isMobile &&
        <div onClick={() => setIsMobile(false)} className="absolute z-20 -left-1  top-10 rounded-md border-black border w-screen h-screen bg-white">
        <ul>
          {sidebarShop.map((shop) => (
            <li
              key={shop._id}
              onClick={() => setSelectedShop(shop)}
              className="cursor-pointer p-2 rounded hover:bg-gray-100"
            >
              {shop.name}
            </li>
          ))}
        </ul>
        </div>
        }
      </div> 


    {/* Medium */}
    <div className="hidden md:block h-screen w-64 bg-white shadow-md p-4">

      <h2 className="text-xl font-semibold mb-4">Your Shops</h2>

      <ul>
        {sidebarShop.map((shop) => (
          <li
            key={shop._id}
            onClick={() => setSelectedShop(shop)}
            className="cursor-pointer p-2 rounded hover:bg-gray-100"
          >
            {shop.name}
          </li>
        ))}
      </ul>

    </div>
    </div>
  );
};

export default Sidebar;