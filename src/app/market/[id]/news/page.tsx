import { Box, Container, Stack, Typography } from "@mui/material";
import CryptoLayout from "../CryptoLayout";
import NewsInfoCard from "@/components/news/NewsInfoCard";
import newsData from "./data";
import { NewsContainer } from "@/styled-components/newsSection.style";
import NewsCardList from "@/components/news/NewsCardList";

export default function page() {
  return (
    <CryptoLayout title="Noticias mas Recientes de Kantos">
      <NewsCardList />
    </CryptoLayout>
  );
}