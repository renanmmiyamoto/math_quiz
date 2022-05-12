import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesScalarWhereInput } from "../inputs/ExercisesScalarWhereInput";
import { ExercisesUpdateManyMutationInput } from "../inputs/ExercisesUpdateManyMutationInput";

@TypeGraphQL.InputType("ExercisesUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true
})
export class ExercisesUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field(_type => ExercisesScalarWhereInput, {
    nullable: false
  })
  where!: ExercisesScalarWhereInput;

  @TypeGraphQL.Field(_type => ExercisesUpdateManyMutationInput, {
    nullable: false
  })
  data!: ExercisesUpdateManyMutationInput;
}
