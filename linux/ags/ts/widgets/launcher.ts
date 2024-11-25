import { windowNames } from "@src/variables";

export function Launcher() {
  return Widget.Button({
    class_name: "container button app-launcher",
    onClicked: (_) => App.toggleWindow(windowNames.launcher),
    child: Widget.Label({
      label: "Apps",
    }),
  });
}
