/**
 * tasks
 * 1. 数据获取。 Lazy?
 * * 1.1 Permission. prefetch
 * * 1.2 cur table data
 * * 1.3 rest table data
 * 2. 基础展示层 (canvas)
 * 3. Tool 层 (React)
 * * 3.1 View
 * * 3.2 Edit
 */

import { DataLoaderPhase, createDataloader } from "./dataloader";


export type IWorkbenchOptions = {
  parent: HTMLElement;
  databaseId: string;
};

export type IWorkbench = {
  startup: () => void;
};

const createWorkbench = (options: IWorkbenchOptions): IWorkbench => {
  const dataloder = createDataloader({ databaseId: options.databaseId });
  return {
    startup() {
      dataloder.start()
      dataloder.when(DataLoaderPhase.Permission)
        .then(hasPermission => {
          console.log('has permission?? ', hasPermission)
          return false
        })
    },
  };
};

export { createWorkbench };
