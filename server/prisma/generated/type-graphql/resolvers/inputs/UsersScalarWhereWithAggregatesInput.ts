import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("UsersScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class UsersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UsersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: UsersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  bornDate?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
