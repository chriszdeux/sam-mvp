'use client'

export const useScrollView = (ref: React.RefObject<HTMLDivElement>) => {
  const handleScrollDown = () => {
    ref?.current?.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleScrollUp = () => {
    ref?.current?.scrollBy({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleScrollToTop = () => {
    ref?.current?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    handleScrollDown,
    handleScrollUp,
    handleScrollToTop,
  };
};
