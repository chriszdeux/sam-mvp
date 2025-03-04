import {
  Box,
  Button,
  Container,
  Link as LinkM,
  Stack,
  Typography,
} from "@mui/material";
import { CustomImage } from "@/styled-components/global/images.styled";
import {
  NewsCard,
  NewsCardImage,
  NewsCardText,
} from "@/styled-components/newsSection.style";
import Link from "next/link";

interface Props {
  isGrid?: boolean;
  img: any;
  title: string;
  body: string;
  date: string;
  link: string;
  sx?: any;
}
export default function NewsInfoCard({ isGrid, img, title, body, date, link, sx }: Props) {
  return (
    <NewsCard  p={1} sx={sx} isGrid={isGrid}>
      <NewsCardImage alt="news" src={img} />
      <NewsCardText>
        <Typography variant="h4" color="primary.main">
          {title}
        </Typography>
        <Typography variant="caption" color="primary.main">
          {date}
        </Typography>
        <Typography variant="body2">{body}</Typography>
        <LinkM
          href={link}
          component={Link}
          color="info.main"
          underline="none"
          alignSelf="flex-end"
          mt={3}
        >
          Ver Mas
        </LinkM>
      </NewsCardText>
    </NewsCard>
  );
}
