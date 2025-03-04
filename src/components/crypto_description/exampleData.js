import React from 'react'
import {
  Widgets as WidgetsIcon,
  Hub as HubIcon,
  EmojiEvents as EmojiEventsIcon,
  SmartButton as SmartButtonIcon,
} from "@mui/icons-material";

export const data = [
  {
    title: "Generación de Bloques:",
    description:
      "Cada Bloque actúa como un registro inmutable de transacciones que garantiza la integridad y transparencia de la red. A medida que se crean bloques, se validan mediante nodos distribuidos, asegurando que cada transacción sea verificable y segura. Este proceso es fundamental para evitar fraudes y mantener la estabilidad del ecosistema.",
    icon: <WidgetsIcon  color="primary"/>,
  },
  {
    title: "Redes de Nodos:",
    description:
      "Los nodos son representaciones virtuales de planetas, estaciones espaciales y flotas, desempeñando roles clave en la seguridad y eficiencia de la red. Cada nodo procesa transacciones, valida bloques y contribuye al mantenimiento del sistema descentralizado. Dependiendo de su función, algunos nodos pueden actuar como validadores, retransmisores o almacenes de datos, asegurando la operatividad constante del sistema.",
    icon: <HubIcon  color="primary"/>,
  },
  {
    title: "Recompensas por Cooperación:",
    description:
      "Los participantes que contribuyen con recursos computacionales, almacenamiento de datos o procesamiento de transacciones son recompensados con tokens digitales. Estas recompensas fomentan la colaboración dentro del ecosistema y aseguran que haya suficientes nodos activos para sostener la red. Además, este mecanismo crea una economía autosostenible donde los usuarios pueden intercambiar sus recompensas por bienes, servicios o mejoras dentro del sistema.",
    icon: <EmojiEventsIcon  color="primary"/>,
  },
  {
    title: "Autonomía Descentralizada:",
    description:
      "La red opera sin la necesidad de una autoridad central, permitiendo un ecosistema verdaderamente autónomo. Cada nodo tiene la capacidad de tomar decisiones basadas en reglas preestablecidas, eliminando la dependencia de intermediarios y reduciendo los riesgos de censura o manipulación. Esta descentralización fomenta un modelo de gobernanza transparente, donde las decisiones clave se toman a través de mecanismos de consenso entre los participantes de la red.",
    icon: <SmartButtonIcon  color="primary"/>,
  },
];