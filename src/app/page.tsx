"use client";
import { useRef } from "react";
import { SnappingContainer } from "@/components/containers/SnappingContainer";
import { SlideControls } from "@/components/containers/SlideControls";
import { HeroContent } from "@/views/HeroContent";
import { SnapSlide } from "@/styles/SnappingContainer.styles";
import Image from "../assets/img/main_bg.jpg";
import Image2 from "../assets/img/blockchain_cube.jpg";
import { ResponsiveImage } from "@/components/images/ResponsiveImage";
export default function MainPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <SnappingContainer ref={containerRef}>
        <SnapSlide backgroundImage={Image.src}>
          <HeroContent />
        </SnapSlide>
        <SnapSlide backgroundImage={Image2.src}>
          <ResponsiveImage
            src={Image2.src}
            alt="imagend"
            width={500}
            height={1000}
            gradientDirection="to right"
            caption="Gradient to top"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0
            }}

          />
        </SnapSlide>
      </SnappingContainer>

      <SlideControls ref={containerRef} />
    </>
  );
}
