import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import { Anchors, ORIENTATION } from "./common"
import AppLauncherModule from "./modules/AppLauncher"
import ClockModule from "./modules/Clock"
import ControlPanelModule from "./modules/ControlPanel"
import MediaModule from "./modules/Media"
import SysTrayModule from "./modules/SysTray"
import WorkspacesModule from "./modules/Worksplaces"

interface Props {
  monitor: Gdk.Monitor
  $?: (self: any) => void
}

export default function SideBar({ monitor, $ }: Props) {
  return (
    <window
      visible
      name="bar"
      class="Bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Anchors.LEFT | Anchors.TOP | Anchors.BOTTOM}
      application={app}
      $={$}
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
