// src/components/ui/OpcionesDeContratacion.tsx
import { Box, Heading, VStack, Text, HStack, Icon } from "@chakra-ui/react";
import { TbCheck } from "react-icons/tb";
import RevealOnScroll from "../animations/RevealOnScroll";

type Opcion = {
  title: string;
  description: string;
};

const opciones: Opcion[] = [
  {
    title: "📍 Pólizas Individuales",
    description:
      "Diseñadas para vehículos particulares y motos, con coberturas flexibles y precios accesibles.",
  },
  {
    title: "🏢 Seguros para Flotas Empresariales",
    description:
      "Protección total para empresas y negocios con múltiples vehículos, con beneficios exclusivos.",
  },
  {
    title: "✅ Descuentos por volumen",
    description:
      "Ahorra en tus pólizas cuando asegurás más de un vehículo bajo la misma empresa.",
  },
  {
    title: "✅ Gestión centralizada de pólizas",
    description:
      "Administra todas tus coberturas desde un solo lugar, simplificando la gestión y el seguimiento.",
  },
];

export default function OpcionesDeContratacion() {
  return (
    <RevealOnScroll delay={0.2}>
      <Box
        w="full"
        maxW="container.md"
        mx="auto"
        mb={16}
        px={{ base: 4, md: 8 }}
        textAlign="center"
      >
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          color="lightBlue.900"
          mb={10}
        >
          Opciones de Contratación
        </Heading>

        <VStack align="stretch" spacing={8}>
          {opciones.map((opcion, idx) => (
            <HStack
              key={opcion.title}
              align="start"
              spacing={3}
              pb={4}
              borderBottom={idx !== opciones.length - 1 ? "1px solid" : "none"}
              borderColor="gray.200"
            >
              <Icon as={TbCheck} color="lightBlue.400" boxSize={6} mt="2px" />
              <Box textAlign="left">
                <Text fontWeight="bold" color="gray.800" mb={1}>
                  {opcion.title}
                </Text>
                <Text color="gray.700" fontSize="sm">
                  {opcion.description}
                </Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Box>
    </RevealOnScroll>
  );
}
