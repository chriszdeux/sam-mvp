"use client";
import { useConfirmAccountMutation, useLoginMutation } from "@/api/auth/auth";
import PageContainer from "@/components/containers/PageContainer";
import { useForm } from "@/hooks/useForm";
import {
  Button,
  Stack,
  TextField,
  Typography,
  Link as LinkM,
  Grid2,
} from "@mui/material";
import Link from "next/link";
import { initialValues } from "./inputValues";
import { requiredValues } from "./inputValues";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage.util";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {

  const router = useRouter();

  const center: any = {
    input: {
      style: {
        textAlign: "center",
      },
    },
  };
  const { formValues, onChange, runValidates, fieldErrors } = useForm(
    initialValues,
    requiredValues
  );

  const { a, b, c } = formValues;
  const [confirmCode, {data, isLoading, error}] = useConfirmAccountMutation();
  const [loginAction, {loginData, loadingData, errorData}] = useLoginMutation();

  const submit = async (e: any) => {
    e.preventDefault();
    console.log(runValidates());
    if (runValidates()) return;
    const code = Object.values(formValues).join("-");
    await confirmCode({ code }).unwrap();
  };

  useEffect(() => {
    if(data?.code === 200) {
      const form = getLocalStorage('user-temp')
      loginAction(form).unwrap().then((res:any) => {
        setLocalStorage('token', res.data.authToken)
        router.push('/')
      })
    }
  }, [data])
  return (
    <PageContainer title="Verifica tu identidad" tAlign="center" fixWidth>
      <Stack component="form" spacing={2}>
        <Typography variant="body1" align="center">
          Para completar la activación de tu cuenta, por favor ingresa el código
          de confirmación que te hemos enviado a tu correo
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 4 }}>
            <TextField
              // label="Codigo de confirmación"
              name="a"
              value={a}
              onChange={onChange}
              fullWidth
              error={!!fieldErrors.a}
              helperText={fieldErrors.a}
              slotProps={center}
            />
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <TextField
              // label="Codigo de confirmación"
              name="b"
              value={b}
              onChange={onChange}
              fullWidth
              error={!!fieldErrors.b}
              helperText={fieldErrors.b}
              slotProps={center}
            />
          </Grid2>
          <Grid2 size={{ xs: 4 }}>
            <TextField
              // label="Codigo de confirmación"
              name="c"
              value={c}
              onChange={onChange}
              fullWidth
              error={!!fieldErrors.c}
              helperText={fieldErrors.c}
              slotProps={center}
            />
          </Grid2>
        </Grid2>
        <Button variant="contained" fullWidth onClick={submit}>
          Verificar código
        </Button>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 4,
          }}
        >
          ¿No recibiste el código?
          <LinkM
            href="/auth/login"
            component={Link}
            underline="none"
            color="primary.main"
            ml={1}
          >
            Reenviar
          </LinkM>
        </Typography>
      </Stack>
    </PageContainer>
  );
}
