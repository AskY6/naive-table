import { Database, Table } from "./interface";

export type CreateDatabaseOption = {
  id: string;
  name: string;
  tables: Table[];
};
export const createDatabase = (option: CreateDatabaseOption) => {
  const database: Database = {
    id: option.id,
    name: option.name,
    tables: option.tables,
  };
  return database;
};
