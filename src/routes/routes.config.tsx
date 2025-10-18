import MainPage from "@/app/page";
import React from "react";
import { ReactElement, ReactNode } from "react";

export interface RouteConfig {
  path: string;
  title: string;
  element: ReactElement | ReactNode;
  backgroundImage?: string;
  description?: string;
  condition?: () => boolean;
  children?: RouteConfig[];
}

const isAuthenticated = () => true;

export const routes: RouteConfig[] = [
  {
    path: "/",
    title: "Inicio",
    element: <MainPage />,
    backgroundImage: "/images/hero-background.jpg",
    description: "Bienvenido al universo de SAM.",
  },
  {
    path: "/identity",
    title: "Tu Identidad",
    element: <h2>Tu Identidad</h2>, // Elemento de marcador de posición
    backgroundImage: "/images/identity-background.jpg",
    description: "Define y gestiona tu identidad digital.",
  },

];
