import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsUpdateWithoutExerciseInput } from "../inputs/ResultsUpdateWithoutExerciseInput";
import { ResultsWhereUniqueInput } from "../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.InputType("ResultsUpdateWithWhereUniqueWithoutExerciseInput", {
  isAbstract: true
})
export class ResultsUpdateWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: false
  })
  where!: ResultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResultsUpdateWithoutExerciseInput, {
    nullable: false
  })
  data!: ResultsUpdateWithoutExerciseInput;
}
