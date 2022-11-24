// Performance Metrics

// firstPaint: First Paint is the exact time taken for the browser to render anything as visually different from what was on the screen before navigation
// firstContentfulPaint: First Contentful Paint is the exact time taken for the browser to render the first bit of content from the DOM
// firstInputDelay: First Input Delay measures the time from when a user first interacts with your site, to the time when the browser is actually able to respond to that interaction.
// largestContentfulPaint: Largest Contentful Paint is an important, user-centric metric for measuring perceived load speed because it marks the point in the page load timeline when the page's main content has likely loaded
// cumulativeLayoutShift: Cumulative Layout Shift is an important, user-centric metric for measuring visual stability because it helps quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the page is delightful.
// totalBlockingTime: Measures the total amount of time between First Contentful Paint and Time to Interactive where the main thread was blocked for long enough to prevent input responsiveness.
// timeToFistByte: Time to First Byte is the time taken by the browser to receive the first byte of the response from the server

export enum PerformanceMetrics {
  FP = "first_paint",
  FCP = "first_contentful_paint",
  FID = "first_input_delay",
  LCP = "largest_contentful_paint",
  CLS = "cumu_layout_shift",
  TBT = "total_blocking_time",
  TTFB = "time_to_first_byte",
}

export enum Percentile {
  p75 = "p75",
}

export type ThresholdParams = {
  good: (value: number) => boolean;
  poor: (value: number) => boolean;
};

export type MetricMetaData = {
  name: PerformanceMetrics;
  shortcode: string;
  title: string;
  description: string;
  unitFormat: (value: number) => string;
  threshold?: Record<Percentile, ThresholdParams>;
};

export const allowedBrowserMetrics = [
  PerformanceMetrics.FCP,
  PerformanceMetrics.LCP,
  PerformanceMetrics.CLS,
];

export const metricsOrder = [
  PerformanceMetrics.FCP,
  PerformanceMetrics.LCP,
  PerformanceMetrics.CLS,
  PerformanceMetrics.TTFB,
  PerformanceMetrics.TBT,
  PerformanceMetrics.FID,
  PerformanceMetrics.FP,
];

export const metricsColorsMap = {
  [PerformanceMetrics.FCP]: "#F87171",
  [PerformanceMetrics.LCP]: "#FBBF24",
  [PerformanceMetrics.CLS]: "#34D399",
  [PerformanceMetrics.TTFB]: "#60A5FA",
  [PerformanceMetrics.TBT]: "#A78BFA",
  [PerformanceMetrics.FID]: "#DB2777",
  [PerformanceMetrics.FP]: "#2563EB",
};
