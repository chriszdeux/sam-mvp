"use client";
import PageContainer from "@/components/containers/PageContainer";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Link as LinkM,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import { authValues } from "./initialValues";
import { useLoginMutation } from "@/api/auth/auth";
import { FormEvent, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getLocalStorage } from "@/utils/localStorage.util";
import { localStorageList } from "@/enums/localStorage";
import LoadingModal from "@/components/modal/LoadingModal";

interface Auth {
  isLogin: boolean;
}

export default function LoginPage() {
  const { isLogin }: Auth = useSelector(({ auth }: any) => auth);
  const [login, { data, error, isLoading }] = useLoginMutation();
  const { breakpoints, palette } = useTheme()
  const md = useMediaQuery(breakpoints.down('md'))
  const router = useRouter();
  const token: any | null = getLocalStorage(localStorageList.token);

  const {
    formValues,
    fieldErrors,
    onChange,
    cleanForm,
    setValues,
    runValidates,
  } = useForm(authValues.login.values, authValues.login.required);
  const { email, password } = formValues;

  if(isLogin || token) return router.push("/");
  const handleSubmit = async (e: FormEvent) => {
    if (runValidates()) return;
    await login({ email, password }).unwrap();
  };

  return (
    <PageContainer title="Iniciar Sesión" fixWidth>
      <Stack component="form" spacing={2}>
        <TextField
          label="Usuario"
          variant="filled"
          fullWidth
          color="primary"
          name="email"
          value={email}
          onChange={onChange}
          error={!!fieldErrors.email}
          helperText={fieldErrors.email}
        />
        <TextField
          type="password"
          label="Contraseña"
          variant="filled"
          color="primary"
          name="password"
          value={password}
          onChange={onChange}
          error={!!fieldErrors.email}
          helperText={fieldErrors.email}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Recordarme"
          labelPlacement="start"
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          className={isLoading ? "Mui-loading" : ""}
        >
          {isLoading ? (
            <CircularProgress
              sx={{ color: palette.customColors.white }}
            />
          ) : (
            "Entrar"
          )}
        </Button>
        <Button
          variant="text"
          sx={{
            alignSelf: "flex-end",
          }}
        >
          Olvidé mi contraseña
        </Button>
        {/* <Button variant="text" fullWidth>Registrarse</Button> */}
        <Typography variant="h3">
          ¿No tienes cuenta?
          <LinkM
            href="/auth"
            component={Link}
            underline="none"
            color="primary.main"
            ml={1}
          >
            Registrate
          </LinkM>
        </Typography>
      </Stack>
      <LoadingModal open={isLoading}/>
    </PageContainer>
  );
}
