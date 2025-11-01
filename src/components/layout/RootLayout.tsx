import { Flex, Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import type { ContactFormValues } from "../ui/ContactForm";
import ContactForm from "../ui/ContactForm";

export default function RootLayout() {
  const { pathname } = useLocation();

  const HIDE_GLOBAL_CONTACT_ON = ["/contact"];
  const showGlobalContact = !HIDE_GLOBAL_CONTACT_ON.some((r) =>
    pathname.startsWith(r),
  );

  const handleGlobalContactSubmit = (values: ContactFormValues) => {
    console.log("Contacto (global) enviado:", values);
  };

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
