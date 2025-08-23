import AstalWp from "gi://AstalWp"
import { createBinding, With } from "ags"
import { ORIENTATION } from "../common"

export default function MediaModule() {
  const wp = AstalWp.get_default()
  const default_speaker = wp.audio.default_speaker
  const default_mic = wp.audio.default_microphone

  const volumeIcon = createBinding(default_speaker, "volumeIcon")
  const micIcon = createBinding(default_mic, "volumeIcon")

  return (
    <button>
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
