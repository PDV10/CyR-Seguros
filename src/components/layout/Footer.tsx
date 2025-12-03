import {
  Flex,
  Box,
  Text,
  HStack,
  Icon,
  Link as ChakraLink,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const scrollToTopAnimated = (duration = 600) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, start * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

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
        <VStack align="flex-start" spacing={3}>
          <ChakraLink
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: "none" }}
            onClick={() => scrollToTopAnimated(700)}
          >
            <Image
              src="/cyr-logo.png"
              alt="Logo"
              h="64px"
              w="auto"
              maxH="100%"
              objectFit="contain"
            />
          </ChakraLink>

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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@cyrseguros.com&su=Consulta%20sobre%20seguros&body=Hola%2C%20me%20gustaría%20recibir%20más%20información%20sobre%20sus%20seguros."
              isExternal
              _hover={{ color: "lightBlue.400" }}
              fontWeight="normal"
            >
              contacto@cyrseguros.com
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
