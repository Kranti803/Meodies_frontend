import { useTopPlayedSongsPerMonthQuery } from "../services/dashboardApi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const TopPlayedSongsPerMonth = () => {
  const { data } = useTopPlayedSongsPerMonthQuery();

  // format API data for recharts
  const chartData =
    data?.data.map((song) => ({
      name: song.title,
      count: song.playCount,
    })) || [];

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopPlayedSongsPerMonth;
