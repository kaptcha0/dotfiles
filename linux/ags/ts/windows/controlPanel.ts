import { windowNames } from "@src/variables";

const applications = await Service.import("applications")

export function ControlPanelWindow(monitor = 0) {
  return Widget.Window({
    monitor,
    name: windowNames.controlPanel,
    visible: false,
    widthRequest: 128,
    heightRequest: 256,
    anchor: ["top", "right"],
    class_name: "ctrl-panel window",
    child: Widget.Box({
      vertical: true,
      class_name: "ctrl-panel-container",
      children: [Header(), VolumeAndBrightness(), Network(), Stats()],
    }),
  });
}

function Header() {
  return Widget.Box({
    class_name: "ctrl-panel-header container",
    child: Widget.Label("Hello"),
  });
}

function VolumeAndBrightness() {
  return Widget.Box({
    class_name: "ctrl-panel-vb container",
  });
}

function Network() {
  return Widget.Box({
    class_name: "ctrl-panel-net container",
  });
}

function Stats() {
  return Widget.Box({
    class_name: "ctrl-panel-stats container",
  });
}
