import React from 'react'
import BuyCryptoForm from "@/components/trade/BuyCryptoForm"

interface Props {
  title?: string;
  component: React.FC;
}

export const tradeRoutes: Props[] = [
  {
    title: "Comprar",
    component: BuyCryptoForm,
  },
  {
    title: "Venta",
    component: BuyCryptoForm,
  },
  {
    title: "Transferir",
    component: BuyCryptoForm,
  },
  {
    title: "Convertir",
    component: BuyCryptoForm,
  },
  {
    title: "Analizar",
    component: BuyCryptoForm,
  },
]
