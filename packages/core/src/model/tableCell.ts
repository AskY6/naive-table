import { Position, TableCell, TableContent } from "./interface";

export type CreateTableCellOption = {
  content: TableContent;
  position: Position;
};
export const createTableCell = (option: CreateTableCellOption) => {
  const tableCell: TableCell = {
    content: option.content,
    position: option.position,
  };
  return tableCell;
};
