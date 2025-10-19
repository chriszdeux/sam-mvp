'use client'
import React from 'react';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { Navbar } from '../Navbar';
import { RouteConfig, routes } from '@/routes/routes.config';
// Asegúrate que la ruta sea correcta

const findRouteConfig = (path: string, routeList: RouteConfig[]): RouteConfig | undefined => {
  for (const route of routeList) {
    if (route.path === path) return route;
    if (route.children) {
      const childRoute = findRouteConfig(path, route.children);
      if (childRoute) return childRoute;
    }
  }
  return undefined;
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const currentRoute = findRouteConfig(pathname, routes);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: currentRoute?.backgroundImage ? `url(${currentRoute.backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <Navbar />
      <main>
        {children}
      </main>
    </Box>
  );
};