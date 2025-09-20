import ProductCardLayout from "../../components/ui/ProductCardLayout";
import vehiculosImg from "../../assets/img/products/vehiculos.png";

export default function index() {
  return (
    <ProductCardLayout
      title="Seguros para auto, moto y flota."
      subtitle="Protege tu Vehículo y Flota con Cobertura a tu Medida 🚗🏍️🚛"
      description={`Trabajamos con las mejores compañías del mercado para ofrecerte seguros a la medida de tus necesidades. Desde coberturas básicas hasta planes integrales, garantizamos protección, respaldo y tranquilidad en cada kilómetro.

Ya sea que tengas un auto, moto o una flota empresarial, contamos con opciones flexibles y personalizadas para que manejes sin preocupaciones.`}
      imageSrc={vehiculosImg}
      imageAlt="Vehículos asegurados"
      rightTitle="Sabemos lo importante que es tu vehículo para tu negocio y tu vida diaria. Por eso, te ofrecemos un seguro automotor a medida, con planes flexibles y protección total ante cualquier imprevisto."
      items={[
        {
          title: "Responsabilidad Civil Obligatoria (RC)",
          description:
            "Cumple con la normativa vigente y cubre daños a terceros en caso de accidentes.",
        },
        {
          title: "Robo y Hurto Total/Parcial",
          description:
            "Protege tu inversión contra la sustracción de tu vehículo o sus partes.",
        },
        {
          title: "Incendio Total y Parcial",
          description: "Cobertura ante fuego, explosiones y cortocircuitos.",
        },
        {
          title: "Daños por Accidentes",
          description:
            "Protección ante colisiones, vuelcos y otros imprevistos, incluso si fuiste responsable.",
        },
        {
          title: "Cristales y Parabrisas",
          description:
            "Reemplazo de vidrios, lunetas y cerraduras sin deducibles.",
        },
        {
          title: "Cobertura por Granizo e Inundación",
          description: "Protección ante fenómenos climáticos adversos.",
        },
        {
          title: "Asistencia en Viaje 24/7",
          description:
            "Auxilio mecánico, remolque y asistencia ante emergencias, en cualquier momento y lugar.",
        },
      ]}
      px={{ base: 4, md: 8 }}
    />
  );
}
