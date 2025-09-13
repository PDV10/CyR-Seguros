import { Heading, List, ListItem, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function ServiciosIndex() {
  return (
    <>
      <Heading size="lg" mb={4}>
        Nuestros Servicios
      </Heading>
      <List spacing={2}>
        <ListItem>
          <Link as={RouterLink} to="/servicios/seguros-auto">
            Seguros de Auto
          </Link>
        </ListItem>
        {/* Agregá más <ListItem> aquí si aparecen nuevos servicios */}
      </List>
    </>
  );
}
