import { BrowserMetaData, Browsers } from "../types/browsers";

const browserImages = {
  brave: "/browsers/brave.png",
  chrome: "/browsers/chrome.png",
  edge: "/browsers/edge.png",
  firefox: "/browsers/firefox.png",
  opera: "/browsers/opera.png",
  safari: "/browsers/safari.png",
  samsung: "/browsers/samsung.png",
};

const BROWSERS: Record<Browsers, BrowserMetaData> = {
  [Browsers.BRAVE]: {
    shortcode: Browsers.BRAVE,
    name: "Brave",
    image: "/browsers/brave.png",
  },
  [Browsers.CHROME]: {
    shortcode: Browsers.CHROME,
    name: "Chrome",
    image: "/browsers/chrome.png",
  },
  [Browsers.EDGE]: {
    shortcode: Browsers.EDGE,
    name: "Edge",
    image: "/browsers/edge.png",
  },
  [Browsers.FIREFOX]: {
    shortcode: Browsers.FIREFOX,
    name: "Firefox",
    image: "/browsers/firefox.png",
  },
  [Browsers.OPERA]: {
    shortcode: Browsers.OPERA,
    name: "Opera",
    image: "/browsers/opera.png",
  },
  [Browsers.SAFARI]: {
    shortcode: Browsers.SAFARI,
    name: "Safari",
    image: "/browsers/safari.png",
  },
  [Browsers.SAMSUNG]: {
    shortcode: Browsers.SAMSUNG,
    name: "Samsung",
    image: "/browsers/samsung.png",
  },
};

export default BROWSERS;
