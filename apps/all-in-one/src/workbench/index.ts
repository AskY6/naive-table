import {
  IWorkbenchEntry,
  IWorkbenchConstructionOptions,
} from "@/workbench/api";
import { createWorkbench } from "./workbench";

const createWorkbenchEntry = (
  option: IWorkbenchConstructionOptions
): IWorkbenchEntry => {
  // init service
  // initService();

  const workbench = createWorkbench({ parent: option.parent, databaseId: option.id });


  return {
    startup: workbench.startup
  };
};

export { createWorkbenchEntry };
