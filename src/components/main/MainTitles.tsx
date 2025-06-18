'use client'
import { animations } from "@/styles/animations";
import { Typography, useMediaQuery, useTheme } from "@mui/material";


export default function MainTitles() {
  const { breakpoints } = useTheme()
  const md = useMediaQuery(breakpoints.up('md'))
  return (
    <>
      <Typography variant="h1" align={md ? "left" : "center"} className={animations.fadeIn} sx={{
            animationDuration: '2s'
          }}>
        Desata el potencial de la humanidad en el cosmos
      </Typography>
      <Typography variant="h2" align={md ? "left" : "center"} className={animations.fadeIn} sx={{
            animationDuration: '2s',
            animationDelay: '1.5s'
          }}>
        Descubre el horizonte de la civilizacion digital
      </Typography>
    </>
  );
}
