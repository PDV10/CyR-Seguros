import {
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Button,
  SimpleGrid,
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
        gap={8}
      >
        <VStack spacing={4}>
          <Heading size="2xl" color="lightBlue.800">
            ¿Quiénes Somos?
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
            En C&R Seguros entendemos que cada persona, familia o empresa tiene
            una historia distinta, y que protegerla requiere más que un simple
            seguro: requiere escucha, empatía y acompañamiento real.
          </Text>
        </VStack>

        <Text color="gray.700" fontSize="md">
          Por eso, ponemos el foco en un trato cercano y humano, donde la
          confianza se construye conversando y las soluciones nacen de
          comprender tus verdaderas necesidades. Creemos que la tecnología debe
          sumar, no reemplazar: la usamos para ofrecerte un servicio ágil,
          transparente y eficiente, pero siempre con el respaldo cálido de un
          asesor que te conoce y está ahí cuando lo necesites.
        </Text>
        <Text color="gray.700" fontSize="md">
          Diseñamos seguros a medida, con la flexibilidad y precisión que cada
          historia merece. Nuestro propósito es simple: hacerte sentir protegido
          y acompañado en cada paso, combinando la eficiencia digital con la
          cercanía humana que nos distingue.
        </Text>

        <HStack spacing={8} justify="center" flexWrap="wrap">
          <VStack maxW="220px" textAlign="center">
            <Icon as={FaHandshake} boxSize={10} color="lightBlue.400" />
            <Text fontWeight="bold">Confianza</Text>
            <Text fontSize="xs" color="gray.600">
              Construimos vínculos duraderos basados en la honestidad, la
              transparencia y la atención personalizada.
            </Text>
          </VStack>

          <VStack maxW="220px" textAlign="center">
            <Icon as={FaShieldAlt} boxSize={10} color="lightBlue.400" />
            <Text fontWeight="bold">Protección</Text>
            <Text fontSize="xs" color="gray.600">
              Creamos coberturas que se adaptan a vos, a tu ritmo y a tus
              prioridades.
            </Text>
          </VStack>

          <VStack maxW="220px" textAlign="center">
            <Icon as={FaChartLine} boxSize={10} color="lightBlue.400" />
            <Text fontWeight="bold">Crecimiento</Text>
            <Text fontSize="xs" color="gray.600">
              Te acompañamos a proyectar tu futuro con seguridad, respaldo y una
              atención que evoluciona con vos.
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
