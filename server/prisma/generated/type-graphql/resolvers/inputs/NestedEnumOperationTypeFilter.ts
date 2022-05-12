import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.InputType("NestedEnumOperationTypeFilter", {
  isAbstract: true
})
export class NestedEnumOperationTypeFilter {
  @TypeGraphQL.Field(_type => OperationType, {
    nullable: true
  })
  equals?: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION" | undefined;

  @TypeGraphQL.Field(_type => [OperationType], {
    nullable: true
  })
  in?: Array<"ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION"> | undefined;

  @TypeGraphQL.Field(_type => [OperationType], {
    nullable: true
  })
  notIn?: Array<"ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOperationTypeFilter, {
    nullable: true
  })
  not?: NestedEnumOperationTypeFilter | undefined;
}
