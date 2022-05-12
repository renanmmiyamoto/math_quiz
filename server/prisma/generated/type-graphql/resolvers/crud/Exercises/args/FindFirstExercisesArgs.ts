import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExercisesOrderByWithRelationInput } from "../../../inputs/ExercisesOrderByWithRelationInput";
import { ExercisesWhereInput } from "../../../inputs/ExercisesWhereInput";
import { ExercisesWhereUniqueInput } from "../../../inputs/ExercisesWhereUniqueInput";
import { ExercisesScalarFieldEnum } from "../../../../enums/ExercisesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstExercisesArgs {
  @TypeGraphQL.Field(_type => ExercisesWhereInput, {
    nullable: true
  })
  where?: ExercisesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExercisesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExercisesOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExercisesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExercisesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "userId" | "operation" | "createdAt" | "updatedAt"> | undefined;
}
