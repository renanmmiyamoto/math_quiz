import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsScalarWhereInput } from "../inputs/ResultsScalarWhereInput";
import { ResultsUpdateManyMutationInput } from "../inputs/ResultsUpdateManyMutationInput";

@TypeGraphQL.InputType("ResultsUpdateManyWithWhereWithoutExerciseInput", {
  isAbstract: true
})
export class ResultsUpdateManyWithWhereWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ResultsScalarWhereInput, {
    nullable: false
  })
  where!: ResultsScalarWhereInput;

  @TypeGraphQL.Field(_type => ResultsUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResultsUpdateManyMutationInput;
}
