import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ReturnButton() {
  const router = useRouter();
  return (
    <Button
        variant="contained"
        sx={{ alignSelf: "flex-end" }}
        onClick={() => router.back()}
      >
        Regresar
      </Button>
  );
}