import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  SimpleGrid,
  Link,
} from "@chakra-ui/react";
import { FaHandshake, FaShieldAlt, FaChartLine } from "react-icons/fa";
import MainContainer from "../../components/layout/MainContainer";
import Ubicacion from "../../components/ui/Ubicacion";

export default function QuienesSomos() {
  const handleContactClick = () => {
    window.location.href = "/contacto";
  };

  return (
    <MainContainer px={{ base: 4, md: 8 }} bgColor="gray.50">
      <Flex
        direction="column"
        maxW="container.lg"
        mx="auto"
        textAlign="center"
        gap={10}
      >
        <VStack spacing={4}>
          <Heading size="2xl" color="lightBlue.800">
            ¿Quiénes Somos?
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
            Bienvenidos a CyR, tu socio estratégico en seguros con más de 15
            años de trayectoria.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} textAlign="left">
          <Text color="gray.700" fontSize="md">
            Somos un equipo de productores asesores de seguros con amplia
            experiencia y una sólida alianza con las mejores compañías del
            mercado. Nuestra especialización abarca una amplia gama de riesgos,
            adaptándonos a las necesidades específicas de cada sector y
            actividad.
          </Text>
          <Text color="gray.700" fontSize="md">
            Nuestra misión es ser el aliado que necesitas para potenciar tu
            crecimiento y proteger lo que más valoras. Te ofrecemos un
            asesoramiento experto y personalizado para que puedas enfocarte en
            tus proyectos sin preocuparte por los imprevistos.
          </Text>
        </SimpleGrid>

        <HStack spacing={8} justify="center" flexWrap="wrap">
          <VStack maxW="220px" textAlign="center">
            <Icon as={FaHandshake} boxSize={10} color="lightBlue.400" />
            <Text fontWeight="bold">Confianza</Text>
            <Text fontSize="sm" color="gray.600">
              Relaciones duraderas basadas en transparencia y compromiso.
            </Text>
          </VStack>

          <VStack maxW="220px" textAlign="center">
            <Icon as={FaShieldAlt} boxSize={10} color="lightBlue.400" />
            <Text fontWeight="bold">Protección</Text>
            <Text fontSize="sm" color="gray.600">
              Coberturas a medida para cada etapa y necesidad.
            </Text>
          </VStack>

          <VStack maxW="220px" textAlign="center">
            <Icon as={FaChartLine} boxSize={10} color="lightBlue.400" />
            <Text fontWeight="bold">Crecimiento</Text>
            <Text fontSize="sm" color="gray.600">
              Impulso a tus objetivos con respaldo de aseguradoras líderes.
            </Text>
          </VStack>
        </HStack>

        <Button
          size="lg"
          alignSelf="center"
          mt={2}
          onClick={handleContactClick}
          colorScheme="lightBlue"
        >
          Contactanos
        </Button>
      </Flex>

      <Flex
        direction="column"
        align="center"
        gap={4}
        w="full"
        maxW="container.xl"
        mx="auto"
        textAlign="center"
        my={12}
        px={{ base: 4, md: 8 }}
      >
        <Heading size="lg" color="lightBlue.800">
          ¿Dónde Encontrarnos?
        </Heading>

        <Text fontSize={{ base: "sm", md: "md" }} color="gray.600" maxW="2xl">
          Estamos en <b>Villa Luro</b>, Ciudad de Buenos Aires. Vení a
          visitarnos o contáctanos para coordinar una reunión.
        </Text>
        <Ubicacion />
      </Flex>
    </MainContainer>
  );
}
