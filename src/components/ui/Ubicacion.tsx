import { Box } from "@chakra-ui/react";

type UbicacionProps = {
  height?: number;
  zoom?: number;
};

export default function Ubicacion({ height = 400, zoom = 14 }: UbicacionProps) {
  return (
    <Box
      as="iframe"
      src={`https://www.google.com/maps?q=Villa+Luro,+Buenos+Aires,+Argentina&z=${zoom}&output=embed`}
      width="100%"
      height={height}
      style={{
        border: 0,
        borderRadius: "12px",
      }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
