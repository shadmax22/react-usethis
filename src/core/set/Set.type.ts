export type setType = {
  <T>(value: T): T;
  fun: <T>(fun: T) => T;
  currentTime: () => string;
  currentDate: () => string;
  currentDay: () => number;
  currentHour: () => number;
  currentMinute: () => number;
  currentSecond: () => number;
  timestamp: () => number;
  randomInt: (min: number, max: number) => number;
  randomFloat: (min: number, max: number) => number;
  randomBoolean: () => boolean;
  choice: <T>(arr: T[]) => T;
  randomHexColor: () => string;
  uuid: () => string;
};
