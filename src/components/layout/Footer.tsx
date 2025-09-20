// src/components/layout/Footer.tsx
import {
  Flex,
  Box,
  Text,
  HStack,
  Icon,
  Link as ChakraLink,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      as="footer"
      w="100vw"
      position="relative"
      bg="lightBlue.50"
      color="gray.700"
      pt={4}
      pb={4}
      px={{ base: 6, md: 12 }}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        gap={{ base: 8, md: 0 }}
        maxW="container.xl"
        mx="auto"
      >
        {/* Lado izquierdo */}
        <VStack align="flex-start" spacing={3}>
          <Text fontWeight="bold" fontSize="xl" color="lightBlue.800">
            C y R
          </Text>
          <Text fontSize="sm" maxW="sm">
            Seguinos en nuestras redes sociales para más contenido.
          </Text>

          <HStack spacing={4}>
            <ChakraLink
              href="https://www.instagram.com/cyr_asesoresdeseguros/"
              isExternal
              _hover={{ color: "lightBlue.400" }}
            >
              <Icon as={FaInstagram} boxSize={5} />
            </ChakraLink>
            <ChakraLink
              href="https://www.facebook.com/people/CyR-Asesores-de-Seguros/61570905597529/"
              isExternal
              _hover={{ color: "lightBlue.400" }}
            >
              <Icon as={FaFacebookF} boxSize={5} />
            </ChakraLink>
            <ChakraLink
              href="https://api.whatsapp.com/send?phone=5491155820489&text=Hola%2C%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20seguros.%20¿Podrían%20asesorarme%3F"
              isExternal
              _hover={{ color: "lightBlue.400" }}
            >
              <Icon as={FaWhatsapp} boxSize={5} />
            </ChakraLink>
          </HStack>
        </VStack>

        {/* Lado derecho */}
        <VStack align="flex-start" spacing={1} fontSize="sm">
          <Text fontSize="md" fontWeight="Bold" color="lightBlue.800">
            Contáctanos
          </Text>
          <Text fontWeight="semibold">Villa Luro</Text>
          <Text>Buenos Aires - Capital Federal</Text>
          <Text>Argentina</Text>

          <Text fontWeight="semibold">
            Teléfono:{" "}
            <Text as="span" fontWeight="normal">
              011 5600-6601
            </Text>
          </Text>

          <Text fontWeight="semibold">
            Email:{" "}
            <ChakraLink
              as="span"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=asesoresdeseguroscontacto@gmail.com&su=Consulta%20sobre%20seguros&body=Hola%2C%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20seguros."
              isExternal
              _hover={{ color: "lightBlue.400" }}
              fontWeight="normal"
            >
              asesoresdeseguroscontacto@gmail.com
            </ChakraLink>
          </Text>
        </VStack>
      </Flex>

      <Divider my={6} />

      <Flex justify="center">
        <Text fontSize="xs" color="gray.500" textAlign="center">
          © {new Date().getFullYear()} CyR Seguros — Todos los derechos
          reservados
        </Text>
      </Flex>
    </Box>
  );
}
