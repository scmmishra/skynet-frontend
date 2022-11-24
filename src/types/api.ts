import { Browsers } from "./browsers";
import { PerformanceMetrics } from "./metrics";

export type MetricData = {
  name: PerformanceMetrics;
  value: number;
  change: number;
  is_positive: boolean;
};

export type OverviewResponse = {
  metrics: MetricData[];
};

export type TrendResponse = Record<PerformanceMetrics, number[]>;

export type DistributionResponse = Record<Browsers, MetricData[]>;

export type RouteMetricsResponse = Record<
  PerformanceMetrics,
  { route: string; value: number }[]
>;
