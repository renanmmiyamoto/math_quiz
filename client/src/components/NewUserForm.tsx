import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { client } from "../lib/apollo";
import { GET_USERS } from "../pages";

const CREATE_USER = gql`
	mutation ($data: UsersCreateInput!) {
		createUsers(data: $data) {
			id
			name
			email
			bornDate
			createdAt
			updatedAt
		}
	}
`;

export function NewUserForm() {
	const [name, setName] = useState("");

	const [createUser] = useMutation(CREATE_USER);

	async function handleCreateUser(event: FormEvent) {
		event.preventDefault();

		if (!name) return;

		await createUser({
			variables: {
				name,
			},
			// update the apollo cache mannualy to doesn't take another request
			update: (cache, { data: { createUser } }) => {
				const { users } = client.readQuery({ query: GET_USERS });

				cache.writeQuery({
					query: GET_USERS,
					data: {
						users: [...users, createUser],
					},
				});
			},
			// get another request on server
			// refetchQueries: [GET_USERS],
		});
	}

	return (
		<form onSubmit={handleCreateUser}>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<button type="submit">Send</button>
		</form>
	);
}
