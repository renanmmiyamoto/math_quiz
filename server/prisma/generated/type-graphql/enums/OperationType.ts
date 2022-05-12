import * as TypeGraphQL from "type-graphql";

export enum OperationType {
  ADDITION = "ADDITION",
  SUBTRACTION = "SUBTRACTION",
  MULTIPLICATION = "MULTIPLICATION",
  DIVISION = "DIVISION",
  EXPONENTIATION = "EXPONENTIATION",
  ROOTING = "ROOTING",
  EQUATION = "EQUATION"
}
TypeGraphQL.registerEnumType(OperationType, {
  name: "OperationType",
  description: undefined,
});
