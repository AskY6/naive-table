import { NoneType } from "@/core/base/functional";
import { createDataloaderFetcher } from "./dataloaderFetcher";
import { createDataloaderLifecycle } from "./dataloaderLifecycle";
import { IDataloaderLifecycle } from "./interface";

export type DataLoader = Pick<IDataloaderLifecycle, "getPhase" | "when"> & {
  start: NoneType;
};

export type CreateDataloaderOption = {
  databaseId: string;
};
const createDataloader = (option: CreateDataloaderOption): DataLoader => {
  const fetcher = createDataloaderFetcher();
  const lifecycle = createDataloaderLifecycle();

  const start = async () => {
    const permission = await fetcher.getPermissionInfo();
    lifecycle.resolvePermission(permission);

    const meta = await fetcher.getDatabaseMeta(option.databaseId);
    lifecycle.resolveMeta(meta);

    fetcher.getTable(meta.tableIds[0]).then(lifecycle.resolveCurTable);

    fetcher.getTables(meta.tableIds.slice(1)).then((allTable) => {
      lifecycle.resolveAllTable({
        tables: allTable,
        name: meta.name,
        id: option.databaseId,
      });
    });
  };

  return {
    getPhase: lifecycle.getPhase,
    when: lifecycle.when,
    start,
  };
};

export { createDataloader };
