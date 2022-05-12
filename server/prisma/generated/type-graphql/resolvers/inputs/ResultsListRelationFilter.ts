import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsWhereInput } from "../inputs/ResultsWhereInput";

@TypeGraphQL.InputType("ResultsListRelationFilter", {
  isAbstract: true
})
export class ResultsListRelationFilter {
  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  every?: ResultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  some?: ResultsWhereInput | undefined;

  @TypeGraphQL.Field(_type => ResultsWhereInput, {
    nullable: true
  })
  none?: ResultsWhereInput | undefined;
}
