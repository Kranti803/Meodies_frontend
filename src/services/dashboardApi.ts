import type {
  IstatsData,
  Itop5PlayedSongsPerMonth,
  ItotalSongUploadedPerMonth,
  ItotalUserGrowthPerMonth,
} from "../interfaces/statsInterface";
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
    totalSongsUploadedPerMonth: builder.query<
      { success: true; data: ItotalSongUploadedPerMonth[] },
      void
    >({
      query: () => ({
        url: "/stats/songs_uploaded",
      }),
    }),
    totalUserGrowthPerMonth: builder.query<
      { success: true; data: ItotalUserGrowthPerMonth[] },
      void
    >({
      query: () => ({
        url: "/stats/user_growth",
      }),
    }),
    topPlayedSongsPerMonth: builder.query<
      { success: true; data: Itop5PlayedSongsPerMonth[] },
      void
    >({
      query: () => ({
        url: "/stats/top_five_played_songs",
      }),
    }),
  }),
});

export const {
  useGetDashboardStatsQuery,
  useTotalSongsUploadedPerMonthQuery,
  useTotalUserGrowthPerMonthQuery,
  useTopPlayedSongsPerMonthQuery,
} = dashboardAPI;
