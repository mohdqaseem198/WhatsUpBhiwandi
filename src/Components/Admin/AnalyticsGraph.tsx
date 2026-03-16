"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "10 Mar", views: 5 },
  { date: "11 Mar", views: 8 },
  { date: "12 Mar", views: 15 },
  { date: "13 Mar", views: 10 },
  { date: "14 Mar", views: 20 },
];

const AnalyticsGraph = () => {
  return (
    <div className="bg-white p-6 rounded shadow">

      <h2 className="text-lg font-semibold mb-4">Views Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="views" stroke="#14b8a6" />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default AnalyticsGraph;