import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesOrderByWithAggregationInput } from "../../../inputs/ExercisesOrderByWithAggregationInput";
import { ExercisesScalarWhereWithAggregatesInput } from "../../../inputs/ExercisesScalarWhereWithAggregatesInput";
import { ExercisesWhereInput } from "../../../inputs/ExercisesWhereInput";
import { ExercisesScalarFieldEnum } from "../../../../enums/ExercisesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  where?: ExercisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExercisesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ExercisesOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "userId" | "operation" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ExercisesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ExercisesScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
