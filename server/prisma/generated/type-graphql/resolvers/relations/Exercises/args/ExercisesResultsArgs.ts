import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsOrderByWithRelationInput } from "../../../inputs/ResultsOrderByWithRelationInput";
import { ResultsWhereInput } from "../../../inputs/ResultsWhereInput";
import { ResultsWhereUniqueInput } from "../../../inputs/ResultsWhereUniqueInput";
import { ResultsScalarFieldEnum } from "../../../../enums/ResultsScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class ExercisesResultsArgs {
  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  where?: ResultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResultsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ResultsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ResultsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ResultsScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "calculation" | "operation" | "response" | "trueResponse" | "isCorrect" | "duration" | "effort" | "exerciseId" | "createdAt" | "updatedAt"> | undefined;
}
