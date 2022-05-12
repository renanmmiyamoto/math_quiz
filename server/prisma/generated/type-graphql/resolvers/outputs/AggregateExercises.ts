import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCountAggregate } from "../outputs/ExercisesCountAggregate";
import { ExercisesMaxAggregate } from "../outputs/ExercisesMaxAggregate";
import { ExercisesMinAggregate } from "../outputs/ExercisesMinAggregate";

@TypeGraphQL.ObjectType("AggregateExercises", {
  isAbstract: true
})
export class AggregateExercises {
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
