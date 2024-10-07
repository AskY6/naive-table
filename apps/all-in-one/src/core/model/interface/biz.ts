import { Position } from "./common";

export type Database = {
  id: string;
  name: string;
  tables: Table[];
};

export type TableHeaderDescriptor = {
  type: FieldTypeEnum;
  title: string;
};
export type Table = {
  id: string;
  name: string;
  headers: TableHeaderDescriptor[];
  rows: TableRow[];
};

export type TableRow = {
  id: string;
  cells: TableCell[];
};

export type TableCell = {
  content: TableContent;
  position: Position;
};
export type TableContent = FiledType;

//#region Field Type
export enum FieldTypeEnum {
  Text,
  Number,
  Date,
  HyperLink,
}
export type FiledType =
  | TextFieldType
  | NumberFieldType
  | DateFieldType
  | HyperLinkFieldType;
export type TextFieldType = { type: FieldTypeEnum.Text; text: string };
export type NumberFieldType = { type: FieldTypeEnum.Number; num: number };
export type DateFieldType = { type: FieldTypeEnum.Date; date: Date };
export type HyperLink = { text: string; link: string };
export type HyperLinkFieldType = {
  type: FieldTypeEnum.HyperLink;
  link: HyperLink;
};
//#endregion
