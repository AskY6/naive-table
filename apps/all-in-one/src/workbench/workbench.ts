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
