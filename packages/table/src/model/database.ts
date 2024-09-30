import { Remesh } from "remesh";
import type { Database } from "@naive/core";

const DatabaseDomain = Remesh.domain({
  name: "DatabaseDomain",
  impl: (domain) => {
    const defaultDatabase: Database = {
      id: "",
      name: "",
      tables: [],
    };
    const DatabaseState = domain.state<Database>({
      name: "DatabaseState",
      default: defaultDatabase,
    });

    const DatabaseQuery = domain.query({
      name: "DatabaseQuery",
      impl: ({ get }) => {
        return get(DatabaseState());
      },
    });

    const MoveTableExceptionEvent = domain.event({
      name: "MoveTableExceptionEvent",
    });

    type MoveOrderDescriptor = {
      id: string; // table to move
      newPosition: number; // index
    };
    const MoveTableToIndexCommand = domain.command({
      name: "MoveTableToIndexCommand",
      impl: ({ get }, orderDesc: MoveOrderDescriptor) => {
        const currentDatabase = get(DatabaseState());
        const tables = currentDatabase.tables;

        // 合法性校验
        const indexBiggerThanMax = orderDesc.newPosition > tables.length - 1;
        const indexLessThan0 = orderDesc.newPosition < 0;
        const tableIndex = tables.findIndex(
          (table) => table.id === orderDesc.id,
        );

        if (indexBiggerThanMax || indexLessThan0 || tableIndex < 0) {
          return MoveTableExceptionEvent();
        }

        tables.splice(orderDesc.newPosition, 0, tables[tableIndex]);
        return DatabaseState().new({
          ...get(DatabaseState()),
          tables: [...tables],
        });
      },
    });

    return {
      query: {
        DatabaseQuery,
      },
      command: {
        MoveTableToIndexCommand,
      },
      event: {
        MoveTableExceptionEvent,
      },
    };
  },
});

export default DatabaseDomain;
