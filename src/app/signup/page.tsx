import PageContainer from "@/components/containers/PageContainer";
import {
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
  Link as LinkM,
} from "@mui/material";
import Link from "next/link";

export default function page() {
  return (
    <PageContainer title="Crear Cuenta">
      <Stack component="form" spacing={2}>
        <TextField label="Email" variant="filled" fullWidth color="primary" />
        <TextField label="Usuario" variant="filled" fullWidth color="primary" />
        <TextField
          type="password"
          label="Contraseña"
          variant="filled"
          color="primary"
        />
        <TextField
          type="password"
          label="Confirmar Contraseña"
          variant="filled"
          color="primary"
        />
        <Typography variant="body2" color="textSecondary">
          Favor de aceptar los
          <LinkM href="/" component={Link} ml={1} color="primary.main">
            terminos y condiciones
          </LinkM>
          <Checkbox />
        </Typography>

        <Button variant="contained" fullWidth>
          Entrar
        </Button>
        <Typography variant="h4">
          ¿Ya tienes cuenta?
          <LinkM
            href="/login"
            component={Link}
            underline="none"
            color="primary.main"
            ml={1}
          >
            Inicia Sesión
          </LinkM>
        </Typography>
      </Stack>
    </PageContainer>
  );
}
