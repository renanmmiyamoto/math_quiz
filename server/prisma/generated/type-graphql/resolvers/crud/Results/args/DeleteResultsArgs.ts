import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsWhereUniqueInput } from "../../../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteResultsArgs {
  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: false
  })
  where!: ResultsWhereUniqueInput;
}
