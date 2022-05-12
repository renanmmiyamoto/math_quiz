import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Users: crudResolvers.UsersCrudResolver,
  Exercises: crudResolvers.ExercisesCrudResolver,
  Results: crudResolvers.ResultsCrudResolver
};
const actionResolversMap = {
  Users: {
    findUniqueUsers: actionResolvers.FindUniqueUsersResolver,
    findFirstUsers: actionResolvers.FindFirstUsersResolver,
    findManyUsers: actionResolvers.FindManyUsersResolver,
    createUsers: actionResolvers.CreateUsersResolver,
    createManyUsers: actionResolvers.CreateManyUsersResolver,
    deleteUsers: actionResolvers.DeleteUsersResolver,
    updateUsers: actionResolvers.UpdateUsersResolver,
    deleteManyUsers: actionResolvers.DeleteManyUsersResolver,
    updateManyUsers: actionResolvers.UpdateManyUsersResolver,
    upsertUsers: actionResolvers.UpsertUsersResolver,
    aggregateUsers: actionResolvers.AggregateUsersResolver,
    groupByUsers: actionResolvers.GroupByUsersResolver
  },
  Exercises: {
    findUniqueExercises: actionResolvers.FindUniqueExercisesResolver,
    findFirstExercises: actionResolvers.FindFirstExercisesResolver,
    findManyExercises: actionResolvers.FindManyExercisesResolver,
    createExercises: actionResolvers.CreateExercisesResolver,
    createManyExercises: actionResolvers.CreateManyExercisesResolver,
    deleteExercises: actionResolvers.DeleteExercisesResolver,
    updateExercises: actionResolvers.UpdateExercisesResolver,
    deleteManyExercises: actionResolvers.DeleteManyExercisesResolver,
    updateManyExercises: actionResolvers.UpdateManyExercisesResolver,
    upsertExercises: actionResolvers.UpsertExercisesResolver,
    aggregateExercises: actionResolvers.AggregateExercisesResolver,
    groupByExercises: actionResolvers.GroupByExercisesResolver
  },
  Results: {
    findUniqueResults: actionResolvers.FindUniqueResultsResolver,
    findFirstResults: actionResolvers.FindFirstResultsResolver,
    findManyResults: actionResolvers.FindManyResultsResolver,
    createResults: actionResolvers.CreateResultsResolver,
    createManyResults: actionResolvers.CreateManyResultsResolver,
    deleteResults: actionResolvers.DeleteResultsResolver,
    updateResults: actionResolvers.UpdateResultsResolver,
    deleteManyResults: actionResolvers.DeleteManyResultsResolver,
    updateManyResults: actionResolvers.UpdateManyResultsResolver,
    upsertResults: actionResolvers.UpsertResultsResolver,
    aggregateResults: actionResolvers.AggregateResultsResolver,
    groupByResults: actionResolvers.GroupByResultsResolver
  }
};
const crudResolversInfo = {
  Users: ["findUniqueUsers", "findFirstUsers", "findManyUsers", "createUsers", "createManyUsers", "deleteUsers", "updateUsers", "deleteManyUsers", "updateManyUsers", "upsertUsers", "aggregateUsers", "groupByUsers"],
  Exercises: ["findUniqueExercises", "findFirstExercises", "findManyExercises", "createExercises", "createManyExercises", "deleteExercises", "updateExercises", "deleteManyExercises", "updateManyExercises", "upsertExercises", "aggregateExercises", "groupByExercises"],
  Results: ["findUniqueResults", "findFirstResults", "findManyResults", "createResults", "createManyResults", "deleteResults", "updateResults", "deleteManyResults", "updateManyResults", "upsertResults", "aggregateResults", "groupByResults"]
};
const argsInfo = {
  FindUniqueUsersArgs: ["where"],
  FindFirstUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUsersArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUsersArgs: ["data"],
  CreateManyUsersArgs: ["data", "skipDuplicates"],
  DeleteUsersArgs: ["where"],
  UpdateUsersArgs: ["data", "where"],
  DeleteManyUsersArgs: ["where"],
  UpdateManyUsersArgs: ["data", "where"],
  UpsertUsersArgs: ["where", "create", "update"],
  AggregateUsersArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUsersArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueExercisesArgs: ["where"],
  FindFirstExercisesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExercisesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateExercisesArgs: ["data"],
  CreateManyExercisesArgs: ["data", "skipDuplicates"],
  DeleteExercisesArgs: ["where"],
  UpdateExercisesArgs: ["data", "where"],
  DeleteManyExercisesArgs: ["where"],
  UpdateManyExercisesArgs: ["data", "where"],
  UpsertExercisesArgs: ["where", "create", "update"],
  AggregateExercisesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByExercisesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueResultsArgs: ["where"],
  FindFirstResultsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyResultsArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateResultsArgs: ["data"],
  CreateManyResultsArgs: ["data", "skipDuplicates"],
  DeleteResultsArgs: ["where"],
  UpdateResultsArgs: ["data", "where"],
  DeleteManyResultsArgs: ["where"],
  UpdateManyResultsArgs: ["data", "where"],
  UpsertResultsArgs: ["where", "create", "update"],
  AggregateResultsArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByResultsArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Users: relationResolvers.UsersRelationsResolver,
  Exercises: relationResolvers.ExercisesRelationsResolver,
  Results: relationResolvers.ResultsRelationsResolver
};
const relationResolversInfo = {
  Users: ["exercises"],
  Exercises: ["user", "results"],
  Results: ["exercise"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Users: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  Exercises: ["id", "userId", "operation", "createdAt", "updatedAt"],
  Results: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUsers: ["_count", "_min", "_max"],
  UsersGroupBy: ["id", "name", "email", "bornDate", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateExercises: ["_count", "_min", "_max"],
  ExercisesGroupBy: ["id", "userId", "operation", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregateResults: ["_count", "_avg", "_sum", "_min", "_max"],
  ResultsGroupBy: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UsersCount: ["exercises"],
  UsersCountAggregate: ["id", "name", "email", "bornDate", "createdAt", "updatedAt", "_all"],
  UsersMinAggregate: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  UsersMaxAggregate: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  ExercisesCount: ["results"],
  ExercisesCountAggregate: ["id", "userId", "operation", "createdAt", "updatedAt", "_all"],
  ExercisesMinAggregate: ["id", "userId", "operation", "createdAt", "updatedAt"],
  ExercisesMaxAggregate: ["id", "userId", "operation", "createdAt", "updatedAt"],
  ResultsCountAggregate: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt", "_all"],
  ResultsAvgAggregate: ["duration", "effort"],
  ResultsSumAggregate: ["duration", "effort"],
  ResultsMinAggregate: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  ResultsMaxAggregate: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UsersWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "bornDate", "createdAt", "updatedAt", "exercises"],
  UsersOrderByWithRelationInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt", "exercises"],
  UsersWhereUniqueInput: ["id", "email"],
  UsersOrderByWithAggregationInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt", "_count", "_max", "_min"],
  UsersScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  ExercisesWhereInput: ["AND", "OR", "NOT", "id", "user", "userId", "operation", "results", "createdAt", "updatedAt"],
  ExercisesOrderByWithRelationInput: ["id", "user", "userId", "operation", "results", "createdAt", "updatedAt"],
  ExercisesWhereUniqueInput: ["id"],
  ExercisesOrderByWithAggregationInput: ["id", "userId", "operation", "createdAt", "updatedAt", "_count", "_max", "_min"],
  ExercisesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "operation", "createdAt", "updatedAt"],
  ResultsWhereInput: ["AND", "OR", "NOT", "id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exercise", "exerciseId", "createdAt", "updatedAt"],
  ResultsOrderByWithRelationInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exercise", "exerciseId", "createdAt", "updatedAt"],
  ResultsWhereUniqueInput: ["id"],
  ResultsOrderByWithAggregationInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  ResultsScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  UsersCreateInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt", "exercises"],
  UsersUpdateInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt", "exercises"],
  UsersCreateManyInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  UsersUpdateManyMutationInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  ExercisesCreateInput: ["id", "user", "operation", "results", "createdAt", "updatedAt"],
  ExercisesUpdateInput: ["id", "user", "operation", "results", "createdAt", "updatedAt"],
  ExercisesCreateManyInput: ["id", "userId", "operation", "createdAt", "updatedAt"],
  ExercisesUpdateManyMutationInput: ["id", "operation", "createdAt", "updatedAt"],
  ResultsCreateInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exercise", "createdAt", "updatedAt"],
  ResultsUpdateInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exercise", "createdAt", "updatedAt"],
  ResultsCreateManyInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  ResultsUpdateManyMutationInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "createdAt", "updatedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ExercisesListRelationFilter: ["every", "some", "none"],
  ExercisesOrderByRelationAggregateInput: ["_count"],
  UsersCountOrderByAggregateInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  UsersMaxOrderByAggregateInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  UsersMinOrderByAggregateInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  UsersRelationFilter: ["is", "isNot"],
  EnumOperationTypeFilter: ["equals", "in", "notIn", "not"],
  ResultsListRelationFilter: ["every", "some", "none"],
  ResultsOrderByRelationAggregateInput: ["_count"],
  ExercisesCountOrderByAggregateInput: ["id", "userId", "operation", "createdAt", "updatedAt"],
  ExercisesMaxOrderByAggregateInput: ["id", "userId", "operation", "createdAt", "updatedAt"],
  ExercisesMinOrderByAggregateInput: ["id", "userId", "operation", "createdAt", "updatedAt"],
  EnumOperationTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ExercisesRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  ResultsCountOrderByAggregateInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  ResultsAvgOrderByAggregateInput: ["duration", "effort"],
  ResultsMaxOrderByAggregateInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  ResultsMinOrderByAggregateInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  ResultsSumOrderByAggregateInput: ["duration", "effort"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  ExercisesCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  ExercisesUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UsersCreateNestedOneWithoutExercisesInput: ["create", "connectOrCreate", "connect"],
  ResultsCreateNestedManyWithoutExerciseInput: ["create", "connectOrCreate", "createMany", "connect"],
  UsersUpdateOneRequiredWithoutExercisesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  EnumOperationTypeFieldUpdateOperationsInput: ["set"],
  ResultsUpdateManyWithoutExerciseInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ExercisesCreateNestedOneWithoutResultsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ExercisesUpdateOneWithoutResultsInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumOperationTypeFilter: ["equals", "in", "notIn", "not"],
  NestedEnumOperationTypeWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ExercisesCreateWithoutUserInput: ["id", "operation", "results", "createdAt", "updatedAt"],
  ExercisesCreateOrConnectWithoutUserInput: ["where", "create"],
  ExercisesCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ExercisesUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ExercisesUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ExercisesUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ExercisesScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "operation", "createdAt", "updatedAt"],
  UsersCreateWithoutExercisesInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  UsersCreateOrConnectWithoutExercisesInput: ["where", "create"],
  ResultsCreateWithoutExerciseInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "createdAt", "updatedAt"],
  ResultsCreateOrConnectWithoutExerciseInput: ["where", "create"],
  ResultsCreateManyExerciseInputEnvelope: ["data", "skipDuplicates"],
  UsersUpsertWithoutExercisesInput: ["update", "create"],
  UsersUpdateWithoutExercisesInput: ["id", "name", "email", "bornDate", "createdAt", "updatedAt"],
  ResultsUpsertWithWhereUniqueWithoutExerciseInput: ["where", "update", "create"],
  ResultsUpdateWithWhereUniqueWithoutExerciseInput: ["where", "data"],
  ResultsUpdateManyWithWhereWithoutExerciseInput: ["where", "data"],
  ResultsScalarWhereInput: ["AND", "OR", "NOT", "id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "exerciseId", "createdAt", "updatedAt"],
  ExercisesCreateWithoutResultsInput: ["id", "user", "operation", "createdAt", "updatedAt"],
  ExercisesCreateOrConnectWithoutResultsInput: ["where", "create"],
  ExercisesUpsertWithoutResultsInput: ["update", "create"],
  ExercisesUpdateWithoutResultsInput: ["id", "user", "operation", "createdAt", "updatedAt"],
  ExercisesCreateManyUserInput: ["id", "operation", "createdAt", "updatedAt"],
  ExercisesUpdateWithoutUserInput: ["id", "operation", "results", "createdAt", "updatedAt"],
  ResultsCreateManyExerciseInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "createdAt", "updatedAt"],
  ResultsUpdateWithoutExerciseInput: ["id", "calculation", "operation", "response", "trueResponse", "isCorrect", "duration", "effort", "createdAt", "updatedAt"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

