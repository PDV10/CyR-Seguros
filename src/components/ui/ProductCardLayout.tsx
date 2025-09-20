import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { TbCheck } from "react-icons/tb";
import MainContainer from "../layout/MainContainer";

type FeatureItem = {
  title: string;
  description?: string;
};

type ProductCardLayoutProps = {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  rightTitle: string;
  items: FeatureItem[];
  px?: number | string | object;
};

export default function ProductCardLayout({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  rightTitle,
  items,
  px,
}: ProductCardLayoutProps) {
  return (
    <MainContainer px={px}>
      {/* Encabezado */}
      <VStack
        spacing={4}
        maxW="container.2xl"
        mx="auto"
        align="center"
        textAlign="center"
      >
        <Heading size="2xl" fontWeight="bold" color="lightBlue.900">
          {title}
        </Heading>

        {subtitle && (
          <Heading
            size={{ base: "sm", md: "md" }}
            color="lightBlue.900"
            fontWeight="semibold"
          >
            {subtitle}
          </Heading>
        )}

        {description && (
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.500" maxW="5xl">
            {description}
          </Text>
        )}
      </VStack>

      {/* Contenido */}
      <Flex
        maxW="container.xl"
        mx="auto"
        mt={{ base: 10, md: 16 }}
        gap={{ base: 8, md: 16 }}
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
      >
        {/* Imagen */}
        <Box flex="1" display="flex" justifyContent="center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            w={{ base: "100%", md: "600px" }}
            objectFit="cover"
            rounded="xl"
            loading="lazy"
          />
        </Box>

        {/* Texto y lista */}
        <VStack flex="1" align="flex-start" spacing={4}>
          <Heading size="md" color="gray.900" fontWeight="semibold">
            {rightTitle}
          </Heading>

          <VStack align="stretch" spacing={2}>
            {items.map((item) => (
              <HStack key={item.title} align="start" spacing={3}>
                <Icon as={TbCheck} color="lightBlue.400" boxSize={6} mt="2px" />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" color="gray.700">
                    {item.title}:
                  </Text>
                  {item.description && (
                    <Text fontSize="md" color="gray.600">
                      {item.description}
                    </Text>
                  )}
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Flex>
    </MainContainer>
  );
}
