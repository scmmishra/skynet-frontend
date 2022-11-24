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
    name: Browsers.BRAVE,
    name: "Brave",
    image: "/browsers/brave.png",
  },
  [Browsers.CHROME]: {
    name: Browsers.CHROME,
    name: "Chrome",
    image: "/browsers/chrome.png",
  },
  [Browsers.EDGE]: {
    name: Browsers.EDGE,
    name: "Edge",
    image: "/browsers/edge.png",
  },
  [Browsers.FIREFOX]: {
    name: Browsers.FIREFOX,
    name: "Firefox",
    image: "/browsers/firefox.png",
  },
  [Browsers.OPERA]: {
    name: Browsers.OPERA,
    name: "Opera",
    image: "/browsers/opera.png",
  },
  [Browsers.SAFARI]: {
    name: Browsers.SAFARI,
    name: "Safari",
    image: "/browsers/safari.png",
  },
  [Browsers.SAMSUNG]: {
    name: Browsers.SAMSUNG,
    name: "Samsung",
    image: "/browsers/samsung.png",
  },
};

export default BROWSERS;
