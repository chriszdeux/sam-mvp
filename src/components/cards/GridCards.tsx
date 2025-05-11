'use client'
import { Grid2 } from "@mui/material";
import CryptoCard from "./CryptoCard";
import { delayAnimation } from "@/utils/delayAnimation.utils";
import { animations } from "@/styles/animations";

export default function GridCards() {
  const cards = Array.from({ length: 3 }, (_, i) => i);
  const {fadeDown} = animations
  return (
        <Grid2 container spacing={3} className={fadeDown} sx={delayAnimation(2)}>
          {cards.map((card, i) => (
            <Grid2 key={i} size={{ xs: 12, md: 4, }}>
              <CryptoCard animationDelay={i * 0.2} />
            </Grid2>
          ))}
        </Grid2>
  );
}
