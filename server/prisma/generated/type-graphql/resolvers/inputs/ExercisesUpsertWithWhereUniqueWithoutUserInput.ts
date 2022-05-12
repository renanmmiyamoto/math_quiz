import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateWithoutUserInput } from "../inputs/ExercisesCreateWithoutUserInput";
import { ExercisesUpdateWithoutUserInput } from "../inputs/ExercisesUpdateWithoutUserInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ExercisesUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisesUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ExercisesUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ExercisesCreateWithoutUserInput, {
    nullable: false
  })
  create!: ExercisesCreateWithoutUserInput;
}
