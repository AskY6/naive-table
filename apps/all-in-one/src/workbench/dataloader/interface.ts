import { Resolve } from "@naive/core/base/async";
import { Database, Table } from "@naive/core/model/interface";

// 数据加载的各个阶段
export enum DataLoaderPhase {
  Init,
  Permission,
  Meta,
  CurTable,
  AllTable,
}

export type IDatabaseMeta = {
  name: Database["name"];
  tableIds: string[];
};

export type IDataloaderFetcher = {
  getPermissionInfo: () => Promise<boolean>;
  getDatabaseMeta: (databaseId: string) => Promise<IDatabaseMeta>;
  getTable: (tableId: string) => Promise<Table>;
  getTables: (tableIds: string[]) => Promise<Table[]>;
};

export type IDataloaderLifecycle = {
  getPhase: () => DataLoaderPhase;
  resolvePermission: Resolve<boolean>
  resolveMeta: Resolve<IDatabaseMeta>
  resolveCurTable: Resolve<Table>
  resolveAllTable: Resolve<Database>

  when(phase: DataLoaderPhase.Permission): Promise<boolean>;
  when(phase: DataLoaderPhase.Meta): Promise<IDatabaseMeta>;
  when(phase: DataLoaderPhase.CurTable): Promise<Table>;
  when(phase: DataLoaderPhase.AllTable): Promise<Database>;
  when(phase: DataLoaderPhase): Promise<unknown>;
};
