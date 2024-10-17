import { DataLoader, DataLoaderPhase, createDataloader } from "./dataloader";
import { createUIController } from "./ui";

export type IWorkbenchOptions = {
  parent: HTMLElement;
  databaseId: string;
};

export type ServiceCollection = {
  dataloader: DataLoader;
};
export type IWorkbench = {
  startup: () => void;
  serviceCollection: ServiceCollection;
};

const createWorkbench = (options: IWorkbenchOptions): IWorkbench => {
  const dataloader = createDataloader({ databaseId: options.databaseId });
  const uiController = createUIController({ root: options.parent });
  const serviceCollection: ServiceCollection = { dataloader };

  const startup = () => {
    dataloader.start();
    dataloader.when(DataLoaderPhase.Permission).then((hasPermission) => {
      if (hasPermission) {
        uiController.render();
      } else {
        // todo: resolve no permission 
      }
    });
  };

  return {
    startup,
    serviceCollection,
  };
};

export { createWorkbench };
