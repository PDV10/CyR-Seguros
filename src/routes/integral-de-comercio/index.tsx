import ProductCardLayout from "../../components/ui/ProductCardLayout";
import shopImg from "../../assets/img/products/shop.jpg";

export default function IntegralDeComercio() {
  return (
    <ProductCardLayout
      title="Seguro Integral de Comercio"
      subtitle="¿Qué es?"
      description={`El Seguro Integral de Comercio está diseñado para ofrecer una protección completa a tu negocio, cubriendo una amplia gama de riesgos que pueden afectar la operatividad de tu empresa. Ideal para comerciantes y empresarios, este seguro asegura que tu actividad esté respaldada contra pérdidas y daños imprevistos.`}
      imageSrc={shopImg}
      imageAlt="Seguro Integral de Comercio"
      rightTitle="Coberturas Incluidas"
      items={[
        {
          title: "Daños Materiales",
          description:
            "Protección contra daños o pérdidas en tus instalaciones y bienes comerciales debido a incendios, inundaciones, robos o vandalismo.",
        },
        {
          title: "Interrupción de Actividad",
          description:
            "Cobertura para pérdidas económicas derivadas de la interrupción de tu actividad comercial debido a eventos asegurados.",
        },
        {
          title: "Responsabilidad Civil",
          description:
            "Cubre reclamaciones por daños a terceros derivados de tu actividad comercial, protegiéndote contra demandas por lesiones o daños a propiedades.",
        },
        {
          title: "Equipo y Maquinaria",
          description:
            "Protección para tus equipos y maquinaria esenciales en caso de daños o fallos que puedan afectar tu operación.",
        },
      ]}
      px={{ base: 4, md: 8 }}
    />
  );
}
