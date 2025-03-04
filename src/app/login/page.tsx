import PageContainer from "@/components/containers/PageContainer";
import { Button, Checkbox, FormControlLabel, Link as LinkM, Stack, TextField, Typography } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Link from "next/link";

export default function LoginPage() {
  return (
    <PageContainer title="Iniciar Sesión">
      <Stack component="form" spacing={2}>
        <TextField label="Usuario" variant="filled" fullWidth color="primary"/>
        <TextField type="password" label="Contraseña" variant="filled"  color="primary" 
        />
         <FormControlLabel
          control={<Checkbox />}
          label="Recordarme"
          labelPlacement="start"
        />
        <Button variant="contained" fullWidth>Entrar</Button>
        <Button variant="text" sx={{
          alignSelf: "flex-end"
        }}>Olvidé mi contraseña</Button>
        {/* <Button variant="text" fullWidth>Registrarse</Button> */}
        <Typography variant="h3">
          ¿No tienes cuenta?
          <LinkM
            href="/signup"
            component={Link}
            underline="none"
            color="primary.main"
            ml={1}
          >
            Registrate
          </LinkM>
        </Typography>
      </Stack>
    </PageContainer>
  );
}
