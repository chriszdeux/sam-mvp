"use client";
import { AutocompleteStyled } from "@/styled-components/global/autocomplete";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Grid2,
  Stack,
  TextField,
} from "@mui/material";

export default function BuyCryptoForm() {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 3  }}>
        <AutocompleteStyled
          options={[]}
          // freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Crypto"
              size="small"
              variant="filled"
              // fullWidth
            />
          )}
          noOptionsText="No hay opciones"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextField variant="filled" label="Cantidad" size="small" fullWidth />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <TextField
          variant="filled"
          label="Cantidad en CR"
          size="small"
          fullWidth
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 3  }}>
        <TextField variant="filled" label="Precio" size="small" fullWidth />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <AutocompleteStyled
          options={[]}
          // freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Wallet que Recibe"
              size="small"
              variant="filled"
              // fullWidth
            />
          )}
          noOptionsText="No hay opciones"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <TextField
          variant="filled"
          label="Wallet de Contrato"
          size="small"
          fullWidth
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <AutocompleteStyled
          options={[]}
          // freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label="Red / Blockchain"
              size="small"
              variant="filled"
              // fullWidth
            />
          )}
          noOptionsText="No hay opciones"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextField variant="filled" label="Comisión" size="small" fullWidth />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <TextField variant="filled" label="Total" size="small" fullWidth />
      </Grid2>
      <Grid2 size={{ xs: 12 }} sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Confirmar Datos"
          labelPlacement="start"
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }}>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
         <Button variant="contained" color="error" fullWidth>Cancelar</Button>
         <Button variant="contained" color="success" fullWidth>Comprar</Button>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
