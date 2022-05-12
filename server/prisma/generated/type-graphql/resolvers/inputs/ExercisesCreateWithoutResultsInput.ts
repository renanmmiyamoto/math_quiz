import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateNestedOneWithoutExercisesInput } from "../inputs/UsersCreateNestedOneWithoutExercisesInput";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.InputType("ExercisesCreateWithoutResultsInput", {
  isAbstract: true
})
export class ExercisesCreateWithoutResultsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => UsersCreateNestedOneWithoutExercisesInput, {
    nullable: false
  })
  user!: UsersCreateNestedOneWithoutExercisesInput;

  @TypeGraphQL.Field(_type => OperationType, {
    nullable: false
  })
  operation!: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION";

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
