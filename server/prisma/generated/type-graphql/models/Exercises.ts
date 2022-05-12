import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Results } from "../models/Results";
import { Users } from "../models/Users";
import { OperationType } from "../enums/OperationType";
import { ExercisesCount } from "../resolvers/outputs/ExercisesCount";

@TypeGraphQL.ObjectType("Exercises", {
  isAbstract: true
})
export class Exercises {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  user?: Users;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => OperationType, {
    nullable: false
  })
  operation!: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION";

  results?: Results[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ExercisesCount, {
    nullable: true
  })
  _count?: ExercisesCount | null;
}
