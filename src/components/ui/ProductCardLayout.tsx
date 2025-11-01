import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Icon,
  Skeleton,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
import { useState } from "react";
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
  showItemDescription?: boolean;
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
  showItemDescription = true,
}: ProductCardLayoutProps) {
  const bg = useColorModeValue("white", "gray.800");
  const muted = useColorModeValue("gray.600", "gray.300");
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <MainContainer px={px} py={{ base: 10, md: 16 }}>
      <VStack
        spacing={4}
        maxW="container.lg"
        mx="auto"
        mb={{ base: 10, md: 16 }}
        textAlign="center"
      >
        <Heading
          size={{ base: "xl", md: "2xl" }}
          color="lightBlue.900"
          lineHeight="1.2"
        >
          {title}
        </Heading>
        {subtitle && (
          <Text fontSize={{ base: "md", md: "lg" }} color={muted}>
            {subtitle}
          </Text>
        )}
        {description && (
          <Text
            fontSize={{ base: "md", md: "lg" }}
            color={muted}
            maxW="4xl"
            lineHeight="taller"
          >
            {description}
          </Text>
        )}
      </VStack>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        maxW="container.xl"
        mx="auto"
        gap={{ base: 8, md: 12 }}
      >
        <Box flex={{ base: 1, md: "0 0 520px" }} w="100%" textAlign="center">
          <AspectRatio
            ratio={3 / 2}
            w="100%"
            maxW={{ base: "100%", md: "520px" }}
            mx="auto"
            borderRadius="2xl"
          >
            <Skeleton isLoaded={imgLoaded} borderRadius="2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                objectFit="cover"
                borderRadius="2xl"
                boxShadow="xl"
                w="100%"
                h="100%"
                loading="lazy"
                decoding="async"
                onLoad={() => setImgLoaded(true)}
              />
            </Skeleton>
          </AspectRatio>
        </Box>

        <Box
          flex={{ base: 1, md: 1.1 }}
          bg={bg}
          borderRadius="2xl"
          p={{ base: 5, md: 8 }}
          boxShadow="xl"
          maxW={{ base: "100%", md: "700px" }}
          w="100%"
          minH={{ base: "auto", md: "347px" }}
        >
          <VStack align="flex-start" spacing={6}>
            <Heading size="md" color="gray.900">
              {rightTitle}
            </Heading>

            <Flex wrap="wrap" gap={{ base: 4, md: 5 }}>
              {items.map((item) => (
                <HStack
                  key={item.title}
                  align="flex-start"
                  spacing={3}
                  flexBasis={{ base: "100%", sm: "48%" }}
                  flexGrow={0}
                  flexShrink={0}
                >
                  <Icon
                    as={TbCheck}
                    color="lightBlue.500"
                    boxSize={5}
                    mt="6px"
                  />
                  <VStack align="flex-start" spacing={1}>
                    <Text fontWeight="semibold" color="gray.800">
                      {item.title}
                    </Text>
                    {showItemDescription && item.description && (
                      <Text fontSize="sm" color={muted}>
                        {item.description}
                      </Text>
                    )}
                  </VStack>
                </HStack>
              ))}
            </Flex>
          </VStack>
        </Box>
      </Flex>
    </MainContainer>
  );
}
