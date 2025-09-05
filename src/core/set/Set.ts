import { setType } from "./Set.type";
import { setFun } from "./SetFun";

export const set: setType = (t) => t;

set.fun = setFun;

set.currentTime = () => new Date().toISOString();
set.currentDate = () => new Date().toISOString().split("T")[0];
set.currentDay = () => new Date().getDay();
set.currentHour = () => new Date().getHours();
set.currentMinute = () => new Date().getMinutes();
set.currentSecond = () => new Date().getSeconds();
set.timestamp = () => Date.now();

set.uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

set.randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
set.randomFloat = (min: number, max: number) =>
  Math.random() * (max - min) + min;
set.randomBoolean = () => Math.random() < 0.5;
set.choice = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
set.randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
