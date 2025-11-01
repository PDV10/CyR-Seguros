import ProductCardLayout from "../../components/ui/ProductCardLayout";
import respCivilImg from "../../assets/img/products/respcivil.jpg";

export default function ResponsabilidadCivil() {
  return (
    <ProductCardLayout
      title="Seguro de Responsabilidad Civil Profesional"
      subtitle="¿Qué es?"
      description={`El Seguro de Responsabilidad Civil Profesional está diseñado para protegerte frente a reclamos por errores, omisiones o negligencias que puedan surgir en el ejercicio de tu profesión. Ideal para profesionales que brindan servicios y asesoramiento, este seguro te ofrece una red de seguridad frente a posibles demandas de terceros.`}
      imageSrc={respCivilImg}
      imageAlt="Seguro de Responsabilidad Civil"
      rightTitle="Coberturas Incluidas"
      items={[
        {
          title: "Errores y Omisiones",
          description:
            "Cubre reclamaciones derivadas de errores o fallos en los servicios que ofreces, ya sea por información incorrecta, negligencia o mala praxis.",
        },
        {
          title: "Defensa Legal",
          description:
            "Incluye asistencia para cubrir gastos legales y de defensa en caso de reclamaciones o demandas de terceros.",
        },
        {
          title: "Compensación por Daños",
          description:
            "Te protege frente a indemnizaciones que puedas tener que pagar si se determina que has causado daño a un cliente o tercero.",
        },
        {
          title: "Costos de Resolución",
          description:
            "Cubre los gastos asociados a la resolución de conflictos o acuerdos extrajudiciales para evitar procesos judiciales largos.",
        },
      ]}
      px={{ base: 4, md: 8 }}
    />
  );
}
