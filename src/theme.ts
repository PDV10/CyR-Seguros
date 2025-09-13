import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false,
};

const palettes = {
	lightBlue: {
		50: "#ecfbf8",
		100: "#d7f4ee",
		200: "#b3e9df",
		300: "#90dfd2",
		400: "#7ad2c4",
		500: "#5fb9ad",
		600: "#49968d",
		700: "#397471",
		800: "#2e5b5a",
		900: "#224644",
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
	xs: "10px",
	sm: "12px",
	md: "14px",
	lg: "16px",
	xl: "24px",
	"2xl": "32px",
} as const;

const styles = {
	global: {
		"html, body, #root": { height: "100%" },
		body: { margin: 0, bg: "white", color: "blue.900", lineHeight: 1.5 },
		a: { color: "lightBlue.600", _hover: { color: "lightBlue.700" } },
	},
};

const components = {
	Button: {
		defaultProps: { colorScheme: "lightBlue", variant: "solid" },
		baseStyle: { borderRadius: "xl", fontWeight: 600 },
	},
	Heading: {
		baseStyle: { color: "blue.900", letterSpacing: "wide" },
	},
	Text: {
		baseStyle: {
			fontFamily:
				"'Cocogoose', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
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
		heading:
			"'Cocogoose', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
		body: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
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
