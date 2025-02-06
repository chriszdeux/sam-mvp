'use client'
import React from 'react'
import { AppBar, Toolbar, Box, Button, Drawer, List, ListItem, Typography, useMediaQuery, useTheme, IconButton } from '@mui/material'
import Link from 'next/link'
import { useToggle } from '@/hooks'
import { menuRoutes } from '@/routes/routes'
import MenuIcon from '@mui/icons-material/Menu';
import { blue, grey } from '@mui/material/colors'
import FaceIcon from '@mui/icons-material/Face';
import CustomModal from '../modal/CustomModal'
import NavbarDesk from './NavbarDesk'
import styles from '../../styles/index.module.scss'
export const NavbarMobile = () => {
  const [open, setOpen] = useToggle()
  const [openUser, setOpenUser] = useToggle()
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const value = 50
  const { fade_overlay_top } = styles
  const menuItems = React.useMemo(() => 
    menuRoutes.map((route, idx) => (
      <ListItem key={route.path} divider sx={{
        animationDelay: `${idx * 0.1}s`,
      }}>
        <Button 
          component={Link} 
          href={route.path}
          fullWidth 
          onClick={setOpen}
          variant="text"
          sx={{color: 'white'}}
        >
          {route.label}
        </Button>
      </ListItem>
    )),
    [setOpen]
  );

  return (
    <>
      <AppBar position="fixed" sx={{background:'none'}}>
        <div className={fade_overlay_top}></div>
        <Toolbar>
          <Typography variant="h5" color="primary">SAM</Typography>
          <Box sx={{ flexGrow: 1 }} />
          {
            !lg
            ?
            <>
              <IconButton  onClick={setOpenUser} style={{color: blue[value]}}>
                <FaceIcon />
              </IconButton>
              <IconButton  onClick={setOpen} style={{color: blue[value]}}>
                <MenuIcon />
              </IconButton>
            </> : 
            <NavbarDesk />
          }
          {/* <Button  onClick={setOpen}>Menu</Button> */}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={setOpen}
        PaperProps={{
          sx: { background: grey[900] }
        }}
      >
        <Box sx={{ height: '100%', padding: 2 }}>
          <List>{menuItems}</List>
        </Box>
      </Drawer>
      <CustomModal
        open={openUser}
        handleClose={setOpenUser}
      >
        testing
      </CustomModal>
    </>
  )
}
