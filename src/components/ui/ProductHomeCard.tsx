import { Flex, Text, Icon, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import type { ElementType } from "react";
import type { NavItem } from "../../config/navigation";

type ProductItem = Omit<NavItem, "submenu" | "to"> & {
  to: string;
  icon: ElementType;
  descripcion?: string;
  name: string;
};

export function ProductHomeCard({ product }: { product: ProductItem }) {
  return (
    <LinkBox as="article" role="group">
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        rounded="2xl"
        borderWidth="1px"
        borderColor="gray.100"
        bg="white"
        color="gray.800"
        boxShadow="sm"
        p={6}
        w="300px"
        h="220px"
        mx="auto"
        transition="transform 0.18s ease, box-shadow 0.18s ease"
        _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
        shadow="md"
      >
        <Icon as={product.icon} boxSize={12} color="lightBlue.400" mb={3} />
        <Text fontSize="xl" fontWeight="semibold" textAlign="center">
          {product.name}
        </Text>
        {product.descripcion && (
          <Text fontSize="sm" color="gray.500" textAlign="center" noOfLines={2}>
            {product.descripcion}
          </Text>
        )}
        <LinkOverlay
          as={RouterLink}
          to={product.to}
          aria-label={product.name}
        />
      </Flex>
    </LinkBox>
  );
}
