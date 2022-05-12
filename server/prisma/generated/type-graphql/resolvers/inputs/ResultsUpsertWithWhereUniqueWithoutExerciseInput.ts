import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsCreateWithoutExerciseInput } from "../inputs/ResultsCreateWithoutExerciseInput";
import { ResultsUpdateWithoutExerciseInput } from "../inputs/ResultsUpdateWithoutExerciseInput";
import { ResultsWhereUniqueInput } from "../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.InputType("ResultsUpsertWithWhereUniqueWithoutExerciseInput", {
  isAbstract: true
})
export class ResultsUpsertWithWhereUniqueWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: false
  })
  where!: ResultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResultsUpdateWithoutExerciseInput, {
    nullable: false
  })
  update!: ResultsUpdateWithoutExerciseInput;

  @TypeGraphQL.Field(_type => ResultsCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: ResultsCreateWithoutExerciseInput;
}
