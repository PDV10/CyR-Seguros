import {
  TbCar,
  TbHome,
  TbShield,
  TbBuilding,
  TbShoppingBag,
  TbHealthRecognition,
  TbDeviceDesktopAnalytics,
  TbFileCertificate,
} from "react-icons/tb";

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
  descripcion?: string;
};

export const PRODUCT_SUBMENU: (Omit<NavItem, "submenu"> & {
  to: string;
  icon: React.ElementType;
  descripcion?: string;
})[] = [
  {
    name: "Auto / Moto",
    to: ROUTES.vehiculo,
    icon: TbCar,
    descripcion: "Protege tu vehículo",
  },
  {
    name: "Hogar",
    to: ROUTES.hogar,
    icon: TbHome,
    descripcion: "Disfruta de tu casa",
  },
  {
    name: "Responsabilidad Civil",
    to: ROUTES.responsabilidadCivil,
    icon: TbShield,
    descripcion: "Asegura tu tranquilidad",
  },
  {
    name: "Construcción",
    to: ROUTES.construccion,
    icon: TbBuilding,
    descripcion: "Trabajá con seguridad",
  },
  {
    name: "Integral De Comercio",
    to: ROUTES.integralComercio,
    icon: TbShoppingBag,
    descripcion: "Protección para tu comercio",
  },
  {
    name: "ART",
    to: ROUTES.art,
    icon: TbHealthRecognition,
    descripcion: "Cuidamos a tu equipo",
  },
  {
    name: "Seguro Técnico",
    to: ROUTES.seguroTecnico,
    icon: TbDeviceDesktopAnalytics,
    descripcion: "Protegé tus equipos y sistemas",
  },
  {
    name: "Caución",
    to: ROUTES.caucion,
    icon: TbFileCertificate,
    descripcion: "Garantías y cauciones",
  },
];

/**
 *  Menú principal de navegación
 */
export const NAV_ITEMS: NavItem[] = [
  { name: "Inicio", to: ROUTES.home },
  { name: "Productos", submenu: PRODUCT_SUBMENU },
  { name: "Servicios", to: ROUTES.servicios },
  { name: "Quiénes Somos", to: ROUTES.nosotros },
  { name: "Contacto", to: ROUTES.contacto },
];
