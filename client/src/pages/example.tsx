import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import moment from "moment";

import { NewUserForm } from "@components/NewUserForm";

type User = {
	id: string;
	name: string;
	email: string;
	bornDate: string;
};

export const GET_USERS = gql`
	query {
		findManyUsers {
			id
			name
			email
			bornDate
		}
	}
`;

const Home: NextPage = () => {
	const { data, loading } = useQuery<{ findManyUsers: User[] }>(GET_USERS);
	console.log({ data });

	// if (loading) return <p>Loading...</p>;

	return (
		<div>
			<h1>Users</h1>

			<NewUserForm />

			<ul>
				{data?.findManyUsers.map((user) => (
					<li key={user.id}>
						{user.name} - {user.email} -{" "}
						{moment(user.bornDate).parseZone().format("DD MMM YYYY")}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
