// Performance Metrics

// firstPaint: First Paint is the exact time taken for the browser to render anything as visually different from what was on the screen before navigation
// firstContentfulPaint: First Contentful Paint is the exact time taken for the browser to render the first bit of content from the DOM
// firstInputDelay: First Input Delay measures the time from when a user first interacts with your site, to the time when the browser is actually able to respond to that interaction.
// largestContentfulPaint: Largest Contentful Paint is an important, user-centric metric for measuring perceived load speed because it marks the point in the page load timeline when the page's main content has likely loaded
// cumulativeLayoutShift: Cumulative Layout Shift is an important, user-centric metric for measuring visual stability because it helps quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the page is delightful.
// totalBlockingTime: Measures the total amount of time between First Contentful Paint and Time to Interactive where the main thread was blocked for long enough to prevent input responsiveness.

export enum PerformanceMetrics {
  FP = "firstPaint",
  FCP = "firstContentfulPaint",
  FID = "firstInputDelay",
  LCP = "largestContentfulPaint",
  CLS = "cumulativeLayoutShift",
  TBT = "totalBlockingTime",
}

export enum Percentile {
  p75 = "p75",
}

export type MetricMetaData = {
  shortcode: PerformanceMetrics;
  title: string;
  description: string;
  unitFormat: (value: number) => string;
  threshold?: Record<
    Percentile,
    {
      good: (value: number) => boolean;
      poor: (value: number) => boolean;
    }
  >;
};
