import React, {
	KeyboardEventHandler,
	useCallback,
	useEffect,
	useState,
} from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

import useCountdown from "@hooks/useCountdown";
import { OPERATIONS, Result } from "@lib/types";

import Header from "@components/Header";
import Progress from "@components/Progress";

const TIMES = 10;

const CREATE_RESULT = gql`
	mutation createResult($data: ResultsCreateInput!) {
		createResults(data: $data) {
			id
			calculation
			operation
			response
			trueResponse
			isCorrect
			duration
			effort
			createdAt
			updatedAt
			exercise {
				id
				user {
					id
					name
					email
					bornDate
					createdAt
				}
			}
		}
	}
`;

const getTrueResult = (
	operation: keyof typeof OPERATIONS,
	number1: number,
	number2: number,
) => {
	switch (operation) {
		case "ADDITION":
			return number1 + number2;
		case "SUBTRACTION":
			return number1 - number2;
		case "MULTIPLICATION":
			return number1 * number2;
		default:
			return number1 / number2;
	}
};

const Home: NextPage = () => {
	const [turn, setTurn] = useState(1);
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState("");

	const [count, { start, reset }] = useCountdown({
		seconds: 0,
		interval: 500,
		isIncrement: true,
	});

	const router = useRouter();

	const operation = router.query.operation as string as keyof typeof OPERATIONS;

	const [createResult] = useMutation<{
		createResults: Result;
	}>(CREATE_RESULT);

	const generateNumbers = useCallback(() => {
		setNumber1(Math.floor(Math.random() * 10) + 1);
		setNumber2(Math.floor(Math.random() * 10) + 1);
	}, []);

	useEffect(() => {
		if (turn <= TIMES) {
			start();
			generateNumbers();
		} else {
			router.push({
				pathname: "/dashboard",
				query: {
					exercise: router.query.exercise,
				},
			});
		}
	}, [turn, generateNumbers, router, start]);

	const handleSubmit = useCallback(() => {
		const trueResult = getTrueResult(operation, number1, number2);

		const isCorrect = Number(result) === trueResult;

		setResult("");
		generateNumbers();

		setTurn(turn + 1);
		reset();

		createResult({
			variables: {
				data: {
					calculation: `${number1} ${OPERATIONS?.[operation]?.symbol} ${number2}`,
					operation: operation.toUpperCase(),
					response: result,
					trueResponse: trueResult.toString(),
					isCorrect,
					duration: count,
					effort: 1,
					exercise: {
						connect: {
							id: router.query.exercise,
						},
					},
				},
			},
		});
	}, [
		result,
		operation,
		router.query,
		count,
		createResult,
		generateNumbers,
		number1,
		number2,
		reset,
		turn,
	]);

	const handleEnterKey: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === "Enter") {
			handleSubmit();
		}
	};

	return (
		<div>
			<Header
				title={OPERATIONS?.[operation]?.label}
				rightContent={
					<Box width={200}>
						<Text color="white" marginBottom={2}>
							{turn} de 10
						</Text>

						<Progress percentage={20} />
					</Box>
				}
			/>

			<Box width="90%" maxW={1196} marginX="auto">
				<Box paddingY={20} paddingX={8} borderRadius="6">
					<Box width={670} marginX="auto">
						<Flex width="100%" alignItems="center" justifyContent="center">
							<Flex alignItems="center" justifyContent="space-between">
								<Text color="white" fontSize="6xl">
									{number1}
								</Text>
								<Text color="white" fontSize="5xl" marginX={8}>
									{OPERATIONS?.[operation]?.symbol}
								</Text>
								<Text color="white" fontSize="6xl">
									{number2}
								</Text>
							</Flex>

							<Text color="white" fontSize="5xl" marginX={20}>
								=
							</Text>

							<Input
								width="auto"
								height="auto"
								fontSize={40}
								textAlign="center"
								paddingX={10}
								paddingY={6}
								border="2px solid #FF7D00"
								borderColor="#FF7D00"
								boxShadow="2px 3px 4px rgba(0, 0, 0, 0.25)"
								color="white"
								_hover={{
									borderColor: "rgba(255, 125, 0, 0.6)",
								}}
								_focus={{
									background: "rgba(255, 255, 255, 0.1)",
									borderColor: "rgba(255, 125, 0, 0.6)",
								}}
								type="number"
								value={result}
								onChange={(e) => setResult(e.target.value)}
								onKeyDown={handleEnterKey}
							/>
						</Flex>

						<Button
							background="#FF7D00"
							width="100%"
							height="auto"
							fontSize={24}
							fontWeight={500}
							color="white"
							_hover={{ backgroundColor: "rgba(255, 125, 0, 0.8)" }}
							boxShadow="2px 3px 4px rgba(0, 0, 0, 0.25)"
							size="lg"
							marginTop={24}
							paddingY={4}
							onClick={handleSubmit}
						>
							PRÓXIMO
						</Button>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default Home;
