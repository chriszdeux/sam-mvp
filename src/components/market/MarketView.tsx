'use client'
import {
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CryptoDisplay from "@/components/market/CryptoDisplay";
import MainTable from "@/components/table/MainTable";
import FilterSearchComponent from "@/components/market/FilterSearchComponent";
import { useEffect, useState } from "react";
import { columns, columnsLg } from "./columns";
import fakeData from "./fakeData";

export default function MarketView() {
  const theme = useTheme()
  const lg = useMediaQuery(theme.breakpoints.up('lg'))
  const [cols, setCols] = useState<any>([])
  columns
  useEffect(() => {
  lg ? setCols(columnsLg) : setCols( columns)
  }, [lg]);

  return (
    <>
      <Container>
        <Typography variant="h4" color="info" mt={16} mb={4}>
          Seleccion Aleatoria
        </Typography>
      </Container>
      <CryptoDisplay />
      <Container>
        <Typography variant="h4" color="info" mt={4}>
          Listado de Monedas
        </Typography>
      </Container>
      <FilterSearchComponent />
      <MainTable cols={cols} data={fakeData} pagination/>
    </>
  );
}
