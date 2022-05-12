import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesWhereInput } from "../../../inputs/ExercisesWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  where?: ExercisesWhereInput | undefined;
}
