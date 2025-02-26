"use client";

import { Stack } from "@mui/material";
import { CSSProperties } from "react";

interface Props {
  arrSize?: number;
  size?: number;
  colors?: any[];
  sx?: CSSProperties;
}

export default function HexaComponent({
  size = 10,
  colors = [],
  sx,
  arrSize = 1,
}: Props) {
  const components = Array.from({ length: arrSize });

  const points = [
    [size * 0.5, 0],
    [size, size * 0.15],
    [size, size * 0.85],
    [size * 0.5, size],
    [0, size * 0.85],
    [0, size * 0.15],
  ]
    .map((point) => point.join(","))
    .join(" ");

  const randomColor = () =>
    colors.length ? colors[Math.floor(Math.random() * colors.length)] : "#000";

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={1}
    >
      {components.map((_, i) => (
        <div key={i}>
        <svg
          // key={i}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          style={sx ?? {}}
          >
          <polygon
            points={points}
            fill={randomColor()}
            style={{
              transition: "all 0.3s ease-in-out",
            }}
            />
        </svg>
            </div>
      ))}
    </Stack>
  );
}
