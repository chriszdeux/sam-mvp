"use client";
import { IconButton, Link, Stack, Typography, useTheme } from "@mui/material";
import LinkNext from "next/link";
import FaceIcon from "@mui/icons-material/Face";
import { useFilterRoutes } from "@/hooks/usefilterRoutes.hook";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "@/redux/slices/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { removeLocalStorage } from "@/utils/localStorage.util";
import { localStorageList } from "@/enums/localStorage";
import { RootState } from "@/store/store";
import { Balance } from "./Balance";

export default function NavbarDesk() {
  const { palette: { customColors } } = useTheme()
  const dispatch = useDispatch();
  const fSize = "1.6rem";
  const routes = useFilterRoutes();
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    removeLocalStorage(localStorageList.token);
  };
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      {routes.map((route: any) => (
        <Link
          href={route.route}
          key={route.route}
          sx={{
            fontSize: fSize,
          }}
          component={LinkNext}
        >
          {route.label}
        </Link>
      ))}
      <FaceIcon />
      {isLogin && (
        <>
        <Balance />
        <IconButton onClick={handleLogout} sx={{ ml: 3, color: customColors.white }}>
          <LogoutIcon />
        </IconButton>
        </>
      )}
    </Stack>
  );
}
