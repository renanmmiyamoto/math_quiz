import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesCreateInput } from "../../../inputs/ExercisesCreateInput";

@TypeGraphQL.ArgsType()
export class CreateExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesCreateInput, {
    nullable: false
  })
  data!: ExercisesCreateInput;
}
