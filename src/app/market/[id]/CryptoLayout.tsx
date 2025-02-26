"use client";
import {
  FigureImage,
} from "@/styled-components/global/images.styled";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import CryptoImg from "../../../public/img/prisma.jpg";
import SubmenuCrypto from "@/components/market/SubmenuCrypto";
interface Props {
  children?: React.ReactNode;
}
import {data, valuesCrypto} from './CryptoBaseInfo'
import { BuySellBar } from "@/components/layouts/crypto-layout/BuySellBar";

export default function CryptoLayout({ children }: Props) {
  const {palette, breakpoints} = useTheme();
  const md = useMediaQuery(breakpoints.up("md"));
  return (
    <Box sx={{ marginTop: 8, width: "80%", margin: "0 auto" }}>
      <Box
        mt={12}
        sx={{
          position: "relative",
          display: md ? "flex" : "block",
          gap: 4,
          height: 500,
          paddingTop: md ? 8 : "none",
          justifyContent: "space-between",
        }}
      >
        <List
          sx={{
            width: md ? "25%" : "100%",
          }}
        >
          <ListItem>
          <FigureImage
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image
              alt="crypto display"
              src={CryptoImg}
              width={155}
              height={155}
              style={{ borderRadius: "50%" }}
            />
          </FigureImage>
          </ListItem>
          <ListItem sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            width: '100%',
            padding: 0,
            marginBottom: 4
          }}>
            <BuySellBar />
          </ListItem>
        {
          data.map((item:any) => (
            <ListItemText
            key={item.key}
              primary={
                <Typography variant="body1" color={palette.primary.main}>
                  {item.label}
                </Typography>
              }
              secondary={
                <Typography variant="body1" align="right">
                    {valuesCrypto[item.key as keyof typeof valuesCrypto] ?? "N/A"}
                </Typography>
              }
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            />
          ))
        }
        </List>
        <SubmenuCrypto />
        {/* <Divider /> */}
        <Box
          sx={{
            width: md ? "70%" : "100%",
            minHeight: '70vh',
            overflow: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
