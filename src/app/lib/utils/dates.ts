export const ONE_YEAR = 365 * 24 * 60 * 60 * 1000;
export const TEN_MINUTES = 10 * 60 * 1000;
export const THIRTY_SECONDS = 30 * 1000;
export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const THIRTY_MINUTES = 30 * 60 * 1000;
export const FOURTY_FIVE_MINUTES = 45 * 60 * 1000;
export const THREE_MINUTES = 3 * 60 * 1000;

export const minutesToSeconds = (minutes: number): number => minutes * 60;
export const millisecondsToMinutes = (milliseconds: number): number =>
  milliseconds / 1000 / 60;
export const minutesToMilliseconds = (minutes: number): number =>
  minutes * 60 * 1000;
