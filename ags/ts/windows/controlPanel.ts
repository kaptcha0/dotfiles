import { windowNames } from "@src/variables";

export function ControlPanelWindow(monitor = 0) {
  return Widget.Window({
    monitor,
    name: windowNames.controlPanel,
  });
}
