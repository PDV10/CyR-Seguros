import {
  Box,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  Tooltip,
  IconButton,
  Button,
  Link as ChakraLink,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { TbEraser, TbSend } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import RevealOnScroll from "../animations/RevealOnScroll";

export type ContactFormValues = {
  nombre: string;
  apellido: string;
  mail: string;
  localidad: string;
  celular: string;
  mensaje: string;
};

type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => void;
  submitLabel?: string;
  showWhatsAppFab?: boolean;
  whatsappHref?: string;
  /** Permite ocultar el bloque introductorio si alguna pantalla no lo necesita */
  showIntro?: boolean;
};

export default function ContactForm({
  onSubmit,
  submitLabel = "Enviar",
  showWhatsAppFab = true,
  whatsappHref = "https://api.whatsapp.com/send?phone=5491155820489&text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20seguros.%20%C2%BFPodr%C3%ADan%20asesorarme%3F",
  showIntro = true,
}: ContactFormProps) {
  const [values, setValues] = useState<ContactFormValues>({
    nombre: "",
    apellido: "",
    mail: "",
    localidad: "",
    celular: "",
    mensaje: "",
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(values);
    },
    [onSubmit, values],
  );

  const reset = useCallback(() => {
    setValues({
      nombre: "",
      apellido: "",
      mail: "",
      localidad: "",
      celular: "",
      mensaje: "",
    });
  }, []);

  return (
    <RevealOnScroll delay={0.3}>
      <Flex direction="column" maxW="container.md" mx="auto" gap={8} px={4}>
        {showIntro && (
          <>
            <Box textAlign="center">
              <Heading
                size={{ base: "lg", md: "xl" }}
                color="lightBlue.900"
                letterSpacing="tight"
              >
                Envianos tu Consulta
              </Heading>
              <Text mt={2} color="gray.600">
                Te ofrecemos distintos canales para comunicarte con nosotros.
              </Text>
            </Box>

            <Text textAlign="center" color="gray.600">
              También podés comunicarte directamente por WhatsApp haciendo clic
              en el ícono que ves abajo a la derecha.
            </Text>
          </>
        )}

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="2xl"
          boxShadow="sm"
          p={{ base: 5, md: 8 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <FormControl isRequired>
              <FormLabel fontWeight="medium">Nombre</FormLabel>
              <Input
                size="lg"
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                placeholder="Juan"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="medium">Apellido</FormLabel>
              <Input
                size="lg"
                name="apellido"
                value={values.apellido}
                onChange={handleChange}
                placeholder="Pérez"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontWeight="medium">Mail</FormLabel>
              <Input
                size="lg"
                type="email"
                name="mail"
                value={values.mail}
                onChange={handleChange}
                placeholder="tuemail@dominio.com"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="medium">Localidad</FormLabel>
              <Input
                size="lg"
                name="localidad"
                value={values.localidad}
                onChange={handleChange}
                placeholder="Palermo, CABA"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="medium">Celular</FormLabel>
              <Input
                size="lg"
                type="tel"
                name="celular"
                value={values.celular}
                onChange={handleChange}
                placeholder="+54 9 11 1234 5678"
              />
            </FormControl>
          </SimpleGrid>

          <FormControl mt={4} isRequired>
            <FormLabel fontWeight="medium">Mensaje</FormLabel>
            <Textarea
              name="mensaje"
              value={values.mensaje}
              onChange={handleChange}
              placeholder="Contanos en qué podemos ayudarte..."
              rows={6}
              resize="vertical"
            />
          </FormControl>

          <Flex mt={6} justify="flex-end" align="center" gap={3}>
            <Tooltip label="Limpiar" hasArrow>
              <IconButton
                aria-label="Limpiar"
                variant="ghost"
                colorScheme="gray"
                onClick={reset}
                icon={<TbEraser size={20} />}
              />
            </Tooltip>
            <Button
              type="submit"
              colorScheme="blue"
              rightIcon={<TbSend size={18} />}
              size="md"
            >
              {submitLabel}
            </Button>
          </Flex>
        </Box>
      </Flex>

      {showWhatsAppFab && (
        <ChakraLink
          href={whatsappHref}
          isExternal
          position="fixed"
          bottom="24px"
          right="24px"
          bg="green.500"
          color="white"
          borderRadius="full"
          w="60px"
          h="60px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ bg: "green.600", transform: "scale(1.05)" }}
          boxShadow="lg"
          transition="all 0.2s ease-in-out"
          zIndex={1000}
          aria-label="Contactar por WhatsApp"
        >
          <Icon as={FaWhatsapp} boxSize={7} />
        </ChakraLink>
      )}
    </RevealOnScroll>
  );
}
