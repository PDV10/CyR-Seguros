import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <Flex minH="100vh" direction="column" bg="gray.50">
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

      <Flex
        as="footer"
        position="sticky"
        bottom={0}
        zIndex="docked"
        bg="white"
        borderTop="1px solid"
        borderColor="gray.100"
        h={14}
        align="center"
        justify="center"
      >
        <Footer />
      </Flex>
    </Flex>
  );
}
