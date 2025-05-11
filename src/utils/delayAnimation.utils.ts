import { animations, animationsBase } from "@/styles/animations";

interface FuncReturn {
  animationDelay: string;
  animationDuration: string;
}

export const delayAnimation = (delay: number):FuncReturn => {
  return {
    animationDelay: `${delay}s`,
    animationDuration: "2s",
  };
};
