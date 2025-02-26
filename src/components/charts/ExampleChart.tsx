"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import RangeDatesButtons from "./RangeDatesButtons";

const data = [
  { name: "Ene", value: 400, barValue: 200 },
  { name: "Feb", value: 300, barValue: 230 },
  { name: "Mar", value: 200, barValue: 180 },
  { name: "Abr", value: 278, barValue: 250 },
  { name: "May", value: 189, barValue: 170 },
  { name: "Jun", value: 350, barValue: 290 },
  { name: "Jul", value: 420, barValue: 400 },
  { name: "Ago", value: 500, barValue: 450 },
  { name: "Sep", value: 460, barValue: 420 },
  { name: "Oct", value: 380, barValue: 350 },
  { name: "Nov", value: 290, barValue: 270 },
  { name: "Dic", value: 310, barValue: 320 },
];

export default function ExampleChart() {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const { primary, customColors } = theme.palette;

  return (
    <>
      <RangeDatesButtons />
      <ResponsiveContainer height={md ? 600 : 300}>
        <LineChart data={data}>
          <XAxis dataKey="name" fontSize={10} />
          <YAxis width={25} fontSize={10} />
          <Tooltip
            formatter={(value: number) => [`${value}c`, "Precio"]}
            contentStyle={{
              backgroundColor: "none",
              borderRadius: "5px",
              border: "none",
            }}
            labelStyle={{ color: customColors.white }}
            itemStyle={{ color: primary.main }}
          />
          {/* Barra */}
          <Bar dataKey="barValue" fill={primary.main} barSize={10} />
          {/* Línea */}
          <Line
            dataKey="value"
            stroke={primary.main}
            strokeWidth={2}
            dot={false}
            activeDot={{ stroke: customColors.lightBlue, strokeWidth: 10, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
