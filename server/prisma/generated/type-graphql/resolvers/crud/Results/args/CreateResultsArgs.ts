import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsCreateInput } from "../../../inputs/ResultsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateResultsArgs {
  @TypeGraphQL.Field(_type => ResultsCreateInput, {
    nullable: false
  })
  data!: ResultsCreateInput;
}
