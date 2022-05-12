import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsWhereInput } from "../../../inputs/ResultsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyResultsArgs {
  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  where?: ResultsWhereInput | undefined;
}
