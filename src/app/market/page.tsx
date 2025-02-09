'use client'
import { Container, IconButton, TextField, Typography, useTheme } from "@mui/material";
import CryptoDisplay from "@/components/market/CryptoDisplay";
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import SearchIcon from '@mui/icons-material/Search';
import MainTable from "@/components/table/MainTable";
import columns from './columns'
import fakeData from "./fakeData";

export default function Market() {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Typography variant="h4" color="info" mt={16} mb={4}>
          Seleccion Aleatoria
        </Typography>
      </Container>
      <CryptoDisplay />
      <Container>
        <Typography variant="h5" color="info" mt={4}>
          Listado de Monedas
        </Typography>
      </Container>
      <Container sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: 4,
        marginTop: 4
      }}>
          <IconButton size="large">
            <SortByAlphaIcon sx={{color: theme.palette.success.light}}/>
          </IconButton>
        <TextField placeholder="Busqueda" variant="outlined" size="small" fullWidth
        slotProps={{
          input: {
            endAdornment: (
              <IconButton>
                <SearchIcon sx={{color: theme.palette.success.light}}/>
              </IconButton>
            )
          }
        }}
        />
      </Container>
      <MainTable 
        cols={columns}
        data={fakeData}
      />
    </>
  );
}
