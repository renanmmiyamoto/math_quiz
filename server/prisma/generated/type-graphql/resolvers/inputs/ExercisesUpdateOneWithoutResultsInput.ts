import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExercisesCreateOrConnectWithoutResultsInput } from "../inputs/ExercisesCreateOrConnectWithoutResultsInput";
import { ExercisesCreateWithoutResultsInput } from "../inputs/ExercisesCreateWithoutResultsInput";
import { ExercisesUpdateWithoutResultsInput } from "../inputs/ExercisesUpdateWithoutResultsInput";
import { ExercisesUpsertWithoutResultsInput } from "../inputs/ExercisesUpsertWithoutResultsInput";
import { ExercisesWhereUniqueInput } from "../inputs/ExercisesWhereUniqueInput";

@TypeGraphQL.InputType("ExercisesUpdateOneWithoutResultsInput", {
  isAbstract: true
})
export class ExercisesUpdateOneWithoutResultsInput {
  @TypeGraphQL.Field(_type => ExercisesCreateWithoutResultsInput, {
    nullable: true
  })
  create?: ExercisesCreateWithoutResultsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesCreateOrConnectWithoutResultsInput, {
    nullable: true
  })
  connectOrCreate?: ExercisesCreateOrConnectWithoutResultsInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesUpsertWithoutResultsInput, {
    nullable: true
  })
  upsert?: ExercisesUpsertWithoutResultsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ExercisesWhereUniqueInput, {
    nullable: true
  })
  connect?: ExercisesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExercisesUpdateWithoutResultsInput, {
    nullable: true
  })
  update?: ExercisesUpdateWithoutResultsInput | undefined;
}
