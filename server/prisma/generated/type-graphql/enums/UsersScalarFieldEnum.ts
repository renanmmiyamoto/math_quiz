import * as TypeGraphQL from "type-graphql";

export enum UsersScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  bornDate = "bornDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(UsersScalarFieldEnum, {
  name: "UsersScalarFieldEnum",
  description: undefined,
});
