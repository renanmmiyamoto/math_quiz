import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exercises } from "../models/Exercises";
import { OperationType } from "../enums/OperationType";

@TypeGraphQL.ObjectType("Results", {
  isAbstract: true
})
export class Results {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  calculation!: string;

  @TypeGraphQL.Field(_type => OperationType, {
    nullable: false
  })
  operation!: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  response!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  trueResponse!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCorrect!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  duration!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  effort!: number;

  exercise?: Exercises | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
