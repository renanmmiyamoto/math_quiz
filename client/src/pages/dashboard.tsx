import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import {
	Box,
	Button,
	Flex,
	Heading,
	List,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";

import { Exercise, OPERATIONS, Result } from "@lib/types";

import Header from "@components/Header";

interface Results extends Exercise {
	results: Result[];
}

export const GET_RESULTS = gql`
	query findUniqueExercises($where: ExercisesWhereUniqueInput!) {
		findUniqueExercises(where: $where) {
			id
			userId
			operation
			createdAt
			updatedAt
			_count {
				results
			}
			results {
				id
				calculation
				operation
				response
				trueResponse
				isCorrect
				duration
				effort
				exerciseId
				createdAt
				updatedAt
			}
		}
	}
`;

const Dashboard: NextPage = () => {
	const router = useRouter();

	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [wrongAnswers, setWrongAnswers] = useState(0);
	const [averageDuration, setAverageDuration] = useState(0);
	const [bestTime, setBestTime] = useState(0);
	const [worstTime, setWorstTime] = useState(0);

	const { data, loading } = useQuery<{ findUniqueExercises: Results }>(
		GET_RESULTS,
		{
			variables: {
				where: {
					id: router.query.exercise,
				},
			},
		},
	);

	useEffect(() => {
		if (!data) return;

		const { results } = data.findUniqueExercises;

		setCorrectAnswers(results.reduce((p, c) => p + (c.isCorrect ? 1 : 0), 0));
		setWrongAnswers(results.reduce((p, c) => p + (c.isCorrect ? 0 : 1), 0));
		setAverageDuration(results.reduce((p, c) => p + c.duration, 0) / 10);
		const durations = results.map((r) => r.duration);
		setBestTime(Math.min(...durations));
		setWorstTime(Math.max(...durations));
	}, [data]);

	if (loading) return <p>Loading...</p>;

	return (
		<div>
			<Header title="Dashboard" />

			<Box width="70%" maxW={800} marginX="auto" marginBottom={24}>
				<Heading as="h2" width="100%" color="white" textAlign="center">
					{OPERATIONS[data?.findUniqueExercises.operation || "ADDITION"]?.label}
				</Heading>

				<Tabs
					colorScheme="orange.400"
					color="white"
					size="lg"
					marginTop={7}
					isLazy
				>
					<TabList>
						<Tab _selected={{ color: "#FF7D00", borderColor: "#FF7D00" }}>
							Gabarito
						</Tab>
						<Tab _selected={{ color: "#FF7D00", borderColor: "#FF7D00" }}>
							Conclusões
						</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Flex
								width="100%"
								justifyContent="space-between"
								paddingY={5}
								paddingX={10}
							>
								<Text minW="90px" fontSize={20} color="white">
									Cálculo
								</Text>
								<Text width="90px" fontSize={20} color="white">
									Resposta
								</Text>
								<Text width="90px" fontSize={20} color="white">
									Gabarito
								</Text>
								<Text width="90px" fontSize={20} color="white">
									Avaliação
								</Text>
								<Text
									width="90px"
									fontSize={20}
									color="white"
									textAlign="right"
								>
									Duração
								</Text>
							</Flex>

							<List>
								{data?.findUniqueExercises.results.map((result, i) => (
									<ListItem
										key={result.id}
										bg={i % 2 === 0 ? "rgba(255, 125, 0, 0.5)" : ""}
										paddingY={3}
										paddingX={10}
									>
										<Flex width="100%" justifyContent="space-between">
											<Text minW="90px" fontSize={20} color="white">
												{result.calculation}
											</Text>
											<Text width="90px" fontSize={20} color="white">
												{result.response}
											</Text>
											<Text width="90px" fontSize={20} color="white">
												{result.trueResponse}
											</Text>
											<Text width="90px" fontSize={20} color="white">
												{result.isCorrect ? "Certo" : "Errado"}
											</Text>
											<Text
												width="90px"
												fontSize={20}
												color="white"
												textAlign="right"
											>
												{result.duration}s
											</Text>
										</Flex>
									</ListItem>
								))}
							</List>
						</TabPanel>

						<TabPanel>
							<List paddingY={5}>
								<ListItem
									bg="rgba(255, 125, 0, 0.5)"
									paddingY={3}
									paddingX={10}
								>
									<Flex width="100%" justifyContent="space-between">
										<Text fontSize={20} color="white">
											Corretas
										</Text>
										<Text fontSize={20} color="white">
											{correctAnswers}
										</Text>
									</Flex>
								</ListItem>

								<ListItem paddingY={3} paddingX={10}>
									<Flex width="100%" justifyContent="space-between">
										<Text fontSize={20} color="white">
											Erradas
										</Text>
										<Text fontSize={20} color="white">
											{wrongAnswers}
										</Text>
									</Flex>
								</ListItem>

								<ListItem
									bg="rgba(255, 125, 0, 0.5)"
									paddingY={3}
									paddingX={10}
								>
									<Flex width="100%" justifyContent="space-between">
										<Text fontSize={20} color="white">
											Duração média
										</Text>
										<Text fontSize={20} color="white">
											{averageDuration}s
										</Text>
									</Flex>
								</ListItem>

								<ListItem paddingY={3} paddingX={10}>
									<Flex width="100%" justifyContent="space-between">
										<Text fontSize={20} color="white">
											Duração média esperada
										</Text>
										<Text fontSize={20} color="white">
											2s
										</Text>
									</Flex>
								</ListItem>

								<ListItem
									bg="rgba(255, 125, 0, 0.5)"
									paddingY={3}
									paddingX={10}
								>
									<Flex width="100%" justifyContent="space-between">
										<Text fontSize={20} color="white">
											Melhor tempo
										</Text>
										<Text fontSize={20} color="white">
											{bestTime}s
										</Text>
									</Flex>
								</ListItem>

								<ListItem>
									<Flex
										width="100%"
										justifyContent="space-between"
										paddingY={3}
										paddingX={10}
									>
										<Text fontSize={20} color="white">
											Pior tempo
										</Text>
										<Text fontSize={20} color="white">
											{worstTime}s
										</Text>
									</Flex>
								</ListItem>
							</List>
						</TabPanel>
					</TabPanels>
				</Tabs>

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
					onClick={() =>
						router.push({
							pathname: "/",
						})
					}
				>
					Escolher próximo exercício
				</Button>
			</Box>
		</div>
	);
};

export default Dashboard;
