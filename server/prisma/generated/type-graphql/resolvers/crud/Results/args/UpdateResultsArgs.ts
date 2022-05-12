import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsUpdateInput } from "../../../inputs/ResultsUpdateInput";
import { ResultsWhereUniqueInput } from "../../../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateResultsArgs {
  @TypeGraphQL.Field(_type => ResultsUpdateInput, {
    nullable: false
  })
  data!: ResultsUpdateInput;

  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: false
  })
  where!: ResultsWhereUniqueInput;
}
