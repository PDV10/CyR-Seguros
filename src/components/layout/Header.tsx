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
import { NavLink, Link } from "react-router-dom";
import { NAV_ITEMS } from "../../config/navigation";

export default function Header() {
  return (
    <Flex
      h="full"
      align="center"
      px={{ base: 4, md: 6 }}
      mx="auto"
      maxW="1400px"
      justify="space-between"
    >
      <Flex as={Link} to="/" align="center">
        <Image
          src="/cyr-logo.png"
          alt="Logo"
          h="64px"
          w="auto"
          maxH="100%"
          objectFit="contain"
        />
      </Flex>

      <HStack spacing={4}>
        {NAV_ITEMS.filter((item) => !item.hidden).map((item) => {
          if (item.submenu) {
            return (
              <Menu key={item.name}>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  rightIcon={<ChevronDownIcon />}
                >
                  {item.name}
                </MenuButton>
                <MenuList>
                  {item.submenu
                    .filter((sub) => !sub.hidden)
                    .map((sub) => (
                      <MenuItem as={NavLink} key={sub.name} to={sub.to!}>
                        {sub.name}
                      </MenuItem>
                    ))}
                </MenuList>
              </Menu>
            );
          }

          // link normal
          return (
            <ChakraLink
              as={NavLink}
              key={item.name}
              to={item.to!}
              _hover={{ textDecor: "none" }}
            >
              {item.name}
            </ChakraLink>
          );
        })}
      </HStack>
    </Flex>
  );
}
