import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsCreateManyInput } from "../../../inputs/ResultsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyResultsArgs {
  @TypeGraphQL.Field(_type => [ResultsCreateManyInput], {
    nullable: false
  })
  data!: ResultsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
