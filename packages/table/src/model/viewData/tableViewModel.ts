import { Remesh } from "remesh";
import { FieldTypeEnum, TableHeaderDescriptor, type Table } from "@naive/core";

const TableViewDomain = Remesh.domain({
  name: "TableViewDomain",
  impl: (domain) => {
    const defaultInitialState: Table = {
      id: "",
      name: "",
      headers: [],
      rows: [],
    };
    const TableViewState = domain.state({
      name: "TableViewState",
      default: defaultInitialState,
    });

    const TableViewQuery = domain.query({
      name: 'TableViewQuery',
      impl: ({ get }) => {
        return get(TableViewState())
      }
    })

    // 新增一行，依赖 headerDescriptor
    const AddRowCommand = domain.command({
      name: "AddRowCommand",
      impl: ({ get }) => {
        return null;
      },
    });
    const DeleteRowCommand = domain.command({
      name: "DeleteRowCommand",
      impl: ({ get }) => {
        return null;
      },
    });

    const AddColumnExceptionEvent = domain.event({
      name: "AddColumnExceptionEvent",
    });
    type AddColumnOption = {
      index: number;
      type: FieldTypeEnum;
    };
    const AddColumnCommand = domain.command({
      name: "AddColumnCommand",
      impl: ({ get }, option: AddColumnOption) => {
        const { index, type } = option
        const { headers } = get(TableViewQuery())

        const indexTooLarge = index > headers.length
        const indexTooSmall = index < 0
        if (indexTooLarge || indexTooSmall) {
          return AddColumnExceptionEvent()
        }

        const newHeader: TableHeaderDescriptor = {
          type,
          // todo: generate new title
          title: ''
        }
        const newHeaders = [...headers, newHeader]

        return null;
      },
    });

    const DeleteColumnCommand = domain.command({
      name: "AddColumnCommand",
      impl: ({ get }) => {
        return null;
      },
    });

    return {
      query: {
        TableViewQuery
      },
      command: {
        AddRowCommand,
        DeleteRowCommand,
        AddColumnCommand,
        DeleteColumnCommand,
      },
    };
  },
});

export { TableViewDomain };
