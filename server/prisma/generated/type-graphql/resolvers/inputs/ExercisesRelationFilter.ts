import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesWhereInput } from "../inputs/ExercisesWhereInput";

@TypeGraphQL.InputType("ExercisesRelationFilter", {
  isAbstract: true
})
export class ExercisesRelationFilter {
  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  is?: ExercisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  isNot?: ExercisesWhereInput | undefined;
}
