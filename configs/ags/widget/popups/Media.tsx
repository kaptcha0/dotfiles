import AstalWp from "gi://AstalWp"
import PopupWindow from "./Popup"
import { createBinding } from "ags"

export default function MediaWindow() {
  const wp = AstalWp.get_default()
  const default_speaker = createBinding(wp.audio, "default_speaker")
  const default_mic = createBinding(wp.audio, "default_microphone")

  return (
    <PopupWindow name="media">
      <box></box>
    </PopupWindow>
  )
}
