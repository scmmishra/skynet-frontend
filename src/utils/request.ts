const API_URL = import.meta.env.VITE_API_URL;

/**
 * API wrapper to fetch from skynet client
 *
 * @param  {string} path
 * @param  {RequestInit} config
 * @returns Promise
 */
async function http<T>(path: string, config: RequestInit): Promise<T> {
  const requestPath = `${API_URL}${path}`;
  const request = new Request(requestPath, {
    ...config,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  const response = await fetch(request);

  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }

  // error if there is no body, return empty array
  return response.json().catch(() => ({}));
}

/**
 * GET method around the skynet client
 *
 * @param  {string} path
 * @param  {RequestInit} config?
 * @returns Promise
 */
export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: "GET", ...config };
  return await http<T>(path, init);
}

export const setIntervalAsync = (fn: () => Promise<void>, ms: number) => {
  fn().then(() => {
    setTimeout(() => setIntervalAsync(fn, ms), ms);
  });
};
