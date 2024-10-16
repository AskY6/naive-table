import { Table } from "@/core/model/interface";
import { IDatabaseMeta, IDataloaderFetcher } from "./interface";

const createDataloaderFetcher = (): IDataloaderFetcher => {
  const fetcher: IDataloaderFetcher = {
    getPermissionInfo: function (): Promise<boolean> {
      return Promise.resolve(true)
    },
    getDatabaseMeta: function (): Promise<IDatabaseMeta> {
      throw new Error("Function not implemented.");
    },
    getTable: function (): Promise<Table> {
      throw new Error("Function not implemented.");
    },
    getTables: function (): Promise<Table[]> {
      throw new Error("Function not implemented.");
    },
  };

  return fetcher;
};

export { createDataloaderFetcher };
