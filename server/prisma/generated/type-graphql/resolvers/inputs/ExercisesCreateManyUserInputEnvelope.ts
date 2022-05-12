import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateManyUserInput } from "../inputs/ExercisesCreateManyUserInput";

@TypeGraphQL.InputType("ExercisesCreateManyUserInputEnvelope", {
  isAbstract: true
})
export class ExercisesCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ExercisesCreateManyUserInput], {
    nullable: false
  })
  data!: ExercisesCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
