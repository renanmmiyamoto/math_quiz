import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumOperationTypeFilter } from "../inputs/EnumOperationTypeFilter";
import { ResultsListRelationFilter } from "../inputs/ResultsListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UsersRelationFilter } from "../inputs/UsersRelationFilter";

@TypeGraphQL.InputType("ExercisesWhereInput", {
  isAbstract: true
})
export class ExercisesWhereInput {
  @TypeGraphQL.Field(_type => [ExercisesWhereInput], {
    nullable: true
  })
  AND?: ExercisesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereInput], {
    nullable: true
  })
  OR?: ExercisesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExercisesWhereInput], {
    nullable: true
  })
  NOT?: ExercisesWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => UsersRelationFilter, {
    nullable: true
  })
  user?: UsersRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumOperationTypeFilter, {
    nullable: true
  })
  operation?: EnumOperationTypeFilter | undefined;

  @TypeGraphQL.Field(_type => ResultsListRelationFilter, {
    nullable: true
  })
  results?: ResultsListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
