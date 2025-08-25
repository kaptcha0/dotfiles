import app from "ags/gtk4/app"
import style from "./style.scss"
import SideBar from "./widget/SideBar"
import { createBinding, onCleanup, For, This } from "ags"
import CalendarWindow from "./widget/popups/Calendar"
import ControlPanelWindow from "./widget/popups/ControlPanel"
import MediaWindow from "./widget/popups/Media"
import LauncherWindow from "./widget/popups/Launcher"
import TopBar from "./widget/TopBar"
import { generateOnClicked } from "./result/share/widget/common"

function main() {
  const monitors = createBinding(app, "monitors")

  return (
    <For each={monitors}>
      {(monitor) => (
        <This this={app}>
          <SideBar
            monitor={monitor}
            $={(self) => onCleanup(() => self.destroy())}
          />
          <TopBar
            monitor={monitor}
            $={(self) => onCleanup(() => self.destroy())}
          />
          <LauncherWindow />
          <CalendarWindow />
          <ControlPanelWindow />
          <MediaWindow />
        </This>
      )}
    </For>
  )
}

app.start({
  css: style,
  main,
})
