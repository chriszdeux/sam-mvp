'use client'
import PageContainer from "@/components/containers/PageContainer";
import TabsContainer from "@/components/containers/TabsContainer";
import { tradeRoutes } from "./tradeRoutes";
import { useMediaQuery, useTheme } from "@mui/material";
import MainImageBG from "@/components/image-background/MainImageBG";
import Image from '../../../public/img/prisma.jpg'
export default function TradePage() {
  const {breakpoints} = useTheme()
  const md = useMediaQuery(breakpoints.down('md'))
  return (
    <PageContainer sx={{
      width: md ? '100%' : '50%',
    }}>
      <TabsContainer data={tradeRoutes}/>
      {/* <MainImageBG img={Image}/> */}
    </PageContainer>
  );
}