import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from "recharts";
import { useTotalUserGrowthPerMonthQuery } from "../services/dashboardApi";

const UserGrowthPerMonth = () => {
  const { data } = useTotalUserGrowthPerMonthQuery();

 
  const formattedData =
    data?.data?.map((item: { year: number; month: number; count: number }) => ({
      name: `${item.month}/${item.year}`, // for X-axis
      count: item.count,                  // for Y-axis
    })) || [];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" /> {/* now exists */}
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="count"
          stroke="#82ca9d"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default UserGrowthPerMonth;
