"use client";

const Sidebar = ({ setSelectedShop, sidebarShop }) => {

  return (
    <div className="w-64 bg-white shadow-md p-4">

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
  );
};

export default Sidebar;