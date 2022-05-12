import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResultsAvgAggregate } from "../outputs/ResultsAvgAggregate";
import { ResultsCountAggregate } from "../outputs/ResultsCountAggregate";
import { ResultsMaxAggregate } from "../outputs/ResultsMaxAggregate";
import { ResultsMinAggregate } from "../outputs/ResultsMinAggregate";
import { ResultsSumAggregate } from "../outputs/ResultsSumAggregate";

@TypeGraphQL.ObjectType("AggregateResults", {
  isAbstract: true
})
export class AggregateResults {
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
