import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumOperationTypeWithAggregatesFilter } from "../inputs/EnumOperationTypeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ExercisesScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ExercisesScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ExercisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ExercisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ExercisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ExercisesScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumOperationTypeWithAggregatesFilter, {
    nullable: true
  })
  operation?: EnumOperationTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
