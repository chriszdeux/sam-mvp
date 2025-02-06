"use client";
import { Typography } from "@mui/material";
import PlanetImage from "../../../public/img/planet.jpg";
import PrismaImage from "../../../public/img/prisma.jpg";
import ChartImage from "../../../public/img/chart.jpg";

import { FigCaption } from "@/styled-components/global/images.styled";
import {
  HistoryImageContainer,
  HistoryImagesDisplay,
  HistoryLeftImage,
  HistoryMainImage,
  HistoryRightImage,
} from "@/styled-components/historySection.styled";

export default function ImageCarousel() {
  return (
    <HistoryImagesDisplay>
      <HistoryLeftImage src={ChartImage} alt="planet img" />
      <HistoryImageContainer>
        <HistoryMainImage src={PlanetImage} alt="planet img" />
        <FigCaption>
          <Typography variant="caption">Blockchain en todas partes,</Typography>
        </FigCaption>
        {/* <figcaption className={caption_container}>
        </figcaption> */}
      </HistoryImageContainer>
      <HistoryRightImage src={PrismaImage} alt="planet img" />
    </HistoryImagesDisplay>
  );
}
