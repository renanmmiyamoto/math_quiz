import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesCreateInput } from "../../../inputs/ExercisesCreateInput";
import { ExercisesUpdateInput } from "../../../inputs/ExercisesUpdateInput";
import { ExercisesWhereUniqueInput } from "../../../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisesCreateInput, {
    nullable: false
  })
  create!: ExercisesCreateInput;

  @TypeGraphQL.Field(_type => ExercisesUpdateInput, {
    nullable: false
  })
  update!: ExercisesUpdateInput;
}
