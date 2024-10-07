import { initService } from "@naive/service";
import {
  IWorkbenchEntry,
  IWorkbenchConstructionOptions,
} from "@naive/workbench/api";
import { createWorkbench } from "./workbench";

const createWorkbenchEntry = (
  option: IWorkbenchConstructionOptions
): IWorkbenchEntry => {
  // init service
  initService();

  const workbench = createWorkbench({ parent: option.parent });
  workbench.startup()
  
  // construct facade

  return {};
};

export { createWorkbenchEntry };
