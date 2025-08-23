import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import { ORIENTATION } from "./common"
import AppLauncherModule from "./modules/AppLauncher"
import ClockModule from "./modules/Clock"
import ControlPanelModule from "./modules/ControlPannel"
import MediaModule from "./modules/Media"
import SysTrayModule from "./modules/SysTray"
import WorkspacesModule from "./modules/Worksplaces"

export default function Bar(gdkmonitor: Gdk.Monitor) {
  const { TOP, LEFT, BOTTOM } = Astal.WindowAnchor

  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={LEFT | TOP | BOTTOM}
      application={app}
    >
      <centerbox orientation={ORIENTATION}>
        <box orientation={ORIENTATION} $type="start">
          <AppLauncherModule />
          <WorkspacesModule />
        </box>
        <box orientation={ORIENTATION} $type="center">
          <ClockModule />
        </box>
        <box orientation={ORIENTATION} $type="end">
          <MediaModule />
          <ControlPanelModule />
          <SysTrayModule />
        </box>
      </centerbox>
    </window>
  )
}
