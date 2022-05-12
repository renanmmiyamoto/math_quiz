import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsCreateWithoutExerciseInput } from "../inputs/ResultsCreateWithoutExerciseInput";
import { ResultsWhereUniqueInput } from "../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.InputType("ResultsCreateOrConnectWithoutExerciseInput", {
  isAbstract: true
})
export class ResultsCreateOrConnectWithoutExerciseInput {
  @TypeGraphQL.Field(_type => ResultsWhereUniqueInput, {
    nullable: false
  })
  where!: ResultsWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResultsCreateWithoutExerciseInput, {
    nullable: false
  })
  create!: ResultsCreateWithoutExerciseInput;
}
