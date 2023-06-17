import { useState, useRef } from "react";

const useOutsideInput = function () {
  const [inputValidity, setInputValidity] = useState<boolean | string>("cold");
  const inputRef = useRef<HTMLInputElement>(null);

  return [inputValidity, setInputValidity, inputRef] as const;
};

export default useOutsideInput;
