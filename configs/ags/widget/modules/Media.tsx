import AstalWp from "gi://AstalWp"
import { createBinding, With } from "ags"
import { generateOnClicked, ORIENTATION } from "../common"

export default function MediaModule() {
  const wp = AstalWp.get_default()
  const { defaultSpeaker, defaultMicrophone } = wp.audio

  const volumeIcon = createBinding(defaultSpeaker, "volumeIcon")
  const micIcon = createBinding(defaultMicrophone, "volumeIcon")

  return (
    <button onClicked={generateOnClicked("media")}>
      <box orientation={ORIENTATION}>
        <With value={volumeIcon}>
          {(iconName) => <image iconName={iconName} />}
        </With>
        <With value={micIcon}>
          {(iconName) => <image iconName={iconName} />}
        </With>
      </box>
    </button>
  )
}
