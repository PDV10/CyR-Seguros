import { Flex, Heading, Text } from "@chakra-ui/react";
import { PRODUCT_SUBMENU } from "../config/navigation";
import { ProductHomeCard } from "../components/ui/ProductHomeCard";
import bgImage from "../assets/img/home-bg.jpg";
import MainContainer from "../components/layout/MainContainer";
import NavBarClientes from "../components/ui/NavBarClientes";

export default function Index() {
  return (
    <MainContainer bgImage={bgImage}>
      <Flex justifyContent="space-between" flexDir="column" gap={8}>
        <Flex
          direction="column"
          maxW="container.xl"
          mx="auto"
          textAlign="center"
          align="center"
          color="white"
          gap={6}
        >
          <Heading
            size="2xl"
            fontWeight="bold"
            color="lightBlue.800"
            textShadow="0 1px 2px rgba(0,0,0,0.4)"
            mb={2}
          >
            Bienvenidos a C&amp;R
          </Heading>

          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="gray.500"
            maxW="2xl"
            textShadow="0 1px 1px rgba(0,0,0,0.3)"
          >
            Tu socio estratégico en seguros con más de 15 años de trayectoria.
          </Text>

          <Heading
            size={{ base: "sm", md: "md" }}
            fontWeight="medium"
            color="lightBlue.500"
            pt={{ base: 2, md: 4 }}
          >
            Descubrí todos los seguros que tenemos para vos.
          </Heading>

          <Flex
            wrap="wrap"
            gap={{ base: 4, md: 6 }}
            justify="center"
            w="full"
            pt={{ base: 4, md: 6 }}
          >
            {PRODUCT_SUBMENU.map((product) => (
              <ProductHomeCard key={product.name} product={product} />
            ))}
          </Flex>
        </Flex>
        <NavBarClientes mt={8} mb={5} />
      </Flex>
    </MainContainer>
  );
}
