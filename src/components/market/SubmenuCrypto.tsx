'use client'
import { cryptoMenuRoutes } from "@/routes/crypto_menu_routes";
import { Breadcrumbs, Link as LinkM, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubmenuCrypto() {
  const pathname = usePathname()
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <Breadcrumbs sx={{
     'ol':{
      position: md ? 'absolute' : 'relative',
      top: md ? '0' : 'unset',
      right: md ? '0' : 'unset',
      display: 'flex',
      flexWrap: 'nowrap',
      overflow: 'auto',
      scrollbarWidth: 'none',
      margin: '16px 0',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
     }
    }}>
    {
      cryptoMenuRoutes.map(route => {
        return (
          <LinkM
            key={route.path}
            component={Link}
            underline="hover"
            color={pathname === route.path ? 'primary' : 'inherit'}
            href={route.path}
            scroll={false}
          >
            {route.name}
          </LinkM>
        )
      })
    }
    </Breadcrumbs>
  );
}
