import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface Props {
	title: "Adição" | "Subtração" | "Multiplicação" | "Divisão";
	callback?: () => void;
}

const OperationCard: React.FC<Props> = ({ title, callback }) => (
	<Box
		width="calc(50% - 12px)"
		border="2px solid #FF7D00"
		paddingY={16}
		textAlign="center"
		marginBottom={6}
		borderRadius={7}
		cursor="pointer"
		transition="0.3s"
		_hover={{
			background: "rgba(255, 255, 255, 0.1)",
		}}
		onClick={callback}
	>
		<Text fontSize={30} color="white" fontWeight={500}>
			{title}
		</Text>
	</Box>
);

export default OperationCard;
