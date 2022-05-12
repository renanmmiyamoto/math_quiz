import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				background: "primary.100",
			},
			"*": {
				boxSizing: "border-box",
			},
		},
	},
	fonts: {
		body: "'Fredoka', sans-serif",
		heading: "'Fredoka', sans-serif",
	},
	colors: {
		primary: {
			100: "#001524",
		},
		orange: {
			400: "#FF7D00",
		},
	},
	colorScheme: {
		orange: "#FF7D00",
	},
});
