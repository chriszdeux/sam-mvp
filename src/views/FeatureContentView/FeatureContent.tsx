import React from "react";
import { LandingPageProps } from "../hero/HeroContent";
import Image2 from "../../assets/img/blockchain_cube.jpg";
import { SnapSlide } from "@/styles/SnappingContainer.styles";
import { ResponsiveImage } from "@/components/images/ResponsiveImage";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { InfoCard } from "@/components/Cards/InfoCard";
import HubIcon from "@mui/icons-material/Hub";
import { FeatureCard } from "./FeatureCard";
import { landingPageData } from "@/info/landingPage.info";
import zIndex from "@mui/material/styles/zIndex";

export const FeatureContent = ({
  containerRef,
}: LandingPageProps) => {
  const {
    features: {
      title, items
    }
  } = landingPageData
  return (
    <SnapSlide backgroundImage={Image2.src} ref={containerRef} isBlurred={false}>
      <Container sx={{
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        position: 'relative',
      }}>

      <ResponsiveImage
        src={Image2.src}
        alt="imagend"
        width={600}
        height={500}
        // gradientDirection="to left"
        caption="Gradient to top"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      </Container>
      <Stack spacing={2} alignItems="flex-end" p={2}>
        {
          items.map(item => (
            <FeatureCard
              key={item.title}
              title={item.title}
              // subtitle={item.subtitle}
              info={item.description}
              width={600}
              onClick={() => ({})}
              btnText="Ver más"
            />
          ))
        }
      </Stack>
    </SnapSlide>
  );
};
