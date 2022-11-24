export enum Browsers {
  BRAVE = "brave",
  CHROME = "chrome",
  EDGE = "edge",
  FIREFOX = "firefox",
  OPERA = "opera",
  SAFARI = "safari",
  SAMSUNG = "samsung",
}

export type BrowserMetaData = {
  shortcode: Browsers;
  name: string;
  image: string;
};
