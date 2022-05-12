import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.ObjectType("ResultsMaxAggregate", {
  isAbstract: true
})
export class ResultsMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  calculation!: string | null;

  @TypeGraphQL.Field(_type => OperationType, {
    nullable: true
  })
  operation!: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION" | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  response!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  trueResponse!: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isCorrect!: boolean | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  duration!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  effort!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
