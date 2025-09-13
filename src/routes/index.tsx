import { Heading, Text, VStack } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <VStack align="start" spacing={4}>
      <Heading size="lg">Inicio</Heading>
      <Text>Bienvenido a CyR Seguros</Text>
    </VStack>
  );
}
