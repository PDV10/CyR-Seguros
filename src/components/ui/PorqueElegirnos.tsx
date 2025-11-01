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
      titulo: "🧭 Te acompañamos en cada decisión",
      descripcion:
        "Recibí un asesoramiento cercano y transparente. Analizamos tus necesidades para ofrecerte coberturas a medida, y te ayudamos a tomar decisiones con tranquilidad y confianza.",
      hidden: false,
    },
    {
      titulo: "📈 Crece con confianza",
      descripcion:
        "Diseñamos soluciones de seguros que te respaldan frente a imprevistos y te permiten enfocarte en lo que realmente importa: hacer crecer tu proyecto.",
      hidden: false,
    },
    {
      titulo: "💡 Experiencia que simplifica lo complejo",
      descripcion:
        "Nuestro conocimiento del mercado nos permite recomendarte las mejores coberturas, de forma clara y accesible. Convertimos un proceso técnico en algo simple y comprensible.",
      hidden: false,
    },
    {
      titulo: "🏢 Solidez y respaldo asegurado",
      descripcion:
        "Trabajamos junto a aseguradoras reconocidas y un equipo comprometido para brindarte la seguridad de que tus bienes y tu futuro están protegidos.",
      hidden: false,
    },
    {
      titulo: "💬 Tu opinión nos impulsa",
      descripcion:
        "Escuchamos tus inquietudes y mejoramos cada día nuestros servicios. Buscamos ofrecerte respuestas rápidas, atención personalizada y soluciones reales.",
      hidden: false,
    },
    {
      titulo: "🤝 Aseguramos tus ideas, sin complicaciones",
      descripcion:
        "Creemos que proteger lo que construís no debe ser complejo. Te ofrecemos planes claros, precios competitivos y el respaldo de un equipo que te acompaña en cada paso.",
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
