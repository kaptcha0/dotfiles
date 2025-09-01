import app from "ags/gtk4/app"
import style from "./style.scss"
import Bar from "./widget/Bar"
import { createBinding, For, This } from "ags"
import LauncherWindow from "./widget/popups/Launcher"

function main() {
  const monitors = createBinding(app, "monitors")

  return (
    <For each={monitors}>
      {(monitor) => (
        <This this={app}>
          <Bar monitor={monitor} />
          <LauncherWindow />
        </This>
      )}
    </For>
  )
}

app.start({
  css: style,
  main,
})
