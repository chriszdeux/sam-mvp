import newsData from "@/app/market/[id]/news/data";
import { Stack } from "@mui/material";
import NewsInfoCard from "./NewsInfoCard";

export default function NewsCardList() {
  return (
    <Stack flexDirection="row" flexWrap="wrap" gap={1}>
      {newsData.map((item) => (
        <NewsInfoCard
          key={item.link}
          img={item.img}
          title={item.title}
          body={item.body}
          date={item.date}
          link={item.link}
          isGrid
        />
      ))}
    </Stack>
  );
}
