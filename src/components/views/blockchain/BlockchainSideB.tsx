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

export default function BlockchainSideB() {
  const data = [
    {
      title: "Generación de Bloques:",
      description:
        "Cada Bloque actúa como un registro de transacciones que garantiza la integridad de la red.",
      icon: <WidgetsIcon color="primary" />,
    },
    {
      title: "Redes de Nodos::",
      description:
        "Los nodos son representaciones virtuales de planetas, estaciones espaciales y flotas, cada uno con una función vital en la red.",
      icon: <HubIcon color="primary" />,
    },
    {
      title: "Recompensas por Cooperación:",
      description:
        "Aquellos que contribuyen con recursos y poder computacional a la red reciben tokens como recompensa, promoviendo la estabilidad.",
      icon: <EmojiEventsIcon color="primary" />,
    },
    {
      title: "Autonomía Descentralizada:",
      description:
        "La red está diseñada para ser completamente autónoma, sin la necesidad de autoridades centrales, lo que permite una confianza sin igual entre sistemas distantes.",
      icon: <SmartButtonIcon color="primary" />,
    },
  ];

  return (
    <Box>
      <Typography variant="body1" color="primary" mb={2}>
        Características Clave del Blockchain Intergaláctico
      </Typography>
      <List sx={{width: '100%', minWidth: 350}}>
        {data.map(({ title, description, icon }, index) => (
          <>
            <ListItem alignItems="flex-start" key={index}>
              <ListItemText
                primary={title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="caption"
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
          </>
        ))}
      </List>
    </Box>
  );
}
