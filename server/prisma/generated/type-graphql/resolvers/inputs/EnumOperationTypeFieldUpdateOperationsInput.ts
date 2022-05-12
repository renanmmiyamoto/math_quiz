import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.InputType("EnumOperationTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumOperationTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => OperationType, {
    nullable: true
  })
  set?: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION" | undefined;
}
