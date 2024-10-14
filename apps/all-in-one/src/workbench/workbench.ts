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

export type IWorkbenchOptions = {
  parent: HTMLElement;
};

export type IWorkbench = {
  startup: () => void;
};

const createWorkbench = (options: IWorkbenchOptions): IWorkbench => {
  return {
    startup() {},
  };
};

export { createWorkbench };
