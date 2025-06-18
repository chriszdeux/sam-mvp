"use client";
import { Typography } from "@mui/material";
import PlanetImage from "../../assets/img/planet.jpg";
import PrismaImage from "../../assets/img/prisma.jpg";
import ChartImage from "../../assets/img/chart.jpg";

import { FigCaption } from "@/styled-components/global/images.styled";
import {
  HistoryImageContainer,
  HistoryImagesDisplay,
  HistoryLeftImage,
  HistoryMainImage,
  HistoryRightImage,
} from "@/styled-components/historySection.styled";

interface Props {
  sx?: any;
  className?: string;
}
export default function ImageCarousel({
  sx,
  className,
}:Props) {
  return (
    <HistoryImagesDisplay className={className} sx={sx}>
      <HistoryLeftImage src={ChartImage} alt="planet img" />
      <HistoryImageContainer>
        <HistoryMainImage src={PlanetImage} alt="planet img" />
        <FigCaption>
          <Typography variant="caption">Blockchain en todas partes,</Typography>
        </FigCaption>
      </HistoryImageContainer>
      <HistoryRightImage src={PrismaImage} alt="planet img" />
    </HistoryImagesDisplay>
  );
}
