import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateManyUserInputEnvelope } from "../inputs/ExercisesCreateManyUserInputEnvelope";
import { ExercisesCreateOrConnectWithoutUserInput } from "../inputs/ExercisesCreateOrConnectWithoutUserInput";
import { ExercisesCreateWithoutUserInput } from "../inputs/ExercisesCreateWithoutUserInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesCreateNestedManyWithoutUserInput", {
  isAbstract: true
})
export class ExercisesCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ExercisesCreateWithoutUserInput], {
    nullable: true
  })
  create?: ExercisesCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ExercisesCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisesCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ExercisesCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereUniqueInput], {
    nullable: true
  })
  connect?: ExercisesWhereUniqueInput[] | undefined;
}
