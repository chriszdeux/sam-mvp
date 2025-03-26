"use client";
import { AutocompleteStyled } from "@/styled-components/global/autocomplete";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface Props {
  isTransfer?: boolean;
}

export default function TradeCryptoForm({
  isTransfer = false,
}: Props) {
  const { breakpoints } = useTheme();
  const md = useMediaQuery(breakpoints.down("md"));
  return (
    <form>
      <Grid2 container spacing={2} sx={{
        margin: '16px 0'
      }}>
        <Grid2  mt={2} size={{ xs: 12 }}>
          <Typography variant="body1" color="info" align="right">Balance: 1,852.66 CR</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: isTransfer ? 4 : 3 }}>
          <AutocompleteStyled
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Crypto"
                size="small"
                variant="filled"
              />
            )}
            noOptionsText="No hay opciones"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: isTransfer ? 4 : 3 }}>
          <TextField type="number" variant="filled" label="Cantidad" size="small" fullWidth />
        </Grid2>
        <Grid2 size={{ xs: 12, md: isTransfer ? 4 : 3 }}>
          <TextField
            variant="filled"
            label="Cantidad en CR"
            size="small"
            fullWidth
          />
        </Grid2>
        {
          !isTransfer &&
          <Grid2 size={{ xs: 12, md: 3 }}>
            <TextField variant="filled" label="Precio" size="small" fullWidth/>
          </Grid2>
        }
        <Grid2 size={{ xs: 12, md: 6 }}>
          <AutocompleteStyled
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Wallet que Recibe"
                size="small"
                variant="filled"
              />
            )}
            noOptionsText="No hay opciones"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          {
            isTransfer
            ? 
            <AutocompleteStyled
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Wallet que Recibe"
                size="small"
                variant="filled"
              />
            )}
            noOptionsText="No hay opciones"
          />
          :
            <TextField
              variant="filled"
              label="Wallet de Contrato"
              size="small"
              fullWidth
            />
          }
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <AutocompleteStyled
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Red / Blockchain"
                size="small"
                variant="filled"
              />
            )}
            noOptionsText="No hay opciones"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
          <Typography variant="body1" color="info" align="right">Comision: 0.5%</Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}  sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}>
          <Typography variant="body1" color="info" align="right">Total: 1,852.66 CR</Typography>
        </Grid2>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Confirmar Datos"
            labelPlacement="start"
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }}>
            <Button variant="contained" color="success" fullWidth>
              Crear Orden
            </Button>
        </Grid2>
      </Grid2>
    </form>
  );
}
