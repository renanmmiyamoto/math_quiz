import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateWithoutUserInput } from "../inputs/ExercisesCreateWithoutUserInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesCreateOrConnectWithoutUserInput", {
  isAbstract: true
})
export class ExercisesCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: false
  })
  where!: ExercisesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExercisesCreateWithoutUserInput, {
    nullable: false
  })
  create!: ExercisesCreateWithoutUserInput;
}
