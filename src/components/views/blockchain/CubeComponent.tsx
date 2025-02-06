"use client";

import { Stack } from "@mui/material";
import { CSSProperties, useEffect, useState } from "react";

interface Props {
  arrSize?: number;
  size?: number;
  colors?: any[];
  sx?: CSSProperties;
}

export default function CubeComponent({
  size = 10,
  colors = [],
  sx,
  arrSize = 1,
}: Props) {
  const components = Array.from({ length: arrSize });

  const randomColor = () =>
    colors.length ? colors[Math.floor(Math.random() * colors.length)] : "#000";

  // Mantener el índice de la cara seleccionada para cada cubo
  const [selectedFaceIndexes, setSelectedFaceIndexes] = useState<number[]>(
    Array.from({ length: arrSize }, () => Math.floor(Math.random() * 6))
  );

  // Las coordenadas de los puntos del cubo en 3D
  const points = [
    { x: 0, y: 0, z: 0 }, // Punto A
    { x: size, y: 0, z: 0 }, // Punto B
    { x: size, y: size, z: 0 }, // Punto C
    { x: 0, y: size, z: 0 }, // Punto D
    { x: 0, y: 0, z: size }, // Punto E
    { x: size, y: 0, z: size }, // Punto F
    { x: size, y: size, z: size }, // Punto G
    { x: 0, y: size, z: size }, // Punto H
  ];

  // Proyección isométrica para transformar las coordenadas 3D a 2D
  const projectTo2D = (x: number, y: number, z: number) => {
    return {
      x: (x - y) * Math.cos(Math.PI / 6),
      y: (x + y) * Math.sin(Math.PI / 6) - z,
    };
  };

  // Proyectar todos los puntos a 2D
  const projectedPoints = points.map((point) =>
    projectTo2D(point.x, point.y, point.z)
  );

  // Función para obtener la cara de un cubo
  const getFace = (pointsIdx: number[]) => {
    return pointsIdx
      .map((idx) => {
        const point = projectedPoints[idx];
        return `${point.x},${point.y}`;
      })
      .join(" ");
  };

  // Definir las caras del cubo (pares de puntos)
  const faces = [
    [0, 1, 2, 3], // Cara frontal
    [4, 5, 6, 7], // Cara trasera
    [0, 1, 5, 4], // Cara inferior
    [1, 2, 6, 5], // Cara lateral derecha
    [2, 3, 7, 6], // Cara superior
    [3, 0, 4, 7], // Cara lateral izquierda
  ];

  // Cambiar la cara seleccionada para cada cubo cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedFaceIndexes((prevIndexes) =>
        prevIndexes.map(() => Math.floor(Math.random() * faces.length))
      );
    }, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap={1}
    >
      {components.map((_, i) => (
        <svg
          key={i}
          width={size * 2} // Ajustar el ancho para la proyección
          height={size * 2} // Ajustar la altura para la proyección
          viewBox={`${-size} ${-size} ${size * 2} ${size * 2}`} // Ajustar el viewBox
          style={{
            ...sx,
            transition: "all 0.3s ease-in-out", // Transición suave para el cambio de cara
          }}
        >
          {/* Dibujar todas las caras del cubo */}
          {faces.map((faceIdx, idx) => (
            <polygon
              key={idx}
              points={getFace(faceIdx)}
              fill={idx === selectedFaceIndexes[i] ? randomColor() : "none"} // Solo la cara seleccionada se rellena
              stroke={randomColor()} // Bordes aleatorios
              strokeWidth="2"
            />
          ))}
        </svg>
      ))}
    </Stack>
  );
}
