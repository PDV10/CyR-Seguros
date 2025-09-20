import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function RootLayout() {
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
