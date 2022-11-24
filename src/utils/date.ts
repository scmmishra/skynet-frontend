import dayjs from "dayjs";

/**
 * Format date to MMM YYYY
 * example: December 1974
 *
 * @param  {string} date
 */
export function formatDate(date?: string) {
  const parsed = date ? new Date(date) : new Date();
  return parsed.toLocaleDateString("en-US", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  });
}

/**
 * Genereate last n days
 * @param  {number} numberOfDays
 * @returns Array
 */
export function countDaysBackwards(numberOfDays: number): Array<string> {
  let counter = numberOfDays;
  let date = dayjs();
  const days = [];
  while (counter !== 0) {
    days.push(
      date.toDate().toLocaleDateString("en-US", {
        day: "2-digit",
        year: "numeric",
        month: "long",
      })
    );
    date = dayjs(date).subtract(1, "day");
    counter = counter - 1;
  }

  return days;
}
