import { createBinding, For } from "ags"
import { ORIENTATION } from "../common"
import AstalTray from "gi://AstalTray"

export default function SysTrayModule() {
  const tray = AstalTray.get_default()
  const trayIcons = createBinding(tray, "items")

  return (
    <box orientation={ORIENTATION}>
      <For each={trayIcons}>
        {(item) => (
          <button>
            <image gicon={item.gicon} />
          </button>
        )}
      </For>
    </box>
  )
}
