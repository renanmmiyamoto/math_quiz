import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesWhereUniqueInput } from "../../../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;
}
