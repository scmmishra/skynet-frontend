import {
  PerformanceMetrics,
  Percentile,
  MetricMetaData,
} from "../types/metrics";
import { BadgeTone } from "../types/ui";

const METRICS: Record<PerformanceMetrics, MetricMetaData> = {
  [PerformanceMetrics.FP]: {
    name: PerformanceMetrics.FP,
    title: "First Paint",
    description:
      "First Paint is the exact time taken for the browser to render anything as visually different from what was on the screen before navigation",
    unitFormat: (value) => `${value}ms`,
  },
  [PerformanceMetrics.CLS]: {
    name: PerformanceMetrics.CLS,
    title: "Cumulative Layout Shift",
    description:
      "Cumulative Layout Shift is an important, user-centric metric for measuring visual stability because it helps quantify how often users experience unexpected layout shifts—a low CLS helps ensure that the page is delightful.",
    unitFormat: (value) => value.toFixed(2),
    threshold: {
      [Percentile.p75]: {
        good: (value) => value <= 0.1,
        poor: (value) => value >= 0.25,
      },
    },
  },
  [PerformanceMetrics.FCP]: {
    name: PerformanceMetrics.FCP,
    title: "First Contentful Paint",
    description:
      "First Contentful Paint is the exact time taken for the browser to render the first bit of content from the DOM",
    unitFormat: (value) => `${value}ms`,
    threshold: {
      [Percentile.p75]: {
        good: (value) => value <= 1800,
        poor: (value) => value >= 3000,
      },
    },
  },
  [PerformanceMetrics.FID]: {
    name: PerformanceMetrics.FID,
    title: "First Input Delay",
    description:
      "First Input Delay measures the time from when a user first interacts with your site, to the time when the browser is actually able to respond to that interaction.",
    unitFormat: (value) => `${value}ms`,
    threshold: {
      [Percentile.p75]: {
        good: (value) => value <= 100,
        poor: (value) => value >= 300,
      },
    },
  },
  [PerformanceMetrics.LCP]: {
    name: PerformanceMetrics.LCP,
    title: "Largest Contentful Paint",
    description:
      "Large Contentful Paint is an important, user-centric metric for measuring perceived load speed because it marks the point in the page load timeline when the page's main content has likely loaded",
    unitFormat: (value) => `${value}ms`,
    threshold: {
      [Percentile.p75]: {
        good: (value) => value <= 2500,
        poor: (value) => value >= 4000,
      },
    },
  },
  [PerformanceMetrics.TBT]: {
    name: PerformanceMetrics.TBT,
    title: "Total Blocking Time",
    description:
      "Total Blocking Time measures the total amount of time between First Contentful Paint and Time to Interactive where the main thread was blocked for long enough to prevent input responsiveness.",
    unitFormat: (value) => `${value}ms`,
    threshold: {
      [Percentile.p75]: {
        good: (value) => value <= 200,
        poor: (value) => value > 200,
      },
    },
  },
  [PerformanceMetrics.TTFB]: {
    name: PerformanceMetrics.TTFB,
    title: "Time to First Byte",
    description:
      "Time to First Byte is the time taken by the browser to receive the first byte of the response from the server",
    unitFormat: (value) => `${value}ms`,
    threshold: {
      [Percentile.p75]: {
        good: (value) => value <= 800,
        poor: (value) => value >= 1800,
      },
    },
  },
};

export function percentageFromChange(change?: number) {
  if (change) {
    return `${Math.abs(change).toFixed(0)}%`;
  }

  return "";
}

export function formatUnit(name: PerformanceMetrics, value: number) {
  return METRICS[name].unitFormat(value);
}

export function metricStatus(
  name: PerformanceMetrics,
  value: number
): BadgeTone {
  const threshold = METRICS[name].threshold;

  if (threshold) {
    const p75Thresholds = threshold[Percentile.p75];
    const isGood = p75Thresholds.good(value);
    const isPoor = p75Thresholds.poor(value);

    if (isGood) {
      return "positive";
    }

    if (isPoor) {
      return "negative";
    }

    return "warning";
  }

  return "neutral";
}

export default METRICS;
