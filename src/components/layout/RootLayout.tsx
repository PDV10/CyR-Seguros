import { Box, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const HEADER_H = 64;
const FOOTER_H = 56;

export default function RootLayout() {
  return (
    <Box minH="100vh" display="flex" flexDir="column" bg="gray.50">
      <Box
        as="header"
        position="sticky"
        top={0}
        zIndex={50}
        bg="white"
        boxShadow="sm"
        h={`${HEADER_H}px`}
      >
        <Header />
      </Box>

      <Box as="main" flex="1" pt={2} pb={`${FOOTER_H + 12}px`}>
        <Container maxW="1200px" py={4}>
          <Outlet />
        </Container>
      </Box>

      <Box
        as="footer"
        position="sticky"
        bottom={0}
        zIndex={40}
        bg="white"
        borderTop="1px solid"
        borderColor="gray.100"
        h={`${FOOTER_H}px`}
      >
        <Footer />
      </Box>
    </Box>
  );
}
