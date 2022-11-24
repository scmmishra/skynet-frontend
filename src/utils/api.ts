import { OverviewResponse } from "../types/api/overview";
import { get } from "./request";

class API {
  async overview() {
    return await get<OverviewResponse>("/overview");
  }

  async trend() {
    return await get<OverviewResponse>("/trends");
  }

  async mobileDistrubution() {
    return await get<OverviewResponse>("/stats/mobile");
  }

  async desktopDistrubution() {
    return await get<OverviewResponse>("/stats/web");
  }
}

const api = new API();

export default api;
