import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateExercisesArgs } from "./args/AggregateExercisesArgs";
import { Exercises } from "../../../models/Exercises";
import { AggregateExercises } from "../../outputs/AggregateExercises";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Exercises)
export class AggregateExercisesResolver {
  @TypeGraphQL.Query(_returns => AggregateExercises, {
    nullable: false
  })
  async aggregateExercises(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateExercisesArgs): Promise<AggregateExercises> {
    return getPrismaFromContext(ctx).exercises.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
