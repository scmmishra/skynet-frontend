import {
  DistributionResponse,
  OverviewResponse,
  TrendResponse,
  RouteMetricsResponse,
  CountryStatsResponse,
} from "../types/api";
import { get } from "./request";

class API {
  async overview() {
    return await get<OverviewResponse>("/overview");
  }

  async trend() {
    return await get<TrendResponse>("/trends");
  }

  async mobileDistrubution() {
    return await get<DistributionResponse>("/stats/mobile");
  }

  async desktopDistrubution() {
    return await get<DistributionResponse>("/stats/web");
  }

  async routeMetrics() {
    return await get<RouteMetricsResponse>("/stats/routes");
  }

  async heatmap() {
    return await get<CountryStatsResponse>("/stats/countries");
  }
}

const api = new API();

export default api;
