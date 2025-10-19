import { landingPageData } from '@/info/landingPage.info';
import { Box, Button, Typography } from '@mui/material';
import Image from "../../assets/img/main_bg.jpg";
import { SnapSlide } from '@/styles/SnappingContainer.styles';

export interface LandingPageProps {
  containerRef:  React.RefObject<HTMLDivElement>
}

export const HeroContent = ({
  containerRef,
}: LandingPageProps) => {
  const {
    hero: {
      title, subtitle, visionStatement, cta: { buttonText }
    },
  } = landingPageData
  return (
    <SnapSlide ref={containerRef} backgroundImage={Image.src}>
      <Box textAlign="center" padding={8}>
        <Typography variant="h3" mb={3}>{title}</Typography>
        <Typography variant="h5" mb={3}>{subtitle}</Typography>

        <Typography variant="body1">{visionStatement}</Typography>
      </Box>
      <Box textAlign="center" sx={{ px: 4, mt: 4 }}>
        <Button color="info" variant="contained">{buttonText}</Button>
      </Box>
    </SnapSlide>
  );
};