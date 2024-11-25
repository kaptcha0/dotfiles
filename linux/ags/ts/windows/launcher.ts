import { windowNames } from "@src/variables";

export function LauncherWindow(monitor = 0) {
  return Widget.Window({
    monitor,
    visible: false,
    name: windowNames.launcher,
  });
}
