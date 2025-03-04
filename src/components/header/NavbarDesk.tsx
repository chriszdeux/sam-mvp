"use client";
import { menuRoutes } from "@/routes/routes";
import { Link, Stack, useMediaQuery, useTheme } from "@mui/material";
import LinkNext from "next/link";
import FaceIcon from '@mui/icons-material/Face';

export default function NavbarDesk() {
  const fSize = "1.6rem"
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Stack
    direction="row"
    alignItems="center"
      spacing={2}
    >
      {menuRoutes.map((route) => (
        <Link href={route.path}  key={route.path} sx={{
          fontSize: fSize,
        }} component={LinkNext}>
          {route.label}
        </Link>
      ))}
      <FaceIcon />
    </Stack>
  );
}
