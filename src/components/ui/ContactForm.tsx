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
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState, useCallback, type ChangeEvent, type FormEvent } from "react";
import { TbEraser, TbSend } from "react-icons/tb";
import RevealOnScroll from "../animations/RevealOnScroll";
import emailjs from "emailjs-com";

export type ContactFormValues = {
  nombre: string;
  apellido: string;
  mail: string;
  localidad: string;
  celular: string;
  mensaje: string;
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => void;
  submitLabel?: string;
  showWhatsAppFab?: boolean;
  whatsappHref?: string;
  showIntro?: boolean;
};

export default function ContactForm({
  onSubmit,
  submitLabel = "Enviar",
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
    },
    []
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

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      onSubmit?.(values);
      setIsSubmitting(true);

      try {
        const templateParams = {
          from_name: `${values.nombre} ${values.apellido}`,
          from_email: values.mail,
          localidad: values.localidad || "-",
          celular: values.celular || "-",
          mensaje: values.mensaje,
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );

        toast({
          title: "Mensaje enviado",
          description:
            "Gracias por contactarte. Te responderemos a la brevedad.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        reset();
      } catch (error) {
        console.error("EmailJS error:", error);

        toast({
          title: "Error",
          description:
            "Hubo un problema al enviar el mensaje. Intentá nuevamente.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSubmit, values, toast, reset]
  );

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
                isDisabled={isSubmitting}
              />
            </Tooltip>
            <Button
              type="submit"
              colorScheme="blue"
              rightIcon={<TbSend size={18} />}
              size="md"
              isLoading={isSubmitting}
              loadingText="Enviando..."
            >
              {submitLabel}
            </Button>
          </Flex>
        </Box>
      </Flex>
    </RevealOnScroll>
  );
}
