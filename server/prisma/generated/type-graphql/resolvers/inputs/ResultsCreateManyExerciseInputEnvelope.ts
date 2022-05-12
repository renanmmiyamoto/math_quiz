import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsCreateManyExerciseInput } from "../inputs/ResultsCreateManyExerciseInput";

@TypeGraphQL.InputType("ResultsCreateManyExerciseInputEnvelope", {
  isAbstract: true
})
export class ResultsCreateManyExerciseInputEnvelope {
  @TypeGraphQL.Field(_type => [ResultsCreateManyExerciseInput], {
    nullable: false
  })
  data!: ResultsCreateManyExerciseInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
