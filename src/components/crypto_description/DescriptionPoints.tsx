import { Box, List, ListItem, Typography } from "@mui/material";
import {data} from './exampleData'
import { DescriptionContent } from "@/styled-components/descriptionSection.style";

export default function DescriptionPoints() {
  return (
    <Box>
      <Typography variant="h4"  mb={1} mt={5}>
        Puntos a Favor
      </Typography>
      <List sx={{width: '100%', minWidth: 350}}>
        {data.map(({ title, description, icon }, index) => (
          <>
            <ListItem alignItems="flex-start" key={index}>
              <DescriptionContent
                primary={
                  <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}>{icon}</Box>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body1"
                      color="secondary"
                    >
                      {description}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
}