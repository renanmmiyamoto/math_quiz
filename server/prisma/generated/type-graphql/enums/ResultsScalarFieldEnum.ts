import * as TypeGraphQL from "type-graphql";

export enum ResultsScalarFieldEnum {
  id = "id",
  calculation = "calculation",
  operation = "operation",
  response = "response",
  trueResponse = "trueResponse",
  isCorrect = "isCorrect",
  duration = "duration",
  effort = "effort",
  exerciseId = "exerciseId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ResultsScalarFieldEnum, {
  name: "ResultsScalarFieldEnum",
  description: undefined,
});
