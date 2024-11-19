import {
  ClientTitle,
  Clock,
  Notification,
  SysTray,
  Workspaces,
  Launcher,
  ControlPanel,
} from "@widgets/index";

import {
  ControlPanelWindow,
  LauncherWindow,
  NotificationWindow,
  NotificationPopups,
} from "@windows/index";

function Left() {
  return Widget.Box({
    class_name: "left",
    hpack: "start",
    hexpand: false,
    widthRequest: 32,
    children: [Launcher(), Workspaces()],
  });
}

function Center() {
  return Widget.Box({
    class_name: "center",
    children: [ClientTitle(), Notification()],
  });
}

function Right() {
  return Widget.Box({
    hpack: "end",
    class_name: "right",
    children: [Clock(), ControlPanel(), SysTray()],
  });
}

function Bar(monitor = 0) {
  return Widget.Window({
    name: `bar-${monitor}`,
    anchor: ["top", "left", "right"],
    exclusivity: "exclusive",
    class_name: "bar window",
    vexpand: false,
    heightRequest: 14,
    child: Widget.CenterBox({
      start_widget: Left(),
      center_widget: Center(),
      end_widget: Right(),
    }),
  });
}

const compileCss = () => {
  const scss = `${App.configDir}/style/main.scss`;

  const css = "/tmp/ags/style.css";

  console.log("compiling scss");
  const output = Utils.exec(`sassc ${scss} ${css}`);
  console.log(output);
  console.log("compiled scss");

  return css;
};

App.config({
  windows: [
    Bar(),
    ControlPanelWindow(),
    LauncherWindow(),
    NotificationPopups(),
    NotificationWindow(),
  ],
  style: compileCss(),
});

Utils.monitorFile(
  // directory that contains the scss files
  `${App.configDir}/style`,

  // reload function
  () => {
    console.log("refreshing css");
    // main scss file
    const css = compileCss();
    // compile, reset, apply
    App.resetCss();
    App.applyCss(css);
  },
);
