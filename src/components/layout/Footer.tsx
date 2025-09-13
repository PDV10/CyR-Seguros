import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex h="full" align="center" justify="center">
      <Text fontSize="sm" color="gray.600">
        © {new Date().getFullYear()} CyR Seguros — Todos los derechos reservados
      </Text>
    </Flex>
  );
}
