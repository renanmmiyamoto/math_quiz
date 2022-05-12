import React from "react";
import Link from "next/link";
import {
	Box,
	Flex,
	Heading,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";

import { LogoIcon, MenuIcon } from "../icons";

interface HeaderProps {
	title?: string;
	rightContent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, rightContent }) => (
	<Box width="100%" marginBottom={20}>
		<Flex
			justifyContent="space-between"
			width="100%"
			padding={6}
			marginBottom={8}
		>
			<Link href="/">
				<Heading as="h1" cursor="pointer">
					<LogoIcon />
				</Heading>
			</Link>

			<Menu>
				<MenuButton
					as={IconButton}
					aria-label="Options"
					color="white"
					icon={<MenuIcon size={48} />}
					variant="transparent"
				/>
				<MenuList>
					<MenuItem command="⌘T">New Tab</MenuItem>
				</MenuList>
			</Menu>
		</Flex>

		<Box width="90%" maxW={1196} marginX="auto">
			<Flex
				width="100%"
				justifyContent="space-between"
				paddingY={5}
				paddingX={8}
				borderBottom="2px solid #FF7D00"
			>
				<Heading as="h2" fontSize={28} color="white" fontWeight="regular">
					{title}
				</Heading>

				{rightContent}
			</Flex>
		</Box>
	</Box>
);

export default Header;
