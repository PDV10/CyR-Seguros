import ProductCardLayout from "../../components/ui/ProductCardLayout";
import hogarImg from "../../assets/img/products/hogar.jpg";
import OpcionesDeContratacion from "../../components/ui/OpcionesDeContratacion";

export default function Index() {
  return (
    <>
      <ProductCardLayout
        title="Seguros de Hogar"
        subtitle="Protegé tu casa y a los que más querés 🏡"
        description={`Sabemos que tu hogar es mucho más que una propiedad: es el lugar donde compartís momentos con quienes más querés. 
Con nuestros planes de seguro, cuidás tanto la estructura de tu casa como tus pertenencias y tu tranquilidad.`}
        imageSrc={hogarImg}
        imageAlt="Hogar asegurado"
        rightTitle="Tu casa es tu refugio, por eso diseñamos planes flexibles que protegen tu vivienda y todo lo que hay dentro."
        items={[
          {
            title: "Incendio de Edificio y Contenido",
            description:
              "Protección integral ante incendio en la vivienda o en tus pertenencias.",
          },
          {
            title: "Robo y Hurto de Contenido",
            description:
              "Cubrimos la sustracción de objetos de valor dentro del hogar, con asistencia en reposición.",
          },
          {
            title: "Daños por Agua",
            description:
              "Cobertura ante pérdidas por filtraciones, roturas de cañerías y fenómenos hídricos.",
          },
          {
            title: "Responsabilidad Civil Privada",
            description:
              "Protección ante reclamos por daños a terceros ocasionados por vos o los miembros de tu familia.",
          },
          {
            title: "Cristales y Cerraduras",
            description:
              "Reposición de vidrios y cerraduras rotas para tu seguridad y confort.",
          },
          {
            title: "Cobertura contra Fenómenos Naturales",
            description:
              "Incluye granizo, vientos fuertes, terremotos e inundaciones, para cuidar tu vivienda en cualquier situación.",
          },
          {
            title: "Asistencia Domiciliaria 24/7",
            description:
              "Servicio de plomería, cerrajería, electricidad y asistencia de urgencia cuando más lo necesites.",
          },
        ]}
        px={{ base: 4, md: 8 }}
      />
      <OpcionesDeContratacion />
    </>
  );
}
