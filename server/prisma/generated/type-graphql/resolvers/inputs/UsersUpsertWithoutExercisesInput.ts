import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutExercisesInput } from "../inputs/UsersCreateWithoutExercisesInput";
import { UsersUpdateWithoutExercisesInput } from "../inputs/UsersUpdateWithoutExercisesInput";

@TypeGraphQL.InputType("UsersUpsertWithoutExercisesInput", {
  isAbstract: true
})
export class UsersUpsertWithoutExercisesInput {
  @TypeGraphQL.Field(_type => UsersUpdateWithoutExercisesInput, {
    nullable: false
  })
  update!: UsersUpdateWithoutExercisesInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutExercisesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutExercisesInput;
}
