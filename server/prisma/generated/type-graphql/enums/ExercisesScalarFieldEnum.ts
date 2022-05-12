import * as TypeGraphQL from "type-graphql";

export enum ExercisesScalarFieldEnum {
  id = "id",
  userId = "userId",
  operation = "operation",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(ExercisesScalarFieldEnum, {
  name: "ExercisesScalarFieldEnum",
  description: undefined,
});
