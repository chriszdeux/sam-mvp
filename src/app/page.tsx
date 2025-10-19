"use client";
import { useRef } from "react";
import { SnappingContainer } from "@/components/containers/SnappingContainer";
import { SlideControls } from "@/components/containers/SlideControls";
import { HeroContent } from "@/views/hero/HeroContent";
import { SnapSlide } from "@/styles/SnappingContainer.styles";
import { ResponsiveImage } from "@/components/images/ResponsiveImage";
import { InfoCard } from "@/components/Cards/InfoCard";
import { Box, Container, Stack, Typography } from "@mui/material";
import HubIcon from "@mui/icons-material/Hub";
import { FeatureContent } from "@/views/FeatureContentView/FeatureContent";

export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SnappingContainer ref={containerRef}>
          <HeroContent containerRef={containerRef}/>
          <FeatureContent containerRef={containerRef}/>
      </SnappingContainer>

      {/* Pasamos la ref a la prop 'targetRef' */}
      <SlideControls targetRef={containerRef} />
    </>
  );
}
