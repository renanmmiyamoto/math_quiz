import * as TypeGraphQL from "type-graphql";
import { Exercises } from "../../../models/Exercises";
import { Results } from "../../../models/Results";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Results)
export class ResultsRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Exercises, {
    nullable: true
  })
  async exercise(@TypeGraphQL.Root() results: Results, @TypeGraphQL.Ctx() ctx: any): Promise<Exercises | null> {
    return getPrismaFromContext(ctx).results.findUnique({
      where: {
        id: results.id,
      },
    }).exercise({});
  }
}
