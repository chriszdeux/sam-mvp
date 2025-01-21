'use client'
import {Box, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from '../../../styles/index.module.scss'
import MainText from "@/components/views/main/MainText";
import CallToActionButtons from "./CallToActionButtons";
import ListMainCryptos from "./ListMainCryptos";
import BackgroundImage from "./BackgroundImage";

export default function MainScreen() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.down('lg'));

  const { main_section, main_info_container, main_info_container_, fade_overlay, fade_overlay_left, main__bg, rotate_slow } = styles
  console.log("MAIN",lg)
  return (
    <main className={` ${main_section}`}
    >
      <Box className={`${main_info_container}`} sx={{
        width: !lg ? "50%" : "100%",
      }}>
        <Typography variant="body1" color="primary" align={  !lg ? 'left' : 'center' } className={styles.title}>
        Desata el potencial de la humanidad en el cosmos
        </Typography>
        <Typography variant="body2" color="primary" align={  !lg ? 'left' : 'center' } className={styles.subtitle}>
        Descubre el horizonte de la civilizacion digital 
        </Typography>
        <MainText />
        {
          lg && 
         <ListMainCryptos />
        }
        <CallToActionButtons />
      </Box>
      <BackgroundImage />
      {
           !lg &&
           <ListMainCryptos
           sx={{
             position: "absolute",
             top: "60%",
             right: '5%',
             zIndex: 1,
             width: 500,
           }}
         />
      }
    </main>
  );
}
