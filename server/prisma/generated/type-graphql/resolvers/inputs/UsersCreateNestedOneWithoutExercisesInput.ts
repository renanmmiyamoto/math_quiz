import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutExercisesInput } from "../inputs/UsersCreateOrConnectWithoutExercisesInput";
import { UsersCreateWithoutExercisesInput } from "../inputs/UsersCreateWithoutExercisesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersCreateNestedOneWithoutExercisesInput", {
  isAbstract: true
})
export class UsersCreateNestedOneWithoutExercisesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutExercisesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutExercisesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutExercisesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutExercisesInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;
}
