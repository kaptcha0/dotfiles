import app from "ags/gtk4/app"
import { Astal, Gdk, Gtk } from "ags/gtk4"
import { Anchors, ORIENTATION } from "./common"
import AppLauncherModule from "./modules/AppLauncher"
import ClockModule from "./modules/Clock"
import BatteryModule from "./modules/Battery"
import MediaModule from "./modules/Media"
import SysTrayModule from "./modules/SysTray"
import WorkspacesModule from "./modules/Worksplaces"
import { onCleanup } from "ags"

interface Props {
  monitor: Gdk.Monitor
  $?: (self: any) => void
}

export default function SideBar({ monitor, $ }: Props) {
  let win: Gtk.Window

  onCleanup(() => {
    win.destroy()
  })

  return (
    <window
      visible
      $={(self) => {
        win = self
        $?.(self)
      }}
      name="bar"
      cssClasses={["Bar", "kaptcha0-bar"]}
      gdkmonitor={monitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Anchors.TOP | Anchors.LEFT | Anchors.RIGHT}
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
          <BatteryModule />
          <SysTrayModule />
        </box>
      </centerbox>
    </window>
  )
}
