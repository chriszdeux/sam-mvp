// /src/data/landingPageData.ts

// =======================================================
// 1. INTERFAZ DE TIPADO (Actualizada sin 'coreGameplay')
// =======================================================

/**
 * Define la estructura completa del contenido de la Landing Page.
 * Se ha eliminado 'coreGameplay' y centralizado todo en 'features'.
 */
export interface LandingPageContent {
  hero: {
    title: string;
    subtitle: string;
    visionStatement: string;
    cta: {
      title: string;
      buttonText: string;
    };
  };
  features: { // Sección ahora dedicada a los bloques de jugabilidad central
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  targetAudience: {
    title: string;
    description: string;
  };
  pillars: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  whatItIsNot: {
    title: string;
    items: string[];
  };
}

// =======================================================
// 2. OBJETO DE DATOS (Contenido Corregido y Simplificado)
// =======================================================

/**
 * Contenido estático para la Landing Page de Proyecto SAM.
 */
export const landingPageData: LandingPageContent = {
  hero: {
    title: "EN EL MARGEN DE HÉCATE",
    subtitle: "LA ASTUCIA ES TU ÚNICA ARMA.",
    visionStatement: "Funda tu imperio desde cero en un simulador de civilización espacial donde cada recurso es un activo digital y cada transacción es ley. Domina un mercado P2P impulsado por jugadores, forja contratos inteligentes y construye un legado económico que resonará a través de la galaxia. Sin guías. Solo libertad y consecuencias.",
    cta: {
      title: "Identidad",
      buttonText: "CREA TU IDENTIDAD DIGITAL"
    }
  },
  
  features: {
    title: "¿ERES EL PRÓXIMO ARQUITECTO GALÁCTICO?",
    items: [
      {
        title: "LA ECONOMÍA ES EL CAMPO DE BATALLA",
        description: "Sumérgete en una simulación económica profunda donde el conflicto es financiero y la ventaja se gana con ingenio. Cada transacción, cada inversión, altera un mercado galáctico vivo impulsado por miles de jugadores."
      },
      {
        title: "LIBERTAD TOTAL, CONSECUENCIAS REALES",
        description: "Define tu propio destino en una frontera sin leyes. Explora, mina, comercia, invierte o lidera una corporación. Tus decisiones no son reseteables; impactan tu legado y el balance de poder en El Margen de Hécate."
      },
      {
        title: "CONSTRUYE TU IMPERIO, PIEZA A PIEZA",
        description: "Desde un humilde prospector hasta un magnate galáctico. Adquiere activos digitales únicos, forja contratos inteligentes complejos y establece una red de infraestructura que transformará sistemas estelares enteros bajo tu dominio."
      },
    ]
  },
  
  targetAudience: {
    title: "Construido para el \"Pensador Estratégico\"",
    description: "Un jugador que disfruta de la gestión y simulación, le fascina optimizar sistemas, analizar mercados y valora la libertad y las consecuencias reales de sus decisiones. Motivado por construir un legado económico, no por el combate."
  },
  
  pillars: {
    title: "Nuestros Principios Guía",
    items: [
      {
        title: "Economía Simulada Profunda",
        description: "La economía no es una característica más, es el juego. Las decisiones de mercado deben ser significativas."
      },
      {
        title: "Libertad y Consecuencias",
        description: "Te damos las herramientas para ser un minero, un magnate o un especulador. Tus éxitos y fracasos son tuyos."
      },
      {
        title: "Universo Inmersivo y Coherente",
        description: "Desde la interfaz hasta el texto, todo refuerza la fantasía de operar en una civilización futurista."
      },
      {
        title: "Claridad sobre Espectáculo",
        description: "La estética funcionalista sirve a la jugabilidad. La información debe ser clara e intuitiva para permitir decisiones complejas."
      }
    ]
  },
  
  whatItIsNot: {
    title: "Para Mantener el Foco",
    items: [
      "NO es un proyecto con criptomonedas reales.",
      "NO es un juego de acción o combate.",
      "NO es un juego Pay-to-Win.",
      "NO es un juego simple o casual."
    ]
  },
  
};