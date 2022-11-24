import {
  DistributionResponse,
  OverviewResponse,
  TrendResponse,
} from "../types/api/overview";
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
}

const api = new API();

export default api;
