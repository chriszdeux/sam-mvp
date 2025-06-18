"use client";
import { useConfirmAccountMutation, useLoginMutation, useResendCodeMutation } from "@/api/auth/auth";
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
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/utils/localStorage.util";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingModal from "@/components/modal/LoadingModal";
import LoadingComponent from "@/components/loadings/LoadingComponent";
import { localStorageList } from "@/enums/localStorage";
import AuthImg from "../../../assets/img/auth.jpg";
import { animations } from "@/styles/animations";

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
    {code: ""},
    {code: { required: true }}
  );
  const temp:any = getLocalStorage(localStorageList.userTemp)
  const { code } = formValues;
  const [confirmCode, { data, isLoading, error }] = useConfirmAccountMutation();
  const [loginAction, { data: loginData, isLoading: loginLoading, error: loginError }] =
    useLoginMutation();
  const [resendCode, { data:dataCode, isLoading:loadingCode, errorCode }] =
  useResendCodeMutation();

  const submit = async (e: any) => {
    e.preventDefault();
    if (runValidates()) return;
    await confirmCode({ code: code.trim() }).unwrap();
  };

  useEffect(() => {
    if (data?.code === 200) {
      const form = getLocalStorage("user-temp");
      loginAction(form)
        .unwrap()
        .then((res: any) => {
          setLocalStorage(localStorageList.token, res.data.authToken);
          removeLocalStorage(localStorageList.userTemp);
          router.push("/");
        });
    }
  }, [data]);

  return (
    <>
      <PageContainer title="Verifica tu identidad" tAlign="center" fixWidth img={AuthImg}>
        <Stack component="form" spacing={2}>
          <Typography variant="body1" align="center">
            Para completar la activación de tu cuenta, por favor ingresa el
            código de confirmación que te hemos enviado a tu correo
          </Typography>
              <TextField
                // label="Codigo de confirmación"
                name="code"
                value={code}
                onChange={onChange}
                fullWidth
                error={!!fieldErrors.code}
                helperText={fieldErrors.code}
                slotProps={center}
              />
          {
            dataCode?.code === 200 && (
              <Typography variant="body1" align="center" className={animations.fadeIn}>
                {dataCode?.message}
              </Typography>
            )
          }
          <Button variant="contained" fullWidth onClick={submit}>
            Verificar código
          </Button>
          <Typography variant="h4" align="center"
          >¿No recibiste el código?</Typography>
          <Button color="primary" onClick={
            () => {
              resendCode({ email: temp.email }).unwrap()
            }
          }>
            Reenviar codigo
          </Button>
        </Stack>
        {/* <LoadingModal open={isLoading} message={error ? `Error con la identificación ( ${error.data.message} )` : "Confirmando identidad..."}/> */}
      </PageContainer>
      <LoadingComponent
        isLoading={isLoading}
        message="Confirmando identidad..."
      />
      <LoadingComponent
        status="error"
        isLoading={error?.data}
        message={`Error con la identificación ( ${error?.data.message} )`}
      />
      <LoadingComponent 
        isLoading={isLoading || error?.data || loadingCode}
        message={
          isLoading && "Confirmando Identidad" ||
          error?.data && `Error con la identificación ( ${error?.data.message} )` ||
          loadingCode && "Reenviando codigo"
        }
      />
    </>
  );
}
