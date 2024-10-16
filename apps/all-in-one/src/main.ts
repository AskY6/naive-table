import { createWorkbenchEntry } from "./workbench";

const entry = createWorkbenchEntry({
  id: "123",
  parent: document.getElementById("root")!,
});

entry.startup();
