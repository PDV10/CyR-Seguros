// src/routes/seguro-tecnico/index.tsx
import ProductCardLayout from "../../components/ui/ProductCardLayout";
import tecnicoImg from "../../assets/img/products/tecnico.jpg";

export default function SeguroTecnico() {
  return (
    <ProductCardLayout
      title="Seguro Técnico"
      subtitle="¿Qué es el Seguro Técnico?"
      description={`El Seguro Técnico es una cobertura diseñada para proteger tus equipos electrónicos, maquinarias y proyectos de construcción o montaje ante daños accidentales o imprevistos. 

Este tipo de seguro es esencial para garantizar la continuidad operativa de tu negocio y salvaguardar tus inversiones en tecnología e infraestructura.`}
      imageSrc={tecnicoImg}
      imageAlt="Equipos electrónicos y maquinarias aseguradas"
      rightTitle="Coberturas Principales"
      items={[
        {
          title: "Equipos Electrónicos",
          description:
            "Protección contra daños materiales directos debido a fallas eléctricas, incendios, accidentes y robos (excluyendo hurto), mientras los equipos se encuentren en el domicilio asegurado.",
        },
        {
          title: "Equipos de Contratistas y Agrícolas",
          description:
            "Cubre maquinarias y equipos durante su uso específico y en traslados dentro de Argentina, frente a riesgos como incendios, accidentes, robos y hurtos.",
        },
        {
          title: "Avería de Maquinarias",
          description:
            "Ampara todo tipo de maquinarias fijas destinadas a la producción en serie, incluyendo generadores de energía, transformadores y equipos auxiliares, ante daños o averías que puedan causar perjuicios financieros significativos.",
        },
        {
          title: "Todo Riesgo Construcción y Montaje",
          description:
            "Cubre riesgos asociados a proyectos de construcción y montaje, como incendios, rayos, explosiones, robos y errores durante el proceso de instalación o construcción.",
        },
      ]}
      px={{ base: 4, md: 8 }}
    />
  );
}
