"use client";
import PageContainer from "@/components/containers/PageContainer";
import { useForm } from "@/hooks/useForm";
import {
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
  Link as LinkM,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { initialValues, requiredValues } from "./inputValues";
import { useRegisterMutation } from "@/api/auth/auth";
import LoadingModal from "@/components/modal/LoadingModal";
import { useGeneralHooks } from "@/hooks/useGeneralHooks";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingComponent from "@/components/loadings/LoadingComponent";
import AuthImg from "../../assets/img/auth.jpg";

export default function page() {
  const { breakpoints } = useTheme();
  const router = useRouter();

  const md = useMediaQuery(breakpoints.down("md"));
  const { open, message } = useSelector(({ snackbar }: any) => snackbar);
  const {
    formValues,
    onChange,
    onChangeCheckbox,
    cleanForm,
    setValues,
    runValidates,
    fieldErrors,
  } = useForm(initialValues, requiredValues);
  const {
    name,
    birthday,
    lastName,
    username,
    email,
    password,
    confirmPassword,
    terms,
    equal,
  } = formValues;
  const [registerData, { data, error, isLoading }] = useRegisterMutation();
  // if(isLogin || token) return router.push("/");
  const { setOpenSnackbar, setCloseSnackbar } = useGeneralHooks();
  const handleSubmit = async () => {
    if (runValidates()) return;
    if (password !== confirmPassword) {
      setValues({
        equal: false,
      });
      return;
    }
    await registerData(formValues).unwrap();
    // cleanForm();
  };

  useEffect(() => {
    if (data?.code === 201) return router.push("/auth/confirm_account");
  }, [data]);
  return (
    <PageContainer title="Crear Cuenta" fixWidth img={AuthImg}>
      <Stack component="form" spacing={2}>
        <TextField
          label="Nombre"
          name="name"
          value={name}
          onChange={onChange}
          error={!!fieldErrors.name}
          helperText={fieldErrors.name}
          variant="filled"
          fullWidth
          color="primary"
        />
        <TextField
          label="Apellido"
          name="lastName"
          value={lastName}
          onChange={onChange}
          error={!!fieldErrors.lastName}
          helperText={fieldErrors.lastName}
          variant="filled"
          fullWidth
          color="primary"
        />
        <TextField
          type="date"
          label="Fecha de nacimiento"
          name="birthday"
          value={birthday}
          onChange={onChange}
          error={!!fieldErrors.birthday}
          helperText={fieldErrors.birthday}
          variant="filled"
          fullWidth
          color="primary"
        />

        <TextField
          label="Usuario"
          name="username"
          value={username}
          onChange={onChange}
          error={!!fieldErrors.username}
          helperText={fieldErrors.username}
          variant="filled"
          fullWidth
          color="primary"
        />
        <TextField
          label="Email"
          name="email"
          value={email}
          onChange={onChange}
          error={!!fieldErrors.email}
          helperText={fieldErrors.email}
          type="email"
          variant="filled"
          fullWidth
          color="primary"
        />
        <TextField
          type="password"
          label="Contraseña"
          name="password"
          value={password}
          onChange={onChange}
          error={!!fieldErrors.password}
          helperText={fieldErrors.password}
          variant="filled"
          color="primary"
        />
        <TextField
          type="password"
          label="Confirmar Contraseña"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChange}
          error={!!fieldErrors.confirmPassword}
          helperText={fieldErrors.confirmPassword}
          variant="filled"
          color="primary"
        />
        {!equal && (
          <Typography variant="caption" align="center" color="warning.primary">
            Contraseñas no coinciden
          </Typography>
        )}

        <Typography variant="body2" color="textSecondary" align="center">
          Favor de aceptar los
          <LinkM href="/" component={Link} ml={1} color="primary.main">
            terminos y condiciones
          </LinkM>
          <Checkbox name="terms" checked={terms} onChange={onChangeCheckbox} />
        </Typography>

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Entrar
        </Button>
        <Typography variant="h4" align="center" sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          ¿Ya tienes cuenta?
          <LinkM
            href="/auth/login"
            component={Link}
            underline="none"
            color="primary.main"
            ml={1}
          >
            Inicia Sesión
          </LinkM>
        </Typography>
      </Stack>
      <LoadingComponent
        isLoading={isLoading}
        message="Creando cuenta..."
      />
      <LoadingComponent
        status="error"
        isLoading={error?.data}
        message={`Error con la identificación ( ${error?.data.message} )`}
      />
    </PageContainer>
  );
}
