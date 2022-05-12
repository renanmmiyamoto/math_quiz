import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateResultsArgs } from "./args/AggregateResultsArgs";
import { Results } from "../../../models/Results";
import { AggregateResults } from "../../outputs/AggregateResults";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Results)
export class AggregateResultsResolver {
  @TypeGraphQL.Query(_returns => AggregateResults, {
    nullable: false
  })
  async aggregateResults(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateResultsArgs): Promise<AggregateResults> {
    return getPrismaFromContext(ctx).results.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
