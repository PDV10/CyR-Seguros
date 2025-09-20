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
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Collapse,
  Text,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { NAV_ITEMS } from "../../config/navigation";

export default function Header() {
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [openProducts, setOpenProducts] = useState(false);

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

      <HStack spacing={4} display={{ base: "none", md: "flex" }}>
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

      <IconButton
        aria-label="Open menu"
        icon={<HamburgerIcon />}
        variant="ghost"
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
      />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack align="start" spacing={4} mt={10} w="full">
              {NAV_ITEMS.filter((item) => !item.hidden).map((item) =>
                item.submenu ? (
                  <Box key={item.name} w="full">
                    <Flex
                      w="full"
                      justify="space-between"
                      align="center"
                      cursor="pointer"
                      onClick={() => setOpenProducts((prev) => !prev)}
                    >
                      <Text fontWeight="bold" fontSize="lg">
                        {item.name}
                      </Text>
                      <ChevronDownIcon
                        transform={
                          openProducts ? "rotate(180deg)" : "rotate(0deg)"
                        }
                        transition="transform 150ms ease"
                      />
                    </Flex>
                    <Collapse in={openProducts} animateOpacity>
                      <VStack align="start" pl={4} mt={2} spacing={2}>
                        {(item.submenu ?? [])
                          .filter((sub) => !sub.hidden)
                          .map((sub) => (
                            <ChakraLink
                              as={NavLink}
                              key={sub.name}
                              to={sub.to!}
                              onClick={onClose}
                              fontSize="md"
                              color="black"
                              _hover={{ color: "lightBlue.400" }}
                              _activeLink={{ color: "lightBlue.400" }}
                            >
                              {sub.name}
                            </ChakraLink>
                          ))}
                      </VStack>
                    </Collapse>
                  </Box>
                ) : (
                  <ChakraLink
                    as={NavLink}
                    key={item.name}
                    to={item.to!}
                    onClick={onClose}
                    fontSize="lg"
                    color="black"
                    _hover={{ color: "lightBlue.400" }}
                    _activeLink={{ color: "lightBlue.400" }}
                  >
                    {item.name}
                  </ChakraLink>
                ),
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
