import { type ListenerOfEvent } from "@naive/core/base/event";
import { Database, Table } from "@naive/core/model/interface";
import { UnimplementsError } from "@naive/core/base/exceptions";
import { DataLoaderPhase, IDataloader } from "./interface";
import { toDisposable } from "@naive/core/base/disposable";

export type CreateDataloaderOption = {};
const createDataloader = (option: CreateDataloaderOption): IDataloader => {
  let phase: DataLoaderPhase = DataLoaderPhase.Init;
  const permissionLoadedLisenters: Set<ListenerOfEvent<boolean>> = new Set();
  const curTableLoadedListeners: Set<ListenerOfEvent<Table>> = new Set();
  const allTableLoadedListeners: Set<ListenerOfEvent<Database>> = new Set();

  const dataloader: IDataloader = {
    getPhase: () => phase,
    onPermissionLoaded: (listener) => {
      permissionLoadedLisenters.add(listener);
      return toDisposable(() => {
        permissionLoadedLisenters.delete(listener);
      });
    },
    onCurTableLoaded: (listener) => {
      curTableLoadedListeners.add(listener);
      return toDisposable(() => {
        curTableLoadedListeners.delete(listener);
      });
    },
    onAllTableLoaded: (listener) => {
      allTableLoadedListeners.add(listener);
      return toDisposable(() => {
        allTableLoadedListeners.delete(listener);
      });
    },
    when: (phase) => {
      throw new UnimplementsError();
    },
  };

  return dataloader;
};

export { createDataloader };
