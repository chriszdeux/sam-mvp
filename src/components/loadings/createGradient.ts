export const createGradient = (deg: number, limit: number, interval: number) => {
  const stops: string[] = [];

  for (let i = 0; i <= limit; i += interval) {
    const color = i % (interval * 2) !== 0 
      ? 'rgba(255, 255, 255, 0)' 
      : 'rgba(120, 219, 255, 0.49)';
      
    stops.push(`${color} ${i}%`);
  }

  return `linear-gradient(${deg}deg, ${stops.join(', ')})`;
};
