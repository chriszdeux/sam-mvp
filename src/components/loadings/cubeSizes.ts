const randomWidth = (start:number, end:number) => {
  const random = Math.floor(Math.random() * end) + start;
  console.log(random);
  return random;
};

const start = 250;
const end = 250;
export const cubeSize = [
  {
    top: 35,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 40,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 45,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 50,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 55,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 35,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 40,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 45,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 50,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
  {
    top: 55,
    width: randomWidth(start, end),
    delay: randomWidth(0, 10)
  },
]