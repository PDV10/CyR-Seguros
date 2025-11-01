import { Flex, Box, Link as ChakraLink, Icon } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import type { ContactFormValues } from "../ui/ContactForm";
import ContactForm from "../ui/ContactForm";
import { FaWhatsapp } from "react-icons/fa";
export default function RootLayout() {
  const { pathname } = useLocation();

  const HIDE_GLOBAL_CONTACT_ON = ["/contact"];
  const showGlobalContact = !HIDE_GLOBAL_CONTACT_ON.some((r) =>
    pathname.startsWith(r),
  );

  const handleGlobalContactSubmit = (values: ContactFormValues) => {
    console.log("Contacto (global) enviado:", values);
  };
  const whatsappHref =
    "https://api.whatsapp.com/send?phone=5491155820489&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20seguros.%20%C2%BFPodr%C3%ADan%20asesorarme%3F";

  return (
    <Flex minH="100vh" direction="column" bg="gray.50" overflowX="hidden">
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex="docked"
        bg="white"
        boxShadow="sm"
        borderBottom="1px solid"
        borderColor="gray.100"
        h={16}
      >
        <Header />
      </Box>

      <Box as="main" flex="1">
        <Outlet />
      </Box>

      {showGlobalContact && (
        <Box
          as="section"
          bg="white"
          borderTop="1px solid"
          borderColor="gray.100"
          py={12}
        >
          <Flex maxW="container.md" mx="auto" px={4} direction="column" gap={6}>
            <ContactForm onSubmit={handleGlobalContactSubmit} />
          </Flex>
        </Box>
      )}
      <ChakraLink
        href={whatsappHref}
        isExternal
        position="fixed"
        bottom="24px"
        right="24px"
        bg="green.500"
        color="white"
        borderRadius="full"
        w="60px"
        h="60px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _hover={{ bg: "green.600", transform: "scale(1.05)" }}
        boxShadow="lg"
        transition="all 0.2s ease-in-out"
        zIndex={1000}
        aria-label="Contactar por WhatsApp"
      >
        <Icon as={FaWhatsapp} boxSize={7} />
      </ChakraLink>

      <Box
        as="footer"
        bg="white"
        borderTop="1px solid"
        borderColor="lightBlue.100"
      >
        <Footer />
      </Box>
    </Flex>
  );
}
