import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumOperationTypeFilter } from "../inputs/EnumOperationTypeFilter";
import { ExercisesRelationFilter } from "../inputs/ExercisesRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ResultsWhereInput", {
  isAbstract: true
})
export class ResultsWhereInput {
  @TypeGraphQL.Field(_type => [ResultsWhereInput], {
    nullable: true
  })
  AND?: ResultsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereInput], {
    nullable: true
  })
  OR?: ResultsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResultsWhereInput], {
    nullable: true
  })
  NOT?: ResultsWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  calculation?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumOperationTypeFilter, {
    nullable: true
  })
  operation?: EnumOperationTypeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  response?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  trueResponse?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isCorrect?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  duration?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  effort?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => ExercisesRelationFilter, {
    nullable: true
  })
  exercise?: ExercisesRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  exerciseId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
