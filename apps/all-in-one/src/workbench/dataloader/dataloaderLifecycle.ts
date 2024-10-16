import { Database, Table } from "@/core/model/interface";
import { createDeferredPromise } from "@/core/base/async";
import {
  DataLoaderPhase,
  IDatabaseMeta,
  IDataloaderLifecycle,
} from "./interface";

const createDataloaderLifecycle = (): IDataloaderLifecycle => {
  let phase: DataLoaderPhase = DataLoaderPhase.Init;
  let permissionDeferredPromise = createDeferredPromise<boolean>();
  let databaseMetaDeferredPromise = createDeferredPromise<IDatabaseMeta>();
  let curTableDeferredPromise = createDeferredPromise<Table>();
  let allTableDeferredPromise = createDeferredPromise<Database>();

  const getPhase = () => phase;

  function when(phase: DataLoaderPhase.Permission): Promise<boolean>;
  function when(phase: DataLoaderPhase.Meta): Promise<IDatabaseMeta>;
  function when(phase: DataLoaderPhase.CurTable): Promise<Table>;
  function when(phase: DataLoaderPhase.AllTable): Promise<Database>;
  function when(phase: DataLoaderPhase) {
    if (phase === DataLoaderPhase.Init) return Promise.resolve();
    if (phase === DataLoaderPhase.Permission)
      return permissionDeferredPromise.promise;
    if (phase === DataLoaderPhase.Meta)
      return databaseMetaDeferredPromise.promise;
    if (phase === DataLoaderPhase.CurTable)
      return curTableDeferredPromise.promise;
    if (phase === DataLoaderPhase.AllTable)
      return allTableDeferredPromise.promise;
  }
  const dataloaderLifeCycle: IDataloaderLifecycle = {
    getPhase,
    when,
    resolvePermission: permissionDeferredPromise.resolve,
    resolveMeta: databaseMetaDeferredPromise.resolve,
    resolveCurTable: curTableDeferredPromise.resolve,
    resolveAllTable: allTableDeferredPromise.resolve,
  };

  return dataloaderLifeCycle;
};

export { createDataloaderLifecycle };
