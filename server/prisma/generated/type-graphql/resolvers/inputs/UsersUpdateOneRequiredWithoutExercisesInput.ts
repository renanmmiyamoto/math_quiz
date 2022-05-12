import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UsersCreateOrConnectWithoutExercisesInput } from "../inputs/UsersCreateOrConnectWithoutExercisesInput";
import { UsersCreateWithoutExercisesInput } from "../inputs/UsersCreateWithoutExercisesInput";
import { UsersUpdateWithoutExercisesInput } from "../inputs/UsersUpdateWithoutExercisesInput";
import { UsersUpsertWithoutExercisesInput } from "../inputs/UsersUpsertWithoutExercisesInput";
import { UsersWhereUniqueInput } from "../inputs/UsersWhereUniqueInput";

@TypeGraphQL.InputType("UsersUpdateOneRequiredWithoutExercisesInput", {
  isAbstract: true
})
export class UsersUpdateOneRequiredWithoutExercisesInput {
  @TypeGraphQL.Field(_type => UsersCreateWithoutExercisesInput, {
    nullable: true
  })
  create?: UsersCreateWithoutExercisesInput | undefined;

  @TypeGraphQL.Field(_type => UsersCreateOrConnectWithoutExercisesInput, {
    nullable: true
  })
  connectOrCreate?: UsersCreateOrConnectWithoutExercisesInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpsertWithoutExercisesInput, {
    nullable: true
  })
  upsert?: UsersUpsertWithoutExercisesInput | undefined;

  @TypeGraphQL.Field(_type => UsersWhereUniqueInput, {
    nullable: true
  })
  connect?: UsersWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UsersUpdateWithoutExercisesInput, {
    nullable: true
  })
  update?: UsersUpdateWithoutExercisesInput | undefined;
}
