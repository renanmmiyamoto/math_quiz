import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResultsUpdateManyMutationInput } from "../../../inputs/ResultsUpdateManyMutationInput";
import { ResultsWhereInput } from "../../../inputs/ResultsWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyResultsArgs {
  @TypeGraphQL.Field(_type => ResultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResultsUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  where?: ResultsWhereInput | undefined;
}
