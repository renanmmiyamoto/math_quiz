import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateOrConnectWithoutResultsInput } from "../inputs/ExercisesCreateOrConnectWithoutResultsInput";
import { ExercisesCreateWithoutResultsInput } from "../inputs/ExercisesCreateWithoutResultsInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesCreateNestedOneWithoutResultsInput", {
  isAbstract: true
})
export class ExercisesCreateNestedOneWithoutResultsInput {
  @TypeGraphQL.Field(_type => ExercisesCreateWithoutResultsInput, {
    nullable: true
  })
  create?: ExercisesCreateWithoutResultsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesCreateOrConnectWithoutResultsInput, {
    nullable: true
  })
  connectOrCreate?: ExercisesCreateOrConnectWithoutResultsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: true
  })
  connect?: ExercisesWhereUniqueInput | undefined;
}
