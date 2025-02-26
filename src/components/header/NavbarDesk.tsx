"use client";
import { menuRoutes } from "@/routes/routes";
import { Breadcrumbs, Link, Stack, useMediaQuery, useTheme } from "@mui/material";
import LinkNext from "next/link";
export default function NavbarDesk() {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Stack
    direction="row"
      spacing={2}
    >
      {menuRoutes.map((route) => (
        <Link href={route.path} color="primary" key={route.path} sx={{
          fontSize: '1.6rem',
        }} component={LinkNext}>
          {route.label}
        </Link>
      ))}
    </Stack>
  );
}
