import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsAvgOrderByAggregateInput } from "../inputs/ResultsAvgOrderByAggregateInput";
import { ResultsCountOrderByAggregateInput } from "../inputs/ResultsCountOrderByAggregateInput";
import { ResultsMaxOrderByAggregateInput } from "../inputs/ResultsMaxOrderByAggregateInput";
import { ResultsMinOrderByAggregateInput } from "../inputs/ResultsMinOrderByAggregateInput";
import { ResultsSumOrderByAggregateInput } from "../inputs/ResultsSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ResultsOrderByWithAggregationInput", {
  isAbstract: true
})
export class ResultsOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  calculation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  operation?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  response?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trueResponse?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isCorrect?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  duration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  effort?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  exerciseId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ResultsCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ResultsCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResultsAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ResultsAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResultsMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ResultsMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResultsMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ResultsMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResultsSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ResultsSumOrderByAggregateInput | undefined;
}
