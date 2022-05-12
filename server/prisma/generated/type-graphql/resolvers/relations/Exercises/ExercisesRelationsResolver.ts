import * as TypeGraphQL from "type-graphql";
import { Exercises } from "../../../models/Exercises";
import { Results } from "../../../models/Results";
import { Users } from "../../../models/Users";
import { ExercisesResultsArgs } from "./args/ExercisesResultsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Exercises)
export class ExercisesRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Users, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() exercises: Exercises, @TypeGraphQL.Ctx() ctx: any): Promise<Users> {
    return getPrismaFromContext(ctx).exercises.findUnique({
      where: {
        id: exercises.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [Results], {
    nullable: false
  })
  async results(@TypeGraphQL.Root() exercises: Exercises, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ExercisesResultsArgs): Promise<Results[]> {
    return getPrismaFromContext(ctx).exercises.findUnique({
      where: {
        id: exercises.id,
      },
    }).results(args);
  }
}
