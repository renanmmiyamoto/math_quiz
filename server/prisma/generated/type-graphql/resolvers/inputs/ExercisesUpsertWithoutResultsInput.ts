import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateWithoutResultsInput } from "../inputs/ExercisesCreateWithoutResultsInput";
import { ExercisesUpdateWithoutResultsInput } from "../inputs/ExercisesUpdateWithoutResultsInput";

@TypeGraphQL.InputType("ExercisesUpsertWithoutResultsInput", {
  isAbstract: true
})
export class ExercisesUpsertWithoutResultsInput {
  @TypeGraphQL.Field(_type => ExercisesUpdateWithoutResultsInput, {
    nullable: false
  })
  update!: ExercisesUpdateWithoutResultsInput;

  @TypeGraphQL.Field(_type => ExercisesCreateWithoutResultsInput, {
    nullable: false
  })
  create!: ExercisesCreateWithoutResultsInput;
}
