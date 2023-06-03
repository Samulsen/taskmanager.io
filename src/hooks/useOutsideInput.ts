import { useState, useRef } from "react";
import { input } from "../types/types";

const useOutsideInput = function () {
  const [inputValidity, setInputValidity] = useState<input>("cold");
  const inputRef = useRef<HTMLInputElement>(null);

  return [inputValidity, setInputValidity, inputRef] as const;
};

export default useOutsideInput;
