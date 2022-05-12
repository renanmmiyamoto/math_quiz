import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsOrderByWithAggregationInput } from "../../../inputs/ResultsOrderByWithAggregationInput";
import { ResultsScalarWhereWithAggregatesInput } from "../../../inputs/ResultsScalarWhereWithAggregatesInput";
import { ResultsWhereInput } from "../../../inputs/ResultsWhereInput";
import { ResultsScalarFieldEnum } from "../../../../enums/ResultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByResultsArgs {
  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  where?: ResultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResultsOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ResultsOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "calculation" | "operation" | "response" | "trueResponse" | "isCorrect" | "duration" | "effort" | "exerciseId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => ResultsScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ResultsScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
