import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.InputType("ResultsCreateManyInput", {
  isAbstract: true
})
export class ResultsCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
