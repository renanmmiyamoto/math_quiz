import * as TypeGraphQL from "type-graphql";
import { Exercises } from "../../../models/Exercises";
import { Users } from "../../../models/Users";
import { UsersExercisesArgs } from "./args/UsersExercisesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Users)
export class UsersRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Exercises], {
    nullable: false
  })
  async exercises(@TypeGraphQL.Root() users: Users, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UsersExercisesArgs): Promise<Exercises[]> {
    return getPrismaFromContext(ctx).users.findUnique({
      where: {
        id: users.id,
      },
    }).exercises(args);
  }
}
