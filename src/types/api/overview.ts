import { PerformanceMetrics } from "../metrics";

export type OverviewResponse = {
  metrics: {
    name: PerformanceMetrics;
    value: number;
    change: number;
  }[];
};
