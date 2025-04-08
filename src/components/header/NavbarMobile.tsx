"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { useToggle } from "@/hooks";
import { RoutesInterface } from "@/routes/routes";
import MenuIcon from "@mui/icons-material/Menu";
import { blue, grey } from "@mui/material/colors";
import FaceIcon from "@mui/icons-material/Face";
import CustomModal from "../modal/CustomModal";
import NavbarDesk from "./NavbarDesk";
import styles from "../../styles/index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeLocalStorage } from "@/utils/localStorage.util";
import { localStorageList } from "@/enums/localStorage";
import { useFilterRoutes } from "@/hooks/usefilterRoutes.hook";
import { Balance } from "./Balance";
import { logout } from "@/redux/slices/auth/auth.slice";
import LogoutIcon from "@mui/icons-material/Logout";
import { RootState } from "@/store/store";

export const NavbarMobile = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useToggle();
  const [openUser, setOpenUser] = useToggle();
  const {
    breakpoints,
    palette: { customColors },
  } = useTheme();
  const lg = useMediaQuery(breakpoints.up("lg"));
  const value = 50;
  const { fade_overlay_top } = styles;
  const routes = useFilterRoutes();
  const { isLogin } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    removeLocalStorage(localStorageList.token);
    setOpen();
  };

  const menuItems = React.useMemo(
    () =>
      routes.map((route: RoutesInterface, idx: number) => (
        <ListItem
          key={route.route}
          divider
          sx={{
            animationDelay: `${idx * 0.1}s`,
          }}
        >
          <Button
            component={Link}
            href={route.route}
            fullWidth
            onClick={setOpen}
            variant="text"
            sx={{ color: "white" }}
          >
            {route.label}
          </Button>
        </ListItem>
      )),
    [setOpen]
  );

  return (
    <>
      <AppBar position="fixed" sx={{ background: "none" }}>
        <div className={fade_overlay_top}></div>
        <Toolbar>
          <Typography variant="h4">SAM</Typography>
          <Box sx={{ flexGrow: 1 }} />
          {!lg ? (
            <>
              <Balance mobile />
              <IconButton onClick={setOpen} style={{ color: blue[value] }}>
                <MenuIcon />
              </IconButton>
            </>
          ) : (
            <NavbarDesk />
          )}
          {/* <Button  onClick={setOpen}>Menu</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={setOpen}
        PaperProps={{
          sx: { background: grey[900] },
        }}
      >
        <Box sx={{ height: "100%", padding: 2 }}>
          <List>
            <Button
              fullWidth
              onClick={setOpenUser}
              style={{ color: blue[value] }}
            >
              <FaceIcon />
            </Button>
          </List>
          <List>{menuItems}</List>
        </Box>
        {isLogin && (
          <Button
            onClick={handleLogout}
            fullWidth
            sx={{ mb: 4, color: customColors.white }}
          >
            <LogoutIcon />
          </Button>
        )}
      </Drawer>
      <CustomModal open={openUser} onClose={setOpenUser}>
        testing
      </CustomModal>
    </>
  );
};
