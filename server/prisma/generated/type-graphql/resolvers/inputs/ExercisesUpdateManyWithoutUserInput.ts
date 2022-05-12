import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateManyUserInputEnvelope } from "../inputs/ExercisesCreateManyUserInputEnvelope";
import { ExercisesCreateOrConnectWithoutUserInput } from "../inputs/ExercisesCreateOrConnectWithoutUserInput";
import { ExercisesCreateWithoutUserInput } from "../inputs/ExercisesCreateWithoutUserInput";
import { ExercisesScalarWhereInput } from "../inputs/ExercisesScalarWhereInput";
import { ExercisesUpdateManyWithWhereWithoutUserInput } from "../inputs/ExercisesUpdateManyWithWhereWithoutUserInput";
import { ExercisesUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ExercisesUpdateWithWhereUniqueWithoutUserInput";
import { ExercisesUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ExercisesUpsertWithWhereUniqueWithoutUserInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesUpdateManyWithoutUserInput", {
  isAbstract: true
})
export class ExercisesUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ExercisesCreateWithoutUserInput], {
    nullable: true
  })
  create?: ExercisesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ExercisesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ExercisesUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ExercisesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereUniqueInput], {
    nullable: true
  })
  set?: ExercisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExercisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereUniqueInput], {
    nullable: true
  })
  delete?: ExercisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereUniqueInput], {
    nullable: true
  })
  connect?: ExercisesWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ExercisesUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ExercisesUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExercisesScalarWhereInput[] | undefined;
}
