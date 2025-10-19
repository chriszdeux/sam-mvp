import { InfoCard } from "@/components/Cards/InfoCard";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  info?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  width?: number | string;
  onClick?: () => void;
  btnText?: string;
}
export const FeatureCard = ({
  title,
  subtitle,
  info,
  icon,
  children,
  width,
  onClick,
  btnText,
}: Props) => {
  return (
    <InfoCard title={title} subtitle={subtitle} icon={icon} width={width}>
      <>
        {info && <Typography>{info}</Typography>}
        <Box mt={2} sx={{ textAlign: "center" }}>
          {children}
        </Box>
      </>
      {onClick && (
        <Box mt={2} sx={{ textAlign: "right" }}>
          <Button onClick={onClick} color="neutral">{btnText}</Button>
        </Box>
      )}
    </InfoCard>
  );
};
