import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesUpdateManyMutationInput } from "../../../inputs/ExercisesUpdateManyMutationInput";
import { ExercisesWhereInput } from "../../../inputs/ExercisesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExercisesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  where?: ExercisesWhereInput | undefined;
}
