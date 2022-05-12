import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumOperationTypeFilter } from "../inputs/EnumOperationTypeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ExercisesScalarWhereInput", {
  isAbstract: true
})
export class ExercisesScalarWhereInput {
  @TypeGraphQL.Field(_type => [ExercisesScalarWhereInput], {
    nullable: true
  })
  AND?: ExercisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarWhereInput], {
    nullable: true
  })
  OR?: ExercisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarWhereInput], {
    nullable: true
  })
  NOT?: ExercisesScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumOperationTypeFilter, {
    nullable: true
  })
  operation?: EnumOperationTypeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
