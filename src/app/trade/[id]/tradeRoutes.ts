import TradeCryptoForm from '@/components/trade/TradeCryptoForm';
import React from 'react'

interface Props {
  title?: string;
  component: React.FC;
  transfer?: boolean
}

export const tradeRoutes: Props[] = [
  {
    title: "Comprar",
    component: TradeCryptoForm,
    transfer: false
  },
  {
    title: "Venta",
    component: TradeCryptoForm,
    transfer: false
  },
  {
    title: "Transferir",
    component: TradeCryptoForm,
    transfer: true
  },
]
