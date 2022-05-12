import React from "react";
import { Box } from "@chakra-ui/react";

interface ProgressProps {
	percentage: number;
}

const Progress: React.FC<ProgressProps> = ({ percentage }) => (
	<Box bg="rgba(255, 125, 0, 0.4)" width="100%" height={2} borderRadius={7}>
		<Box
			bg="#FF7D00"
			width={`${percentage}%`}
			height={2}
			borderRadius={7}
			transition="ease-in-out .3s"
		/>
	</Box>
);

export default Progress;
