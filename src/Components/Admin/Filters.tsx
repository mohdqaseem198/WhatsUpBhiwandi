const Filters = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-4 mb-6">

      <button
        onClick={() => setFilter("day")}
        className={`px-4 py-2 rounded ${filter === "day" ? "bg-teal-500 text-white" : "bg-white border"}`}
      >
        Day
      </button>

      <button
        onClick={() => setFilter("month")}
        disabled ={true}
        className={`px-4 py-2 text-gray-400 rounded ${filter === "month" ? "bg-teal-500 text-white" : "bg-gray-200 border"}`}
      >
        Month
      </button>

      <button
        onClick={() => setFilter("year")}
        disabled ={true}
        className={`px-4 py-2 text-gray-400 rounded ${filter === "year" ? "bg-teal-500 text-white" : "bg-gray-200 border"}`}
      >
        Year
      </button>

    </div>
  );
};

export default Filters;