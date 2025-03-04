'use client'
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import CryptoLayout from "../CryptoLayout";
import MainTable from "@/components/table/MainTable";
import { columns, columnsLg } from "./columns";
import { data } from "./data";


export default function CryptoTransactionsPage() {
  const theme = useTheme()
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  return (
    <CryptoLayout title="Transacciones Kanto, procesadas el dia de hoy 4,5852" divider sx={{overflowX: 'scroll'}}>
       <MainTable cols={ lg ? columnsLg : columns} data={data} pagination/>
    </CryptoLayout>
  );
}