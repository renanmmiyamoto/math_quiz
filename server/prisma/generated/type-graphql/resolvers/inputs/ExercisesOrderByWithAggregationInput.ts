import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCountOrderByAggregateInput } from "../inputs/ExercisesCountOrderByAggregateInput";
import { ExercisesMaxOrderByAggregateInput } from "../inputs/ExercisesMaxOrderByAggregateInput";
import { ExercisesMinOrderByAggregateInput } from "../inputs/ExercisesMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExercisesOrderByWithAggregationInput", {
  isAbstract: true
})
export class ExercisesOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  operation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExercisesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExercisesCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExercisesMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExercisesMinOrderByAggregateInput | undefined;
}
