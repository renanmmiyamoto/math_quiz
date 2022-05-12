import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateWithoutExercisesInput } from "../inputs/UsersCreateWithoutExercisesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateOrConnectWithoutExercisesInput", {
  isAbstract: true
})
export class UsersCreateOrConnectWithoutExercisesInput {
  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: false
  })
  where!: UsersWhereUniqueInput;

  @TypeGraphQL.Field(_type => UsersCreateWithoutExercisesInput, {
    nullable: false
  })
  create!: UsersCreateWithoutExercisesInput;
}
