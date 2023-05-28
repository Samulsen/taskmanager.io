import { FunctionBody } from "typescript";

const timeout = function (callback: Function, sec: number): void {
  setTimeout(() => {
    callback();
  }, sec * 1000);
};

export default timeout;
