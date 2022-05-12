import React, { useCallback } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";

import { Exercise, OPERATIONS } from "@lib/types";

import Header from "@components/Header";
import OperationCard from "@components/OperationCard";

const CREATE_EXERCISE = gql`
	mutation createExercise($data: ExercisesCreateInput!) {
		createExercises(data: $data) {
			id
			operation
			user {
				id
				name
				email
			}
		}
	}
`;

const Home: NextPage = () => {
	const [createExercisesMutation, { loading }] = useMutation<{
		createExercises: Exercise;
	}>(CREATE_EXERCISE, {
		onCompleted: ({ createExercises }) =>
			router.push({
				pathname: "/exercise",
				query: {
					exercise: createExercises.id,
					operation: createExercises.operation,
				},
			}),
	});

	const router = useRouter();

	const handleCallback = useCallback(
		(operation: keyof typeof OPERATIONS) => {
			createExercisesMutation({
				variables: {
					data: {
						user: {
							connect: {
								email: "renanmmiyamoto@gmail.com",
							},
						},
						operation: operation.toUpperCase(),
					},
				},
			});
		},
		[createExercisesMutation],
	);

	if (loading) return <p>Loading...</p>;

	return (
		<>
			<Header title="Escolha uma operação" />

			<Box width="90%" maxW={1196} marginX="auto">
				<Flex justifyContent="space-between" wrap="wrap" px={24}>
					<OperationCard
						title="Adição"
						callback={() => handleCallback("ADDITION")}
					/>

					<OperationCard
						title="Subtração"
						callback={() => handleCallback("SUBTRACTION")}
					/>

					<OperationCard
						title="Multiplicação"
						callback={() => handleCallback("MULTIPLICATION")}
					/>

					<OperationCard
						title="Divisão"
						callback={() => handleCallback("DIVISION")}
					/>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
