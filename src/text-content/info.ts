import BlockA from '../assets/img/block-info/block-a.jpg';
import BlockB from '../assets/img/block-info/block-b.jpg';
import BlockC from '../assets/img/block-info/block-c.jpg';
import BlockD from '../assets/img/block-info/block-d.jpg';
import BlockE from '../assets/img/block-info/block-d.jpg';
import BlockF from '../assets/img/block-info/block-d.jpg';
import BlockG from '../assets/img/block-info/block-d.jpg';

export interface MainSectionProps {
  id: string;
  title: string;
  image: any;
  content: { text: string }[];
  list: { description: string; icon?: string }[];
  textDivider?: string;
  listV?: boolean;
}

export const samInfo: MainSectionProps[] = [
  {
    id: 'block-a',
    title: 'Economía Blockchain Viva',
    image: BlockA,
    content: [
      { text: 'En SAM, cada transacción se procesa dentro de una blockchain simulada con ciclos definidos. Estos crons reflejan un universo vivo, donde las decisiones de los jugadores afectan en tiempo real el flujo económico.' },
      { text: 'El fee dinámico no solo determina la prioridad, sino que se convierte en un factor estratégico: los jugadores deben elegir entre asegurar su transacción de inmediato o arriesgarse a pagar menos y esperar al próximo bloque.' }
    ],
    list: [
      { description: 'Crons de blockchain que procesan transacciones periódicamente.', icon: '🪙' },
      { description: 'Fees dinámicos basados en demanda y prioridad.', icon: '⚡' },
      { description: 'Economía descentralizada que evoluciona con las acciones de los jugadores.', icon: '🌐' }
    ]
  },
  {
    id: 'block-b',
    title: 'Mercados y Recursos Galácticos',
    image: BlockB,
    content: [
      { text: 'El universo está lleno de recursos con valores variables. Desde materiales comunes hasta minerales raros, cada extracción es probabilística y depende de factores planetarios como clima, radiación o atmósfera.' },
      { text: 'Los jugadores pueden comerciar libremente en el mercado global o vender a la Federación, que siempre pagará menos pero garantiza liquidez. El comercio entre jugadores permite fijar precios y condiciones de entrega.' }
    ],
    list: [
      { description: 'Mercado global dinámico entre jugadores.', icon: '🌌' },
      { description: 'Federación como comprador seguro a menor precio.', icon: '🏛️' },
      { description: 'Extracción probabilística de materiales raros.', icon: '⛏️' },
      { description: 'Eventos que aumentan la demanda temporal de ciertos recursos.', icon: '📈' }
    ]
  },
  {
    id: 'block-c',
    title: 'Honor y Reputación',
    image: BlockC,
    content: [
      { text: 'El sistema de honor regula el acceso a beneficios dentro de la Federación y define la reputación de los jugadores. Cada acción cuenta: donar recursos, cumplir contratos o pagar impuestos mejora tu posición.' },
      { text: 'Los actos destructivos, como ataques masivos, tienen consecuencias severas: pérdida drástica de honor, multas impuestas por la Federación y un historial negativo visible para otros jugadores.' }
    ],
    list: [
      { description: 'Donaciones y cooperación aumentan honor.', icon: '🤝' },
      { description: 'Cumplir contratos y pagar impuestos aumentan honor.', icon: '📜' },
      { description: 'Sabotajes y destrucción reducen honor.', icon: '⚔️' },
      { description: 'El honor abre acceso a contratos y privilegios exclusivos.', icon: '🔑' },
      { description: 'Historial público de acciones destructivas.', icon: '📖' }
    ]
  },
  {
    id: 'block-d',
    title: 'Logística y Transporte',
    image: BlockD,
    content: [
      { text: 'Cada envío es un desafío. Los transportes básicos pueden cumplir misiones simples, pero enfrentan riesgos de piratas, fallas técnicas y desastres espaciales que amenazan la entrega.' },
      { text: 'Los jugadores pueden contratar transportistas especializados, con naves más resistentes, rápidas o blindadas, y establecer contratos con seguros para mitigar pérdidas en caso de fallos.' }
    ],
    list: [
      { description: 'Contratos de transporte entre jugadores.', icon: '🚚' },
      { description: 'Riesgo de pérdida parcial o total en cada envío.', icon: '⚠️' },
      { description: 'Naves especializadas con mejores probabilidades de éxito.', icon: '🛸' },
      { description: 'Seguros que reembolsan parte del valor en caso de fallas.', icon: '💰' }
    ]
  },
  {
    id: 'block-e',
    title: 'Eventos y Desastres Planetarios',
    image: BlockE,
    content: [
      { text: 'Cada planeta tiene un % de probabilidad de sufrir eventos naturales calculados diariamente. Estos pueden ir desde tormentas y terremotos hasta impactos de meteoros que alteran por completo el mapa.' },
      { text: 'Los jugadores reciben alertas previas según la severidad, con un tiempo limitado para proteger estructuras, mover recursos o activar defensas. La posición y el radio de daño determinan la magnitud de la catástrofe.' }
    ],
    list: [
      { description: 'Desastres con cálculos expansivos desde un punto de origen.', icon: '🌪️' },
      { description: 'Daños progresivos según distancia al epicentro.', icon: '📏' },
      { description: 'Alertas que permiten reacción estratégica limitada.', icon: '⏱️' },
      { description: 'Eventos impredecibles que cambian el entorno y la economía.', icon: '⚡' }
    ]
  },
  {
    id: 'block-f',
    title: 'Impuestos y Regulación',
    image: BlockF,
    content: [
      { text: 'La Federación regula el flujo económico mediante un sistema de impuestos semanales sobre los ingresos líquidos en créditos. Las transacciones en crypto no generan impuestos, pero los créditos son indispensables para tierras y servicios oficiales.' },
      { text: 'La inflación se ajusta periódicamente, aumentando el costo de los créditos y generando un ambiente económico desafiante que obliga a planificar a largo plazo.' }
    ],
    list: [
      { description: 'Impuestos semanales sobre créditos líquidos.', icon: '💸' },
      { description: 'Las cryptos funcionan como inversión sin impuestos directos.', icon: '🪙' },
      { description: 'La Federación puede aplicar multas o restricciones por deudas.', icon: '⚖️' },
      { description: 'Inflación aleatoria del 1–3% cada ciclo.', icon: '📊' }
    ]
  },
  {
    id: 'block-g',
    title: 'Territorios y Expansión',
    image: BlockG,
    content: [
      { text: 'Cada jugador inicia con un bloque de tierra limitado, pero puede expandirse adquiriendo más. El precio de cada bloque aumenta progresivamente con la acumulación, lo que añade valor estratégico a la expansión.' },
      { text: 'Los terrenos certificados pueden venderse o rentarse a otros jugadores, generando contratos de uso. El control territorial es clave para el comercio y la defensa en el universo.' }
    ],
    list: [
      { description: 'Terrenos certificados con contratos de propiedad.', icon: '🏡' },
      { description: 'Incremento progresivo del costo por bloque adicional.', icon: '⬆️' },
      { description: 'Posibilidad de renta y subcontratos de exploración.', icon: '📝' },
      { description: 'Valor estratégico en zonas ricas en recursos.', icon: '💎' }
    ]
  }
];
