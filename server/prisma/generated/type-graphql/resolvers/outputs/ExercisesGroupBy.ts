import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCountAggregate } from "../outputs/ExercisesCountAggregate";
import { ExercisesMaxAggregate } from "../outputs/ExercisesMaxAggregate";
import { ExercisesMinAggregate } from "../outputs/ExercisesMinAggregate";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.ObjectType("ExercisesGroupBy", {
  isAbstract: true
})
export class ExercisesGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => OperationType, {
    nullable: false
  })
  operation!: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION";

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ExercisesCountAggregate, {
    nullable: true
  })
  _count!: ExercisesCountAggregate | null;

  @TypeGraphQL.Field(_type => ExercisesMinAggregate, {
    nullable: true
  })
  _min!: ExercisesMinAggregate | null;

  @TypeGraphQL.Field(_type => ExercisesMaxAggregate, {
    nullable: true
  })
  _max!: ExercisesMaxAggregate | null;
}
