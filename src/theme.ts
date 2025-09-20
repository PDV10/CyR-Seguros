import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const palettes = {
  lightBlue: {
    50: "#f6fafd",
    100: "#cde4f4",
    200: "#a3d0ec",
    300: "#6db3e0",
    400: "#2487ce", // base
    500: "#1f75b5",
    600: "#1b659d",
    800: "#12416b",
    900: "#0e3559",
  },

  blue: {
    50: "#e8ebf2",
    100: "#cfd6e4",
    200: "#a3b0ca",
    300: "#788ab0",
    400: "#546b97",
    500: "#3a527d",
    600: "#2f4467",
    700: "#263753",
    800: "#1f2d45",
    900: "#1b2740",
  },
  gray: {
    50: "#eef1f2",
    100: "#dde2e4",
    200: "#c1c9cd",
    300: "#a6b0b6",
    400: "#8c989f",
    500: "#73848a",
    600: "#5d6a6f",
    700: "#495459",
    800: "#394347",
    900: "#2c3538",
  },
};

const colors = {
  ...palettes,
  brand: palettes.lightBlue,
  ink: palettes.blue,
  slate: palettes.gray,
};

const space = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  9: "36px",
  10: "40px",
  11: "44px",
  12: "48px",
  13: "52px",
  14: "56px",
  15: "60px",
  16: "64px",
  20: "80px",
  24: "96px",
  28: "112px",
  32: "128px",
  36: "144px",
  40: "160px",
  48: "192px",
  56: "224px",
  64: "256px",
} as const;

const sizes = {
  ...space,
} as const;

const fontSizes = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.375rem", // 22px
  "2xl": "1.5rem", // 24px
  "3xl": "1.875rem", // 30px
  "4xl": "2.25rem", // 36px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72px
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
} as const;

const styles = {
  global: {
    "html, body, #root": { height: "100%" },
    body: { margin: 0, bg: "white", color: "blue.900", lineHeight: 1.5 },
    a: { textDecoration: "none" },
  },
};

const components = {
  Button: {
    defaultProps: { colorScheme: "lightBlue", variant: "solid" },
    baseStyle: {
      borderRadius: "xl",
      fontWeight: 600,
      fontFamily: "body",
    },
    variants: {
      navGhost: {
        bg: "transparent",
        color: "black",
        fontWeight: "normal",
        _hover: { bg: "transparent", color: "lightBlue.400" },
        _active: { bg: "transparent", color: "lightBlue.400" },
        _focus: { boxShadow: "none", bg: "transparent" },
        _expanded: { bg: "transparent", color: "lightBlue.400" },
      },
    },
  },

  // Títulos
  Heading: {
    baseStyle: {
      color: "blue.900",
      letterSpacing: "wide",
      fontFamily: "heading",
    },
  },

  // Texto
  Text: {
    baseStyle: {
      fontFamily:
        "'Cocogoose', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    },
  },

  // Links (ChakraLink)
  Link: {
    baseStyle: {
      fontFamily: "body",
      color: "inherit",
      _hover: { textDecoration: "none", color: "lightBlue.400" },
      _active: { color: "lightBlue.400" },
    },
  },

  Menu: {
    baseStyle: {
      list: {
        borderRadius: "xl",
        boxShadow: "sm",
      },
      item: {
        fontFamily: "body",
        color: "black",
        _hover: { bg: "lightBlue.50", color: "lightBlue.400" },
        _focus: { bg: "lightBlue.50", color: "lightBlue.400" },
        _active: { bg: "lightBlue.50", color: "lightBlue.400" },
      },
    },
  },
};

const theme = extendTheme({
  config,
  colors,
  styles,
  components,
  space,
  sizes,
  fontSizes,
  fonts: {
    body: "'Cocogoose', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    heading:
      "'Raleway', 'Cocogoose', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
    display:
      "'Kenyan Coffee', 'Cocogoose', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  },
  textStyles: {
    display: {
      fontFamily: "display",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "widest",
    },
  },
});

export default theme;
