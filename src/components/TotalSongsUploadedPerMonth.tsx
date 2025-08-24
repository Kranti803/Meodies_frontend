import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useTotalSongsUploadedPerMonthQuery } from "../services/dashboardApi";
import type { ItotalSongUploadedPerMonth } from "../interfaces/statsInterface";

const TotalSongsUploadedPerMonth = () => {
  const { data } = useTotalSongsUploadedPerMonthQuery();

  const formattedData = data?.data?.map((item: ItotalSongUploadedPerMonth) => ({
    name: `${item.month}/${item.year}`,
    count: item.count,
  }));
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TotalSongsUploadedPerMonth;
