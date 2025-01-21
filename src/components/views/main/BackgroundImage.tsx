"use client";
import Image from "next/image";
import ImageBG from "../../../public/img/main_bg.jpg";
import { useMediaQuery, useTheme } from "@mui/material";
import styles from "../../../styles/index.module.scss";
import ListMainCryptos from "./ListMainCryptos";

export default function BackgroundImage() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(lg)
  const {
    main_section,
    main_info_container,
    fade_overlay,
    fade_overlay_left,
    fade_overlay_right,
    main_bg,
    rotate_slow,
    zoom_animation
  } = styles;

  return (
    <figure className={`${main_bg} ${zoom_animation}`} style={{
      left: lg ? "50%" : "0%",
    }}>
      <div className={`${fade_overlay_left}`}></div>
      <Image
        src={ImageBG}
        alt="Background image"
        // className={zoom_animation}
        style={{
          width:"100%",
          // width: lg ? "100%" : "300%",
          height: '100vh',
          objectFit: "cover",
          objectPosition: "center",
          // filter: "brightness(0.5)",
        }}
      />
       <div className={`${fade_overlay}`}></div>
    </figure>
  );
}
