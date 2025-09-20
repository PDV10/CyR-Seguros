// src/components/ui/ProductHomeCard.tsx
import { Flex, Text, Icon, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import type { ElementType } from "react";
import type { NavItem } from "../../config/navigation";

const MotionFlex = motion(Flex);

type ProductItem = Omit<NavItem, "submenu" | "to"> & {
  to: string;
  icon: ElementType;
  descripcion?: string;
  name: string;
};

type Props = {
  product: ProductItem;
  delay?: number;
};

export function ProductHomeCard({ product, delay = 0 }: Props) {
  return (
    <LinkBox as="article" role="group">
      <MotionFlex
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
        whileHover={{ scale: 1.05 }}
        _hover={{ boxShadow: "md" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
      >
        <Icon as={product.icon} boxSize={12} color="lightBlue.400" mb={3} />
        <Text fontSize="xl" fontWeight="semibold">
          {product.name}
        </Text>
        {product.descripcion && (
          <Text fontSize="sm" color="gray.500" noOfLines={2}>
            {product.descripcion}
          </Text>
        )}
        <LinkOverlay
          as={RouterLink}
          to={product.to}
          aria-label={product.name}
        />
      </MotionFlex>
    </LinkBox>
  );
}
