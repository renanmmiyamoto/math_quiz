import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsCreateManyExerciseInputEnvelope } from "../inputs/ResultsCreateManyExerciseInputEnvelope";
import { ResultsCreateOrConnectWithoutExerciseInput } from "../inputs/ResultsCreateOrConnectWithoutExerciseInput";
import { ResultsCreateWithoutExerciseInput } from "../inputs/ResultsCreateWithoutExerciseInput";
import { ResultsScalarWhereInput } from "../inputs/ResultsScalarWhereInput";
import { ResultsUpdateManyWithWhereWithoutExerciseInput } from "../inputs/ResultsUpdateManyWithWhereWithoutExerciseInput";
import { ResultsUpdateWithWhereUniqueWithoutExerciseInput } from "../inputs/ResultsUpdateWithWhereUniqueWithoutExerciseInput";
import { ResultsUpsertWithWhereUniqueWithoutExerciseInput } from "../inputs/ResultsUpsertWithWhereUniqueWithoutExerciseInput";
import { ResultsWhereUniqueInput } from "../inputs/ResultsWhereUniqueInput";

@TypeGraphQL.InputType("ResultsUpdateManyWithoutExerciseInput", {
  isAbstract: true
})
export class ResultsUpdateManyWithoutExerciseInput {
  @TypeGraphQL.Field(_type => [ResultsCreateWithoutExerciseInput], {
    nullable: true
  })
  create?: ResultsCreateWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsCreateOrConnectWithoutExerciseInput], {
    nullable: true
  })
  connectOrCreate?: ResultsCreateOrConnectWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsUpsertWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  upsert?: ResultsUpsertWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => ResultsCreateManyExerciseInputEnvelope, {
    nullable: true
  })
  createMany?: ResultsCreateManyExerciseInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereUniqueInput], {
    nullable: true
  })
  set?: ResultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ResultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereUniqueInput], {
    nullable: true
  })
  delete?: ResultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereUniqueInput], {
    nullable: true
  })
  connect?: ResultsWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsUpdateWithWhereUniqueWithoutExerciseInput], {
    nullable: true
  })
  update?: ResultsUpdateWithWhereUniqueWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsUpdateManyWithWhereWithoutExerciseInput], {
    nullable: true
  })
  updateMany?: ResultsUpdateManyWithWhereWithoutExerciseInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ResultsScalarWhereInput[] | undefined;
}
