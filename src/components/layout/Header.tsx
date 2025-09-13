import {
  Flex,
  HStack,
  Image,
  Link as ChakraLink,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      h="full"
      align="center"
      px={{ base: 4, md: 6 }}
      mx="auto"
      maxW="1200px"
      justify="space-between"
    >
      <HStack as={Link} to="/" spacing={3}>
        <Image
          src="/public/cyr-logo.png"
          alt="Logo"
          boxSize="100px"
          borderRadius="md"
        />
      </HStack>

      <HStack spacing={4}>
        <ChakraLink as={NavLink} to="/" _hover={{ textDecor: "none" }}>
          Home
        </ChakraLink>

        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            rightIcon={<ChevronDownIcon />}
          >
            Servicios
          </MenuButton>
          <MenuList>
            <MenuItem as={NavLink} to="/servicios">
              Todos los servicios
            </MenuItem>
            <MenuItem as={NavLink} to="/servicios/seguros-auto">
              Seguros de Auto
            </MenuItem>
          </MenuList>
        </Menu>

        <ChakraLink as={NavLink} to="/about" _hover={{ textDecor: "none" }}>
          Nosotros
        </ChakraLink>
      </HStack>
    </Flex>
  );
}
