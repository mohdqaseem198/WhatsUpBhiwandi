const StatsCards = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Total Views</p>
        <h3 className="text-2xl font-semibold">240</h3>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Views Today</p>
        <h3 className="text-2xl font-semibold">18</h3>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <p className="text-gray-500">Best Day</p>
        <h3 className="text-2xl font-semibold">15 Mar</h3>
      </div>

    </div>
  );
};

export default StatsCards;