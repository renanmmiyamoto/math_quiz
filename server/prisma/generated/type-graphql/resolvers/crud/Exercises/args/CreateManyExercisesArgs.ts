import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesCreateManyInput } from "../../../inputs/ExercisesCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExercisesArgs {
  @TypeGraphQL.Field(_type => [ExercisesCreateManyInput], {
    nullable: false
  })
  data!: ExercisesCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
