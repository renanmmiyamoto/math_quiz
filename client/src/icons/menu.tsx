import { Theme } from "@chakra-ui/react";

interface Props {
	size?: number;
	fill?: Theme["colors"];
}

export const MenuIcon = ({ size = 24 }: Props) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width={size} fill="currentColor">
		<path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z" />
	</svg>
);
