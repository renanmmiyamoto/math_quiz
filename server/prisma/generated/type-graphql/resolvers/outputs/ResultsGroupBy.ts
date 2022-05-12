import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsAvgAggregate } from "../outputs/ResultsAvgAggregate";
import { ResultsCountAggregate } from "../outputs/ResultsCountAggregate";
import { ResultsMaxAggregate } from "../outputs/ResultsMaxAggregate";
import { ResultsMinAggregate } from "../outputs/ResultsMinAggregate";
import { ResultsSumAggregate } from "../outputs/ResultsSumAggregate";
import { OperationType } from "../../enums/OperationType";

@TypeGraphQL.ObjectType("ResultsGroupBy", {
  isAbstract: true
})
export class ResultsGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  calculation!: string;

  @TypeGraphQL.Field(_type => OperationType, {
    nullable: false
  })
  operation!: "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION" | "EXPONENTIATION" | "ROOTING" | "EQUATION";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  response!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  trueResponse!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isCorrect!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  duration!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  effort!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  exerciseId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ResultsCountAggregate, {
    nullable: true
  })
  _count!: ResultsCountAggregate | null;

  @TypeGraphQL.Field(_type => ResultsAvgAggregate, {
    nullable: true
  })
  _avg!: ResultsAvgAggregate | null;

  @TypeGraphQL.Field(_type => ResultsSumAggregate, {
    nullable: true
  })
  _sum!: ResultsSumAggregate | null;

  @TypeGraphQL.Field(_type => ResultsMinAggregate, {
    nullable: true
  })
  _min!: ResultsMinAggregate | null;

  @TypeGraphQL.Field(_type => ResultsMaxAggregate, {
    nullable: true
  })
  _max!: ResultsMaxAggregate | null;
}
