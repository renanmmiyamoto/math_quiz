import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsCreateManyExerciseInputEnvelope } from "../inputs/ResultsCreateManyExerciseInputEnvelope";
import { ResultsCreateOrConnectWithoutExerciseInput } from "../inputs/ResultsCreateOrConnectWithoutExerciseInput";
import { ResultsCreateWithoutExerciseInput } from "../inputs/ResultsCreateWithoutExerciseInput";
import { ResultsWhereUniqueInput } from "../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.InputType("ResultsCreateNestedManyWithoutExerciseInput", {
  isAbstract: true
})
export class ResultsCreateNestedManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [ResultsCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: ResultsCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: ResultsCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => ResultsCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: ResultsCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereUniqueInput], {
    nullable: true
  })
  connect?: ResultsWhereUniqueInput[] | undefined;
}
