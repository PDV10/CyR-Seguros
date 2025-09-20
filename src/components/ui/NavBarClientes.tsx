import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  type BoxProps,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { Link as RouterLink } from "react-router-dom";

import client1 from "../../assets/img/clients/client-1.png";
import client2 from "../../assets/img/clients/client-2.png";
import client3 from "../../assets/img/clients/client-3.png";
import client4 from "../../assets/img/clients/client-4.png";
import client5 from "../../assets/img/clients/client-5.png";
import client6 from "../../assets/img/clients/client-6.png";
import RevealOnScroll from "../animations/RevealOnScroll";

const RouterChakraLink = (props: any) => (
  <ChakraLink as={RouterLink} {...props} />
);

export default function NavBarClientes(props: BoxProps) {
  const clientes = [
    {
      cliente: "Myob",
      img: client1,
      hidden: false,
      link: "https://www.myob.com",
    },
    {
      cliente: "Belimo",
      img: client2,
      hidden: false,
      link: "https://www.belimo.com",
    },
    {
      cliente: "LifeGroups",
      img: client3,
      hidden: false,
      link: "/clientes/lifegroups",
    },
    {
      cliente: "Grabyo",
      img: client4,
      hidden: false,
      link: "https://www.grabyo.com",
    },
    {
      cliente: "Citrus",
      img: client5,
      hidden: false,
      link: "https://www.citrus.com",
    },
    {
      cliente: "Trustly",
      img: client6,
      hidden: false,
      link: "https://www.trustly.net",
    },
  ];

  const visibles = clientes.filter((c) => !c.hidden);
  const duplicados = [...visibles, ...visibles];

  return (
    <RevealOnScroll delay={0.1}>
      <Box
        display="flow-root"
        w="100vw"
        position="relative"
        bg="rgba(255, 255, 255, 0.1)"
        py={4}
        backdropFilter="blur(4px)"
        {...props}
      >
        <Marquee speed={20} pauseOnHover gradient={false}>
          {duplicados.map((c, i) => {
            const isExternal = c.link.startsWith("http");
            const LinkWrapper = isExternal
              ? (p: any) => <ChakraLink href={c.link} isExternal {...p} />
              : (p: any) => <RouterChakraLink to={c.link} {...p} />;
            return (
              <LinkWrapper
                key={`${c.cliente}-${i}`}
                _hover={{ textDecoration: "none" }}
              >
                <Flex
                  align="center"
                  justify="center"
                  rounded="lg"
                  shadow="sm"
                  p={3}
                  mx={5}
                  minW="140px"
                  h="60px"
                  bg="rgba(255, 255, 255, 0.3)"
                  _hover={{
                    transform: "scale(1.05)",
                    bg: "rgba(255, 255, 255, 0.6)",
                  }}
                  transition="transform 0.2s ease"
                >
                  <Image
                    src={c.img}
                    alt={c.cliente}
                    h="40px"
                    objectFit="contain"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="filter 0.2s ease"
                  />
                </Flex>
              </LinkWrapper>
            );
          })}
        </Marquee>
      </Box>
    </RevealOnScroll>
  );
}
