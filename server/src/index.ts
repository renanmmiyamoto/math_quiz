import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import path from "path";
import { buildSchema } from "type-graphql";
import { resolvers } from "../prisma/generated/type-graphql";

import prisma from "./db";

async function main() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  const { url } = await server.listen();

  console.log(`🚀 Server running on ${url}`);
}

main();
