import {
  Flex,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import RevealOnScroll from "../animations/RevealOnScroll";

type Item = {
  titulo: string;
  descripcion: string;
  hidden?: boolean;
};

export default function PorqueElegirnos() {
  const items: Item[] = [
    {
      titulo: "Asesoramiento personalizado",
      descripcion:
        "Recibí un acompañamiento cercano en cada paso. Analizamos tu perfil y necesidades para ofrecerte coberturas a medida, ya sea para tu vehículo, hogar, comercio o industria. Nuestro equipo está preparado para ayudarte a tomar decisiones informadas con total tranquilidad.",
      hidden: false,
    },
    {
      titulo: "Crece con confianza",
      descripcion:
        "Protegé el presente de tu negocio mientras planificás el futuro. Diseñamos soluciones de seguros que te brindan respaldo frente a imprevistos y te permiten concentrarte en hacer crecer tu emprendimiento con seguridad y previsibilidad.",
      hidden: false,
    },
    {
      titulo: "Asesoramiento en seguros",
      descripcion:
        "Nuestra experiencia en el mercado asegurador nos permite recomendarte las mejores coberturas de auto, hogar, responsabilidad civil, caución y más. Convertimos un proceso complejo en algo simple, claro y accesible.",
      hidden: false,
    },
    {
      titulo: "Crecimiento asegurado",
      descripcion:
        "Con más de 15 años en el rubro, nos especializamos en proteger lo que más te importa: tu patrimonio, tu familia y tu negocio. Trabajamos con aseguradoras líderes para garantizarte respaldo y solidez en cada póliza.",
      hidden: false,
    },
    {
      titulo: "Feedback del cliente",
      descripcion:
        "Escuchamos tus inquietudes y mejoramos constantemente nuestros servicios. Tu experiencia nos importa, por eso buscamos soluciones que realmente se adapten a tu estilo de vida, con atención rápida y gestión eficiente en cada siniestro.",
      hidden: false,
    },
    {
      titulo: "Confianza en tus ideas",
      descripcion:
        "Creemos que asegurar lo que construiste no debe ser complicado. Te ofrecemos planes claros, precios competitivos y la tranquilidad de contar con un equipo que te acompaña, para que sigas impulsando tus proyectos con seguridad.",
      hidden: false,
    },
  ];

  return (
    <RevealOnScroll delay={0.3}>
      <Flex
        flexDir="column"
        gap={8}
        justifyContent="center"
        align="center"
        mb={16}
        px={4}
      >
        <Heading size="xl" fontWeight="bold" color="lightBlue.900">
          ¿Por qué elegirnos?
        </Heading>

        <Accordion allowMultiple w="full" maxW="container.lg">
          {items
            .filter((i) => !i.hidden)
            .map((item) => (
              <AccordionItem
                key={item.titulo}
                borderWidth={1}
                borderColor="gray.100"
                rounded="xl"
                bg="white"
                shadow="sm"
                mb={4}
                overflow="hidden"
              >
                <AccordionButton
                  px={{ base: 4, md: 6 }}
                  py={{ base: 3, md: 4 }}
                  gap={3}
                  _hover={{ bg: "lightBlue.50", color: "inherit" }}
                  _expanded={{
                    bg: "lightBlue.400",
                    color: "white",
                  }}
                  transition="all 0.2s ease"
                >
                  <Box
                    w="6px"
                    h="24px"
                    rounded="full"
                    bg="lightBlue.400"
                    flexShrink={0}
                    sx={{ _expanded: { bg: "white" } }}
                  />
                  <Text
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "md", md: "lg" }}
                    fontWeight="semibold"
                  >
                    {item.titulo}
                  </Text>
                  <AccordionIcon
                    transition="transform 0.2s ease"
                    _groupExpanded={{
                      transform: "rotate(180deg)",
                      color: "white",
                    }}
                  />
                </AccordionButton>

                <AccordionPanel
                  px={{ base: 4, md: 6 }}
                  py={{ base: 3, md: 4 }}
                  bg="lightBlue.50"
                  color="gray.700"
                >
                  <Text fontSize={{ base: "sm", md: "md" }}>
                    {item.descripcion}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Flex>
    </RevealOnScroll>
  );
}
