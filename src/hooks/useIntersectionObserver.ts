'use-client'
import { useEffect, useRef } from "react";

export const useIntersectionObserver = (
  options: string[],
  animationClass: string
) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
          } else {
            entry.target.classList.remove(animationClass);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    const elements = ref.current?.childNodes;
    if (elements) {
      elements.forEach((element) => {
        observer.observe(element as HTMLElement);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [options, animationClass]);

  return ref;
};
