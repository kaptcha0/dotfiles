import app from "ags/gtk4/app"
import { Astal, Gdk } from "ags/gtk4"
import { Anchors, ORIENTATION } from "./common"
import AppLauncherModule from "./modules/AppLauncher"
import ClockModule from "./modules/Clock"
import ControlPanelModule from "./modules/ControlPanel"
import MediaModule from "./modules/Media"
import SysTrayModule from "./modules/SysTray"
import WorkspacesModule from "./modules/Worksplaces"
import AstalHyprland from "gi://AstalHyprland?version=0.1"
import { createBinding, With } from "gnim"

interface Props {
  monitor: Gdk.Monitor
  $?: (self: any) => void
}

export default function TopBar({ monitor, $ }: Props) {
  const hyprland = AstalHyprland.get_default()
  const currentWindow = createBinding(hyprland, "focusedClient")

  return (
    <window
      visible
      name="top-bar"
      class="Bar"
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Anchors.TOP | Anchors.LEFT | Anchors.RIGHT}
      application={app}
      $={$}
    >
      <centerbox>
        <box $type="start"></box>
        <box $type="center">
          <With value={currentWindow}>
            {(window) => window && <label label={window.title} />}
          </With>
        </box>
        <With value={currentWindow}>
          {(window) => window && <box $type="end"></box>}
        </With>
      </centerbox>
    </window>
  )
}
