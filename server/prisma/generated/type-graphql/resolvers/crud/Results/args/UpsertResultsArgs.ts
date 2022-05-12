import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsCreateInput } from "../../../inputs/ResultsCreateInput";
import { ResultsUpdateInput } from "../../../inputs/ResultsUpdateInput";
import { ResultsWhereUniqueInput } from "../../../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertResultsArgs {
  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: false
  })
  where!: ResultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResultsCreateInput, {
    nullable: false
  })
  create!: ResultsCreateInput;

  @TypeGraphQL.Field(_type => ResultsUpdateInput, {
    nullable: false
  })
  update!: ResultsUpdateInput;
}
