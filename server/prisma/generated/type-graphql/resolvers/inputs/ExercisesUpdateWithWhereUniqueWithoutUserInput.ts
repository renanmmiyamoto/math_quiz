import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesUpdateWithoutUserInput } from "../inputs/ExercisesUpdateWithoutUserInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true
})
export class ExercisesUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisesUpdateWithoutUserInput, {
    nullable: false
  })
  data!: ExercisesUpdateWithoutUserInput;
}
