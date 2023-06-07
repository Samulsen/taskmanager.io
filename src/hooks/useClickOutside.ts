import { useEffect, useRef, Dispatch, SetStateAction } from "react";

const useClickOutside = function (handler: Dispatch<SetStateAction<boolean>>) {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const evaluateClick = function (event: Event) {
      const element = domNode.current as any;
      if (!element.contains(event.target)) {
        handler(false);
      }
    };

    document.addEventListener("mousedown", evaluateClick);

    return () => {
      document.removeEventListener("mousedown", evaluateClick);
    };
  }, []);

  return domNode;
};

export default useClickOutside;
