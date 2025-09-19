export const ROUTES = {
  home: "/",
  vehiculo: "/vehiculo",
  hogar: "/hogar",
  responsabilidadCivil: "/responsabilidad-civil",
  construccion: "/construccion",
  integralComercio: "/integral-de-comercio",
  art: "/art",
  seguroTecnico: "/seguro-tecnico",
  caucion: "/caucion",
  servicios: "/servicios",
  nosotros: "/nosotros",
  contacto: "/contacto",
} as const;

export type NavItem = {
  name: string;
  to?: string;
  hidden?: boolean;
  submenu?: Omit<NavItem, "submenu">[];
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Inicio", to: ROUTES.home },
  {
    name: "Productos",
    submenu: [
      { name: "Auto / Moto", to: ROUTES.vehiculo },
      { name: "Hogar", to: ROUTES.hogar },
      { name: "Responsabilidad Civil", to: ROUTES.responsabilidadCivil },
      { name: "Construcción", to: ROUTES.construccion },
      { name: "Integral De Comercio", to: ROUTES.integralComercio },
      { name: "ART", to: ROUTES.art },
      { name: "Seguro Técnico", to: ROUTES.seguroTecnico },
      { name: "Caución", to: ROUTES.caucion },
    ],
  },
  { name: "Servicios", to: ROUTES.servicios },
  { name: "Quiénes Somos", to: ROUTES.nosotros },
  { name: "Contacto", to: ROUTES.contacto },
];
