export interface RoutesSubPath {
  label: string;
  path: string;
  auth?: boolean;
  action?: () => void | null;
}

export interface RoutesInterface {
  label: string;
  route: string;
  auth?: boolean;
  action?: () => void | null;
  subPath?: RoutesSubPath[]
}

export const  menuRoutes:RoutesInterface[] = [
  {
    label: 'Inicio',
    route: '/',
    // action: 
  },
  {
    label: 'Mercado',
    route: '/market',
    // action: 
  },
  {
    label: 'Noticias',
    route: '/news',
    // action: 
  },
  {
    label: 'Proximamente',
    route: '#community',
    // action: 
  },
  {
    label: "Identificate",
    route: "/auth",
    auth: true,
    action: () => {
      console.log("hola")
    },
    subPath: [
      {
        label: "Inicia Sesion",
        path: "/login",
        auth: true,
      },
      
    ]
  }
]