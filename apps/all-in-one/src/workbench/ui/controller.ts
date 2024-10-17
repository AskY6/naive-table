/**
 * We prevent using React render flow as control flow.
 */

import { render } from "./views/entry";

export type UIController = {
  render: () => void;
};

export type UIControllerConstructOptions = {
    root: HTMLElement
}
const createUIController = (options: UIControllerConstructOptions): UIController => {
  const controller: UIController = {
    render: () => {
        render({ root: options.root })
    },
  };

  return controller;
};

export { createUIController };
