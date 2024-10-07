import { TableCell, TableRow } from "./interface";

export type CreateTableRowOption = {
  id: string;
  cells: TableCell[];
};

export const createTableRow = (option: CreateTableRowOption) => {
  const tableRow: TableRow = {
    id: option.id,
    cells: option.cells,
  };
  return tableRow;
};
