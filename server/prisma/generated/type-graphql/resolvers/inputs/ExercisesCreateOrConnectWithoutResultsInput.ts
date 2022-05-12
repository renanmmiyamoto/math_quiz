import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateWithoutResultsInput } from "../inputs/ExercisesCreateWithoutResultsInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesCreateOrConnectWithoutResultsInput", {
  isAbstract: true
})
export class ExercisesCreateOrConnectWithoutResultsInput {
  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisesCreateWithoutResultsInput, {
    nullable: false
  })
  create!: ExercisesCreateWithoutResultsInput;
}
