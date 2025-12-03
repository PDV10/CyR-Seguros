import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  type BoxProps,
} from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import { Link as RouterLink } from "react-router-dom";

import client1 from "../../assets/img/clients/logo-allianz.webp";
import client2 from "../../assets/img/clients/logo-barbuss.webp";
import client3 from "../../assets/img/clients/logo-experta.webp";
import client4 from "../../assets/img/clients/logo-federancion-patronal.webp";
import client5 from "../../assets/img/clients/logo-galicia-seguros.webp";
import client6 from "../../assets/img/clients/logo-holando.webp";
import client7 from "../../assets/img/clients/logo-integrity-seguros.webp";
import client8 from "../../assets/img/clients/logo-mercantil-andina.webp";
import client9 from "../../assets/img/clients/logo-pacifico-seguros.webp";
import client10 from "../../assets/img/clients/logo-rivadavia-seguros.webp";
import RevealOnScroll from "../animations/RevealOnScroll";

const RouterChakraLink = (props: any) => (
  <ChakraLink as={RouterLink} {...props} />
);

export default function NavBarClientes(props: BoxProps) {
  const clientes = [
    {
      cliente: "Allianz",
      img: client1,
      hidden: false,
      link: "https://www.allianz.com.ar",
    },
    {
      cliente: "Barbuss",
      img: client2,
      hidden: false,
      link: "https://barbuss.com/ar/",
    },
    {
      cliente: "Experta Seguros",
      img: client3,
      hidden: false,
      link: "https://www.experta.com.ar/",
    },
    {
      cliente: "Federación Patronal",
      img: client4,
      hidden: false,
      link: "https://www.fedpat.com.ar",
    },
    {
      cliente: "Galicia Seguros",
      img: client5,
      hidden: false,
      link: "https://www.galiciaseguros.com.ar/",
    },
    {
      cliente: "Holando",
      img: client6,
      hidden: false,
      link: "https://www.laholando.com/",
    },
    {
      cliente: "Integrity Seguros",
      img: client7,
      hidden: false,
      link: "https://www.integrityseguros.com.ar",
    },
    {
      cliente: "La Mercantil Andina",
      img: client8,
      hidden: false,
      link: "https://www.mercantilandina.com.ar",
    },
    {
      cliente: "Pacífico Seguros",
      img: client9,
      hidden: false,
      link: "https://www.pacificoseguros.com.ar",
    },
    {
      cliente: "Rivadavia Seguros",
      img: client10,
      hidden: false,
      link: "https://www.segurosrivadavia.com",
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
                    h="46px"
                    maxW="110px"
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
