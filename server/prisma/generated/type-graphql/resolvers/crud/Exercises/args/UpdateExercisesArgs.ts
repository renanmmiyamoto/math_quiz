import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesUpdateInput } from "../../../inputs/ExercisesUpdateInput";
import { ExercisesWhereUniqueInput } from "../../../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesUpdateInput, {
    nullable: false
  })
  data!: ExercisesUpdateInput;

  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;
}
