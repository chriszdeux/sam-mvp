import { animations } from "@/styles/animations";
import { fixNumber } from "@/utils/numbersToolts.utils";
import { useEffect, useRef, useState } from "react";

export const useAutoCounter = (value: number) => {
  const [counter, setCounter] = useState(0);
  const {fadeIn, pulse} = animations
  const [animation, setAnimation] = useState(fadeIn)
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const split = value / 10;
    setCounter(0);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCounter((prev) => {
        const next = prev + split;
        if (next >= value) {
          clearInterval(intervalRef.current!);
          setAnimation(pulse)
          return value;
        }
        return next;
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [value]);

  return {
    counter: fixNumber(counter),
    animation: animation
  };
};
