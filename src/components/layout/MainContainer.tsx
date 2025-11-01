import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ResponsiveVal<T> = T | { base?: T; sm?: T; md?: T; lg?: T; xl?: T };

type MainContainerProps = {
  children: ReactNode;
  bgImage?: string;
  overlay?: string;
  bgColor?: string;
  px?: number | string | object;
  py?: number | string | object;
  fadeOut?: boolean;
  fadeHeight?: ResponsiveVal<string>;
};

export default function MainContainer({
  children,
  bgImage,
  overlay,
  bgColor = "gray.50",
  px = { base: 4, md: 12 },
  py = { base: 8, md: 16 }, // 👈 padding vertical por defecto
  fadeOut = true,
  fadeHeight = { base: "80px", md: "120px" },
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
      position="relative"
      bgImage={finalBgImage}
      bgColor={bgColor}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      px={px}
      py={py} // 👈 se aplica
      pb={fadeOut ? fadeHeight : undefined} // si querés conservar fade
    >
      {children}

      {fadeOut && (
        <Box
          position="absolute"
          left={0}
          right={0}
          bottom={0}
          height={fadeHeight as any}
          pointerEvents="none"
          bgGradient={`linear(to-b, rgba(255,255,255,0) 0%, ${bgColor} 100%)`}
        />
      )}
    </Box>
  );
}
