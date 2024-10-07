import { Table, TableHeaderDescriptor, TableRow } from "./interface";

export type CreateTableOption = {
  id: string;
  name: string;
  headers: TableHeaderDescriptor[];
  rows: TableRow[];
};
export const createTable = (option: CreateTableOption) => {
  const table: Table = {
    id: option.id,
    name: option.name,
    headers: option.headers,
    rows: option.rows,
  };
  return table;
};
