import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesWhereInput } from "../inputs/ExercisesWhereInput";

@TypeGraphQL.InputType("ExercisesListRelationFilter", {
  isAbstract: true
})
export class ExercisesListRelationFilter {
  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  every?: ExercisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  some?: ExercisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  none?: ExercisesWhereInput | undefined;
}
