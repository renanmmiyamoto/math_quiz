import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumOperationTypeFieldUpdateOperationsInput } from "../inputs/EnumOperationTypeFieldUpdateOperationsInput";
import { ResultsUpdateManyWithoutExerciseInput } from "../inputs/ResultsUpdateManyWithoutExerciseInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ExercisesUpdateWithoutUserInput", {
  isAbstract: true
})
export class ExercisesUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumOperationTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  operation?: EnumOperationTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ResultsUpdateManyWithoutExerciseInput, {
    nullable: true
  })
  results?: ResultsUpdateManyWithoutExerciseInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
