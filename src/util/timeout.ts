import { FunctionBody } from "typescript";

const timeout = function (callback: any, sec: number): void {
  setTimeout(() => {
    callback();
  }, sec * 1000);
};

export default timeout;
