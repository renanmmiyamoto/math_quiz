import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumOperationTypeFilter } from "../inputs/NestedEnumOperationTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.InputType("NestedEnumOperationTypeWithAggregatesFilter", {
  isAbstract: true
})
export class NestedEnumOperationTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumOperationTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumOperationTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOperationTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumOperationTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumOperationTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumOperationTypeFilter | undefined;
}
