import PageContainer from "@/components/containers/PageContainer";
import NewsCardList from "@/components/news/NewsCardList";
import { MainContainer } from "@/styled-components/global/global.styled";
import { Container } from "@mui/material";
import ImageCube from "../../assets/img/blockchain_cube.jpg";
import MainImageBG from "@/components/image-background/MainImageBG";

export default function NewsPage() {
  return (
    <PageContainer title="Noticias Generales">
      <NewsCardList />
      <MainImageBG img={ImageCube}/>
    </PageContainer>
  );
}