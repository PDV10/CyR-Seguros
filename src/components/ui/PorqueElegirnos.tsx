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
        "Te guiamos para elegir la cobertura ideal según tu perfil y necesidades, comparando opciones y costos.",
      hidden: false,
    },
    {
      titulo: "Gestión ágil de siniestros",
      descripcion:
        "Acompañamiento integral ante un siniestro para que resuelvas rápido y sin fricción.",
      hidden: false,
    },
    {
      titulo: "Más de 15 años de experiencia",
      descripcion:
        "Trayectoria, respaldo y alianzas con aseguradoras líderes del mercado.",
      hidden: false,
    },
  ];

  return (
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
  );
}
