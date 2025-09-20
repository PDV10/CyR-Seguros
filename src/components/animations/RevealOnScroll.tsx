import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Box, type BoxProps } from "@chakra-ui/react";

type RevealOnScrollProps = BoxProps & {
  children: ReactNode;
  delay?: number; // segundos
  y?: number; // desplazamiento inicial vertical (px)
  once?: boolean; // animar solo la primera vez
};

export default function RevealOnScroll({
  children,
  delay = 0,
  y = 20,
  once = true,
  ...rest
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px", once });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      <Box {...rest}>{children}</Box>
    </motion.div>
  );
}
