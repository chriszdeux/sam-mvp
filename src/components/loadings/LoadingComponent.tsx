import {
  LoadingBox,
  LoadingBoxLayout,
  LoadingContent,
} from "@/styled-components/global/loading.styled";
import LoadingCube from "./LoadingCube";
import { Button, Typography, Link as MLink, Stack } from "@mui/material";
import { animations } from "@/styles/animations";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

interface Props {
  isLoading?: boolean;
  isImg?: boolean;
  message?: string;
  status?: "warning" | "success" | "primary" | "secondary" | "info" | "error";
  redirect?: boolean;
  redirectUrl?: string;
}

export default function LoadingComponent({
  isLoading = false,
  isImg = true,
  message = "Cargando",
  status = "primary",
  redirect = false,
  redirectUrl = "/",
}: Props) {
  const [show, setShow] = useState(isLoading);
  const [fade, setFade] = useState(isLoading);

  const onClose = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setShow(false);
    }, 500);
  }, []);
  useEffect(() => {
    let timeout: any;

    if (isLoading) {
      setShow(true);
      setFade(true);
    } else {
      setFade(false);
      timeout = setTimeout(() => {
        setShow(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <>
      {show && (
        <LoadingBox className={fade ? animations.fadeIn : animations.fadeOut}>
          {/* <LoadingContent>
          </LoadingContent> */}
          <Stack spacing={3}>
            {isImg && <LoadingCube status={status} />}
            <Typography variant="h4" align="center" mb={8}>
              {message}
            </Typography>
            {redirect ? (
              <Button
                href={redirectUrl}
                component={Link}
                variant="text"
                color={status}
              >
                Continuar
              </Button>
            ) : (
              <Button color={status} onClick={onClose}>
                Continuar
              </Button>
            )}
          </Stack>

          <LoadingBoxLayout />
        </LoadingBox>
      )}
    </>
  );
}
