export const mainBgAnimation = () => {
  return `
  @keyframes main_bg_animation {
    0% {
      transform: scale(1);
      opacity: 0;
      filter: grayscale(0);
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
      filter: grayscale(1) brightness(100px);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
      filter: grayscale(0) brightness(0px);
    }
  }
`
};
