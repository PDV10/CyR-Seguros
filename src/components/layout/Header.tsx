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
import { NavLink, Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../config/navigation";

export default function Header() {
  const location = useLocation();

  const tabBase = {
    fontSize: "2xl",
    px: 2,
    py: 1,
    color: "black",
    textDecoration: "none",
  } as const;

  const hoverColor = { color: "lightBlue.400" } as const;

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
            const isActive = item.submenu.some(
              (sub) => location.pathname === sub.to,
            );

            return (
              <Menu key={item.name} isLazy>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="navGhost"
                      px={tabBase.px}
                      py={tabBase.py}
                      fontSize={tabBase.fontSize}
                      height="auto"
                      bg="transparent"
                      borderRadius="none"
                      color={isActive ? "lightBlue.400" : tabBase.color}
                      _expanded={{ bg: "transparent", color: "lightBlue.400" }}
                      _hover={{ bg: "transparent", ...hoverColor }}
                      rightIcon={
                        <ChevronDownIcon
                          transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}
                          transition="transform 150ms ease"
                        />
                      }
                      iconSpacing={1}
                      fontWeight="normal"
                    >
                      {item.name}
                    </MenuButton>

                    <MenuList>
                      {(item?.submenu ?? [])
                        .filter((sub) => !sub.hidden)
                        .map((sub) => (
                          <MenuItem
                            as={NavLink}
                            key={sub.name}
                            to={sub.to!}
                            color="black"
                            _hover={{
                              bg: "lightBlue.50",
                              color: "lightBlue.400",
                            }}
                            _activeLink={{ color: "lightBlue.400" }}
                          >
                            {sub.name}
                          </MenuItem>
                        ))}
                    </MenuList>
                  </>
                )}
              </Menu>
            );
          }

          return (
            <ChakraLink
              as={NavLink}
              key={item.name}
              to={item.to!}
              {...tabBase}
              _hover={{ textDecor: "none", ...hoverColor }}
              _activeLink={{ color: "lightBlue.400" }}
            >
              {item.name}
            </ChakraLink>
          );
        })}
      </HStack>
    </Flex>
  );
}
