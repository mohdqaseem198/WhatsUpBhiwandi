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
        className={`px-4 py-2 rounded ${filter === "month" ? "bg-teal-500 text-white" : "bg-white border"}`}
      >
        Month
      </button>

      <button
        onClick={() => setFilter("year")}
        className={`px-4 py-2 rounded ${filter === "year" ? "bg-teal-500 text-white" : "bg-white border"}`}
      >
        Year
      </button>

    </div>
  );
};

export default Filters;