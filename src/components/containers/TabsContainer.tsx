"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box mt={1}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

interface DataItem {
  title: string;
  component: React.FC | (() => JSX.Element);
}

interface Props {
  title?: string;
  sx?: any;
  data: any[];
}

export default function TabsContainer({ title, sx, data }: Props) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        width: "100%",
        background: theme.palette.background.default,
        // overflowY: 'hidden',
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          // display: "none",
        },
        ...sx,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          sx={{
            background: theme.palette.background.default,
            // overflowX: "auto",
            // color: theme.palette.text.primary,
          }}
        >
          {data.map((item, i) => (
            <Tab key={i} label={item.title} {...a11yProps(i)} />
          ))}
        </Tabs>
      </AppBar>
      {data.map((item, i) => (
        <TabPanel key={i} value={value} index={i} dir={theme.direction}>
          {<item.component />}
        </TabPanel>
      ))}
    </Box>
  );
}
