import { Box, Stack } from "@mui/material";
import Image from "next/image";
import Cube from "../../assets/img/cube_load.png";
import { createGradient } from "./createGradient";
import { useEffect, useState } from "react";
import {
  ImageLoadingBlur,
  LineDetail,
} from "@/styled-components/global/loading.styled";
import { animations } from "@/styles/animations";
import { cubeSize } from "./cubeSizes";
import { cubeStatus } from "@/enums/cubeStatus.enum";


interface Props {
  status?: string
}
export default function LoadingCube({
  status = cubeStatus.active
}: Props) {

  const gradient = createGradient(90, 100, 10);
  const [filter, setFilter] = useState("")
  
  useEffect(() => {
    switch (status) {
      case cubeStatus.active:
        setFilter("hue-rotate(295deg)")
        break;
      case cubeStatus.warning:
        setFilter("hue-rotate(180deg)")
        break;
      case cubeStatus.error:
        setFilter("hue-rotate(70deg)")
        break;
      default:
        break;
    }
  }, [status])

  
  return (
    <Box
      position="relative"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2
      }}
    >
      <ImageLoadingBlur
        className={animations.pulse}
        src={Cube}
        alt="Cube Shadow"
        width={200}
        height={200}
        style={{
          filter: `blur(20px) ${filter}`
        }}
        // rotate={45}
      />
      <Image
        src={Cube}
        alt="Loading Cube"
        width={150}
        height={150}
        style={{
          filter
        }}
        // style={{ objectFit: "contain", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />
      <Stack alignItems="center" spacing={.5} sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        // width: 50,
        // height: 150,
        zIndex: -1
      }}>
      
      {cubeSize.map((n, i) => {
        return (
          <LineDetail
            key={i}
            width={n.width}
            sx={{
              animationIterationCount: "infinite",
              animationDuration: "5.5s",
              background: gradient,
              // top: `${n.top}%`,
              animationDelay: `${n.delay / 2}s`,
              // transform: `translate(-50%, -50%) rotate(${i % 2 === 0 ? 45 : -45}deg)`
              filter: filter
            }}
          />
        )
      })}
      </Stack>
    </Box>
  );
}
