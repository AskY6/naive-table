import { type Event } from "@naive/core/base/event";
import { Database, Table } from "@naive/core/model/interface";

// 数据加载的各个阶段
export enum DataLoaderPhase {
  Init = 1,
  Permission = 2,
  CurTable = 3,
  AllTable = 4,
}

export type IDataloader = {
  getPhase: () => DataLoaderPhase;
  onPermissionLoaded: Event<boolean>;
  onCurTableLoaded: Event<Table>;
  onAllTableLoaded: Event<Database>;

  /** */
  when(phase: DataLoaderPhase.Permission): Promise<boolean>;
  when(phase: DataLoaderPhase.CurTable): Promise<Table>;
  when(phase: DataLoaderPhase.AllTable): Promise<Database>;
};
