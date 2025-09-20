import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
  bgImage?: string;
  overlay?: string;
  bgColor?: string;
};

export default function MainContainer({
  children,
  bgImage,
  overlay,
  bgColor,
}: MainContainerProps) {
  const finalBgImage =
    overlay && bgImage
      ? `${overlay}, url(${bgImage})`
      : bgImage
        ? `url(${bgImage})`
        : undefined;

  return (
    <Box
      as="main"
      minH="100vh"
      w="full"
      bgImage={finalBgImage}
      bgColor={bgColor ?? "gray.50"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      pt={{ base: 8, md: 16 }}
    >
      {children}
    </Box>
  );
}
