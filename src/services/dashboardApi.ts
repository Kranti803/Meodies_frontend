import type { IstatsData } from "../interfaces/statsInterface";
import { myApi } from "./myApi";

export const dashboardAPI = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query<{ success: true; data: IstatsData }, void>(
      {
        query: () => ({
          url: "/stats/get_dashboard_data",
        }),
      }
    ),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardAPI;
