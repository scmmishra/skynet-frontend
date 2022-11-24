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
    shortcode: "FP",
    description:
      "This is the exact time taken for the browser to render anything as visually different from what was on the screen before navigation.",
    unitFormat: (value) => `${value.toFixed(0)}ms`,
  },
  [PerformanceMetrics.CLS]: {
    name: PerformanceMetrics.CLS,
    title: "Cumulative Layout Shift",
    shortcode: "CLS",
    learnMore: "https://web.dev/cls/",
    description:
      "Sum of layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.",
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
    shortcode: "FCP",
    learnMore: "https://web.dev/fcp/",
    description:
      "This is the exact time taken for the browser to render the first bit of content from the DOM.",
    unitFormat: (value) => `${value.toFixed(0)}ms`,
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
    learnMore: "https://web.dev/fid/",
    shortcode: "FID",
    description:
      "Response time of the browser to a user interaction with the page (clicking, tapping, etc).",
    unitFormat: (value) => `${value.toFixed(0)}ms`,
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
    learnMore: "https://web.dev/lcp/",
    shortcode: "LCP",
    description:
      "Render time for the largest content element visible in the viewport.",
    unitFormat: (value) => `${value.toFixed(0)}ms`,
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
    learnMore: "https://web.dev/tbt/",
    shortcode: "TBT",
    description:
      "The total amount of time your webpage was blocked, preventing the user from interacting with your page.",
    unitFormat: (value) => `${value.toFixed(0)}ms`,
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
    learnMore: "https://web.dev/ttfb/",
    shortcode: "TTFB",
    description:
      "Time taken by the browser to receive the first byte of the response from the server",
    unitFormat: (value) => `${value.toFixed(0)}ms`,
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
