import {
  DateFieldType,
  FieldTypeEnum,
  HyperLink,
  HyperLinkFieldType,
  NumberFieldType,
  TextFieldType,
} from "./interface";

export type CreateTextFieldOption = { text: string };
export const createTextField = (
  option: CreateTextFieldOption
): TextFieldType => {
  return {
    type: FieldTypeEnum.Text,
    text: option.text,
  };
};

export type CreateNumberFieldOption = { num: number };
export const createNumberField = (
  option: CreateNumberFieldOption
): NumberFieldType => {
  return {
    type: FieldTypeEnum.Number,
    num: option.num,
  };
};

export type CreateDateFieldOption = { date: Date };
export const createDateField = (
  option: CreateDateFieldOption
): DateFieldType => {
  return {
    type: FieldTypeEnum.Date,
    date: option.date,
  };
};

export type CreateHyperLinkFieldOption = { hyperLink: HyperLink };
export const createHyperLinkField = (
  option: CreateHyperLinkFieldOption
): HyperLinkFieldType => {
  return {
    type: FieldTypeEnum.HyperLink,
    link: option.hyperLink,
  };
};
