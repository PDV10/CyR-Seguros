import { Box } from "@chakra-ui/react";

export default function ServiciosIndex() {
  return (
    <>
      <Box
        minH="100vh"
        w="full"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        px={{ base: 4, md: 12 }}
        py={{ base: 8, md: 16 }}
      >
        Nuestros Servicios
      </Box>
    </>
  );
}
