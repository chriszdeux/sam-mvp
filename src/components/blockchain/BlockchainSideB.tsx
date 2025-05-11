'use client'
import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Widgets as WidgetsIcon,
  Hub as HubIcon,
  EmojiEvents as EmojiEventsIcon,
  SmartButton as SmartButtonIcon,
} from "@mui/icons-material";
import { Fragment, useRef } from "react";
import { useView } from "@/hooks/useView.hook";
import { animations } from "@/styles/animations";
import { delayAnimation } from "@/utils/delayAnimation.utils";

export default function BlockchainSideB() {
  const data = [
    {
      title: "Generación de Bloques:",
      description:
        "Cada Bloque actúa como un registro de transacciones que garantiza la integridad de la red.",
      icon: <WidgetsIcon color="primary" />,
      delay: 1,
    },
    {
      title: "Redes de Nodos:",
      description:
        "Los nodos son representaciones virtuales de planetas, estaciones espaciales y flotas, cada uno con una función vital en la red.",
      icon: <HubIcon color="primary" />,
      delay: 2,
    },
    {
      title: "Recompensas por Cooperación:",
      description:
        "Aquellos que contribuyen con recursos y poder computacional a la red reciben tokens como recompensa, promoviendo la estabilidad.",
      icon: <EmojiEventsIcon color="primary" />,
      delay: 3,
    },
    {
      title: "Autonomía Descentralizada:",
      description:
        "La red está diseñada para ser completamente autónoma, sin la necesidad de autoridades centrales, lo que permite una confianza sin igual entre sistemas distantes.",
      icon: <SmartButtonIcon color="primary" />,
      delay: 4,
    },
  ];

  const ref = useRef(null);
  const isVisible = useView(ref);
  const {fadeRight, fadeIn} = animations
  return (
    <Box ref={ref}>
      {isVisible && (
        <>
          <Typography variant="h2" mb={2} className={fadeRight} sx={delayAnimation(1)}>
            Características Clave del Blockchain Intergaláctico
          </Typography>
          <List sx={{ width: "100%", minWidth: 350 }}>
            {data.map(({ title, description, icon, delay }, index) => (
              <Fragment key={title + index}>
                <ListItem alignItems="flex-start"  className={fadeIn} sx={delayAnimation(delay + 1)}>
                  <ListItemText
                    primary={title}
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
                  <ListItemAvatar>{icon}</ListItemAvatar>
                </ListItem>
                <Divider variant="inset" component="li" />
              </Fragment>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
