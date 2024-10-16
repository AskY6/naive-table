import { Table } from "@naive/core/model/interface";
import { IDatabaseMeta, IDataloaderFetcher } from "./interface";

const createDataloaderFetcher = (): IDataloaderFetcher => {
  const fetcher: IDataloaderFetcher = {
    getPermissionInfo: function (): Promise<boolean> {
      throw new Error("Function not implemented.");
    },
    getDatabaseMeta: function (databaseId: string): Promise<IDatabaseMeta> {
      throw new Error("Function not implemented.");
    },
    getTable: function (tableId: string): Promise<Table> {
      throw new Error("Function not implemented.");
    },
    getTables: function (tableIds: string[]): Promise<Table[]> {
      throw new Error("Function not implemented.");
    },
  };

  return fetcher;
};

export { createDataloaderFetcher };
