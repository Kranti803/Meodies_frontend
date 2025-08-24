import { useGetDashboardStatsQuery } from "../services/dashboardApi";

const DashboardStats = () => {

  const { data } = useGetDashboardStatsQuery();

  return (
    <div className="font-primary">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 font-primary">
        <div className="bg-bgDark p-5 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-400">Total Users</h3>
          <p className="text-3xl font-bold text-primary">{data?.data?.totalUsers}</p>
        </div>

        <div className="bg-bgDark p-5 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-400">Songs Uploaded</h3>
          <p className="text-3xl font-bold text-primary">{data?.data?.totalSongs}</p>
        </div>

        <div className="bg-bgDark p-5 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-400">Total Playlists</h3>
          <p className="text-3xl font-bold text-primary">{data?.data?.totalPlaylists}</p>
        </div>

        <div className="bg-bgDark p-5 rounded-xl shadow text-center">
          <h3 className="text-lg text-gray-400">Total Artists</h3>
          <p className="text-3xl font-bold text-primary">{data?.data?.totalArtists}</p>
        </div>
      </div>

      {/* Placeholder for future components (charts, tables, etc.) */}
      <div className="bg-bgDark rounded-xl p-6 shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">User Activity</h2>
        <p className="text-gray-400">Analytics and graphs will appear here.</p>
      </div>
    </div>
  );
};

export default DashboardStats;
