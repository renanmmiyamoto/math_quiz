import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Exercises } from "../models/Exercises";
import { UsersCount } from "../resolvers/outputs/UsersCount";

@TypeGraphQL.ObjectType("Users", {
  isAbstract: true
})
export class Users {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  bornDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  exercises?: Exercises[];

  @TypeGraphQL.Field(_type => UsersCount, {
    nullable: true
  })
  _count?: UsersCount | null;
}
