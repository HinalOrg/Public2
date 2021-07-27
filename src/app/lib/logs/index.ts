/* eslint-disable @typescript-eslint/no-explicit-any */

export const createLog =
  (output: (...data: any[]) => void) =>
  (...messages: any[]): void => {
    output(messages.map((message) => JSON.stringify(message)).join('\n'));
  };

export const log = createLog(console.log);
export const warn = createLog(console.warn);
export const error = createLog(console.error);
